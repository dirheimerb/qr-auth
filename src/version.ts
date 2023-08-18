let version = '1.0.0';
const versionRegex = /version\s(\d+\.\d+\.\d+)/;

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

const dateStr = `${year}-${month}-${day}`;


// update version 
const updateVersion = (version: string) => {
    const newVersion = version.replace(versionRegex, `version ${version}`);
    return newVersion;
}

const newVersion = updateVersion(version);

// update date
const updateDate = (version: string) => {
    const newVersion = version.replace(/date\s(\d+\-\d+\-\d+)/, `date ${dateStr}`);
    return newVersion;
}

export const newVersionDate = updateDate(newVersion);

