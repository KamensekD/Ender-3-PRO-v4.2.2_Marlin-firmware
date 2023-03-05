module.exports = {

    board_env: "STM32F103RE_creality",
    //active: false,
    //only: "stable",   // build only stable branch
    meta: {
        stable_name: "ender3pro_v4.2.2_M{{marlin_version}}-default-{{current_date}}",
        nightly_name: "ender3pro_v4.2.2_{{uid}}-default-{{current_date}}"
    },

    based_on: {   // default Ender-3 Pro Marlin example config
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/Creality/Ender-3 Pro/CrealityV422/",
        stable_branch: "release-{{marlin_version}}",   // latest stable
        nightly_branch: "bugfix-2.1.x"    // latest nightly
    },

    
    
    configuration:     {   // "Configuration.h" customizations
        enable: [

            ["STRING_CONFIG_H_AUTHOR", "(Dust, valerionew, Ender-3, zisismaras, KamensekD)"],

            //standard leveling menu helper
            "LCD_BED_TRAMMING",
            "BED_TRAMMING_INCLUDE_CENTER"

        ]
    },
    
    
    
    configuration_adv: {   // "Configuration_adv.h" customizations
        enable: [

            //octoprint
            "HOST_ACTION_COMMANDS"

        ]
    }

    

};
