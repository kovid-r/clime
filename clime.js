#!/usr/bin/env node

'use strict'

import boxen from 'boxen';
import chalk from 'chalk';
import inquirer from 'inquirer';
import clear from 'clear';
import GitHubStats from 'github-stats';
import terminalLink from 'terminal-link';
import ColorScheme from 'color-scheme';
import {
    readFile
} from 'fs/promises';

var scheme = new ColorScheme;
scheme.from_hue(21)
    .scheme('tetrade')
    .variation('light');

var colors = scheme.colors();

const config = JSON.parse(await readFile(new URL('./config/clime.json',
    import.meta.url)));
const style = JSON.parse(await readFile(new URL('./config/style.json',
    import.meta.url)));

clear();

const prompt = inquirer.createPromptModule();

var jobs = "";
var links = "";
var certifications = "";
var platformTechnologies = "";
var dataTechnologies = "";
var fullstackTechnologies = "";

if (style.useThis == false) {
    var titleColor = colors[0];
    var companyColor = colors[1];
    var durationColor = colors[2];
    var linksColor = colors[3];
    var borderColor = colors[4];
    var nameColor = colors[5];
    var certifierNameColor = colors[6];
    var certificationNameColor = colors[7];
    var platformTechnologies = colors[8];
    var dataTechnologies = colors[9];
    var fullstackTechnologies = colors[10];

} else {
    var titleColor = style.colors.title;
    var companyColor = style.colors.company;
    var durationColor = style.colors.duration;
    var linksColor = style.colors.links;
    var borderColor = style.colors.border;
    var nameColor = style.colors.name;
    var certifierNameColor = style.colors.certifier_name;
    var certificationNameColor = style.colors.certification_name;
    var platformTechnologiesColor = style.colors.platformTechnologies;
    var dataTechnologiesColor = style.colors.dataTechnologies;
    var fullstackTechnologiesColor = style.colors.fullstackTechnologies;
}

for (var i = 0; i < config.jobs.length; i++) {
    jobs = jobs + `${chalk.hex(titleColor)(config.jobs[i].title)} `;
    jobs = jobs + `${chalk.hex(companyColor).bold(config.jobs[i].company)}${chalk.hex(durationColor)(config.jobs[i].duration)} \n`;
};

// Use terminalLink.isSupported
for (var i = 0; i < config.links.length; i++) {
    links = links + terminalLink(chalk.hex(linksColor)(config.links[i].label), config.links[i].base_url + config.links[i].username) + ` `;
}

for (var i = 0; i < config.certifications.length; i++) {
    certifications = certifications + chalk.hex(certifierNameColor)(config.certifications[i].certifier) + ` `
    certifications = certifications + chalk.hex(certificationNameColor)(config.certifications[i].name) + `\n`;
}

for (var i = 0; i < config.technologies.platform.length; i++) {
    platformTechnologies = platformTechnologies + chalk.hex(platformTechnologiesColor)(config.technologies.platform[i]) + ` `;
}

for (var i = 0; i < config.technologies.data.length; i++) {
    dataTechnologies = dataTechnologies + chalk.hex(dataTechnologiesColor)(config.technologies.data[i]) + ` `;
}

for (var i = 0; i < config.technologies.fullstack.length; i++) {
    fullstackTechnologies = fullstackTechnologies + chalk.hex(fullstackTechnologiesColor)(config.technologies.fullstack[i]) + ` `;
}

const data = {
    name: chalk.bold.hex(nameColor)(config.contact.name),
    github: config.contact.github
};

const stats = new GitHubStats({
    theme: "DARK",
    user: data.github,
    s_repo: true,
    s_user: true,
    cal: true
});

const options = [{
    type: "list",
    name: "action",
    message: "Hey! This is " + data.name + ". Let's connect!",
    choices: [{
            name: `${chalk.hex(nameColor).bold("View GitHub stats")}`,
            value: () => {
                stats.toString(function (err, output, warns) {
                    clear();
                    console.log(err || output);
                })
            }
        },
        {
            name: "Exit.",
            value: () => {
                clear();
            }
        }
    ]
}];

const clime = boxen(
    [
        `${data.name}\n`,
        `${jobs}`,
        `${links}`,
        `\n`,
        `${certifications}`,
        `${platformTechnologies}`,
        `${dataTechnologies}`,
        `${fullstackTechnologies}`,
    ].join("\n"), {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "double",
        borderColor: "#" + borderColor
    }
);

console.log(clime);

prompt(options).then(choice => choice.action());