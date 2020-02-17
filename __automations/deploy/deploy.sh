#!/bin/bash

# ================================================================================
# VARIABLES
# ================================================================================
export APP_NAME="felzun-portfolio";
export APP_PATH="${APP_NAME}";
export APP_BLUEGREEN_SUFFIX="-green";
export APP_DOMAIN="mybluemix.net";

export BX_API="https://api.ng.bluemix.net";
export BX_ORG="felzun@br.ibm.com";
export BX_SPC="my-portfolio";
export BX_TMP_FILE="cftarget.tmp";

export MANIFEST_APP="./manifest.yml";


# ================================================================================
# FUNCTIONS
# ================================================================================
function error () {
	echo "============================";
	echo "ERROR: $1";
	echo "============================";

	return 1;
};

function killingError () {
	error "$1";
	exit 0;
}

function checkCloudFoundry () {
	# GET BLUEMIX CURRENT TARGET AND SAVE INTO TEMP FILE
	cf target > $BX_TMP_FILE;
	# EXPORT ALL VALUES NECESSARY TO CONFRONT
	export TARGET_API=$(cat $BX_TMP_FILE | grep 'api endpoint:');
	export TARGET_ORG=$(cat $BX_TMP_FILE | grep 'org:');
	export TARGET_SPC=$(cat $BX_TMP_FILE | grep 'space:');

	if [[ $TARGET_API != *$BX_API* ]]; then
		rm $BX_TMP_FILE;
		error "WRONG BX API";

		cf login -a "$BX_API" -o "$BX_ORG" -s "$BX_SPC";

		return 1;
	fi

	if [[ $TARGET_ORG != *$BX_ORG* ]]; then
		rm $BX_TMP_FILE;
		error "WRONG BX ORG";

		cf target -o "$BX_ORG" -s "$BX_SPC";

		return 1;
	fi

	if [[ $TARGET_SPC != *$BX_SPC* ]]; then
		rm $BX_TMP_FILE;
		error "WRONG BX SPACE";

		cf target -s "$BX_SPC";

		return 1;
	fi

	rm $BX_TMP_FILE;

	return 1;
};

# ================================================================================
# CODE
# ================================================================================

# CHECK CLOUD FOUNDRY API/ORG/SPACE
checkCloudFoundry;

# PUSH APP
#
cf push "${APP_NAME}${APP_BLUEGREEN_SUFFIX}" -n "${APP_PATH}" -f "${MANIFEST_APP}" || killingError "APP PUSH";
# BLUEGREEN DEPLOY OF APP
cf unmap-route "${APP_NAME}" "${APP_DOMAIN}" -n "${APP_PATH}";
cf delete "${APP_NAME}" -f;
cf rename "${APP_NAME}${APP_BLUEGREEN_SUFFIX}" "${APP_NAME}";

echo "=======================================";
echo "FINISHED";
echo "=======================================";
