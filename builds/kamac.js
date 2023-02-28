module.exports = {
    board_env: "STM32F103RE_creality",
    active: true,
    only: "stable",
    meta: {
        stable_name: "ender3_v4.2.2-2.1.2-kamac-{{uid}}",
        nightly_name: "ender3_v4.2.2-{{current_date}}-kamac-{{uid}}"
//        stable_name: "ender3pro_v4.2.2-2.1.2-kamac-{{uid}}",
//        nightly_name: "ender3pro_v4.2.2-{{current_date}}-kamac-{{uid}}"
    },
    based_on: {
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/Creality/Ender-3/CrealityV422/",
//        path: "/config/examples/Creality/Ender-3 Pro/CrealityV422/",
        stable_branch: "release-2.1.2",
        nightly_branch: "bugfix-2.1.x"
    }
};

// trying barebones default build but unfortunately it fails at
// "creating release" with: "Request failed with status code 403" and "Error: Process completed with exit code 1."
