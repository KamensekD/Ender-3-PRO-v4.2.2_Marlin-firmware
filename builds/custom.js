module.exports = {

    board_env: "STM32F103RE_creality",
    //active: false,
    //only: "stable",   // build only stable branch
    meta: {
        stable_name: "ender3pro_v4.2.2_M{{marlin_version}}-custom-{{current_date}}",
        nightly_name: "ender3pro_v4.2.2_{{current_date}}-custom-{{uid}}"
    },

    based_on: {   // default Ender-3 Pro Marlin example config
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/Creality/Ender-3 Pro/CrealityV422/",
        stable_branch: "release-2.1.2",   // latest stable
        nightly_branch: "bugfix-2.1.x"    // latest nightly
//        repo: "https://github.com/zisismaras/ender_3_4.2.2_firmware",
//        path: "/autogeneratedConfigs/baseLin/{{releaseType}}/latest",  // {{releaseType}} will be either stable or nightly
//        stable_branch: "master",
//        nightly_branch: "master"
    },

    

    configuration:     {   // "Configuration.h" customizations
        enable: [

            
            
            ["STRING_CONFIG_H_AUTHOR", "(Dust, valerionew, Ender-3, zisismaras, KamensekD)"],

            
            //Standard leveling menu helper
            "LCD_BED_TRAMMING",
            "BED_TRAMMING_INCLUDE_CENTER",

            
            //Stepper Driver Types
            //"Creality 4.2.2 boards come with a variety of stepper drivers.
            //Check the board label (typically on SD Card module) and set the correct *_DRIVER_TYPE!
            //(C=HR4988, E=A4988, A=TMC2208, B=TMC2209, H=TMC2225, H8=HR4988)
            //* Use TMC2208/TMC2208_STANDALONE for TMC2225 drivers and TMC2209/TMC2209_STANDALONE for TMC2226 drivers.
            //* Options: A4988, A5984, DRV8825, LV8729, TB6560, TB6600, TMC2100,
            //*          TMC2130, TMC2130_STANDALONE, TMC2160, TMC2160_STANDALONE,
            //*          TMC2208, TMC2208_STANDALONE, TMC2209, TMC2209_STANDALONE,
            //*          TMC26X,  TMC26X_STANDALONE,  TMC2660, TMC2660_STANDALONE,
            //*          TMC5130, TMC5130_STANDALONE, TMC5160, TMC5160_STANDALONE
            ["X_DRIVER_TYPE", "A4988"],
            ["Y_DRIVER_TYPE", "A4988"],
            ["Z_DRIVER_TYPE", "A4988"],
            ["E0_DRIVER_TYPE", "A4988"],
            
            
            //Preheat Constants
            ["PREHEAT_1_LABEL", "PLA"],
            ["PREHEAT_1_TEMP_HOTEND", 200],
            ["PREHEAT_1_TEMP_BED", 50],
            
            ["PREHEAT_2_LABEL", "PETG"],
            ["PREHEAT_2_TEMP_HOTEND", 225],
            ["PREHEAT_2_TEMP_BED", 50],
 
            
        ]
    },

    

    configuration_adv: {   // "Configuration_adv.h" customizations
        enable: [

            
            
            //octoprint
            "HOST_ACTION_COMMANDS"

            
            
        ]
    }

    

};
