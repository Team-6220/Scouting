var config_data = `
{
  "enable_google_sheets": "true",
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "gsCol": "scouter",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "gsCol": "event",
      "code": "e",
      "type": "event",
      "defaultValue": "2023ilch",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
      "gsCol": "match",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "de": "Double Elimination<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "gsCol": "match_num",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot",
      "gsCol": "robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "gsCol": "team_num",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "gsCol": "auto_start_pos",
      "code": "as",
      "type": "field_image",
      "filename": "2023/field_image.png"
    }
  ],
  "auton": [
    { "name": "Mobility?",
      "gsCol": "mobility",
      "code": "am",
      "type": "bool"
    },
    { "name": "High Cube Scored",
      "gsCol": "auto_high_cube",
      "code": "auh",
      "type": "counter"
    },
    { "name": "Medium Cube Scored",
      "gsCol": "auto_med_cube",
      "code": "aum",
      "type": "counter"
    },
    { "name": "Low Cube Scored",
      "gsCol": "auto_low_cube",
      "code": "aul",
      "type": "counter"
    },
    { "name": "High Cone Scored",
      "gsCol": "auto_high_cone",
      "code": "aoh",
      "type": "counter"
    },
    { "name": "Medium Cone Scored",
      "gsCol": "auto_med_cone",
      "code": "aom",
      "type": "counter"
    },
    { "name": "Low Cone Scored",
      "gsCol": "auto_low_cone",
      "code": "aol",
      "type": "counter"
    },
    { "name": "Docked",
      "gsCol": "auto_docked",
      "code": "ad",
      "type":"radio",
      "choices": {
        "d": "Docked (not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      }
    }
  ],
  "teleop": [
    { "name": "High Cube Scored",
      "gsCol": "high_cube",
      "code": "tuh",
      "type": "counter"
    },
    { "name": "Medium Cube Scored",
      "gsCol": "med_cube",
      "code": "tum",
      "type": "counter"
    },
    { "name": "Low Cube Scored",
      "gsCol": "low_cube",
      "code": "tul",
      "type": "counter"
    },
    { "name": "High Cone Scored",
      "gsCol": "high_cone",
      "code": "toh",
      "type": "counter"
    },
    { "name": "Medium Cone Scored",
      "gsCol": "med_cone",
      "code": "tom",
      "type": "counter"
    },
    { "name": "Low Cone Scored",
      "gsCol": "low_cone",
      "code": "tol",
      "type": "counter"
    },
    { "name": "Feeder Count",
      "gsCol": "feeder_count",
      "code": "tfc",
      "type": "counter"
    },
    { "name": "Was Defended",
      "gsCol": "defended",
      "code": "wd",
      "type": "bool"
    },
    { "name": "Smart Placement (creates Links)",
      "gsCol": "creates_links",
      "code": "lnk",
      "type": "bool"
    },
    { "name": "Cargo Intake From",
      "gsCol": "cargo_intake_from",
      "code": "cif",
      "type": "radio",
      "choices": {
        "t": "Substation<br>",
        "g": "Ground<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Test Timer",
      "gsCol": "test",
      "code": "test",
      "type": "timer"
    }
  ],
  "endgame": [
    { "name": "Docking Timer",
      "gsCol": "how_long_to_dock",
      "code": "dt",
      "type": "timer"
    },
    { "name": "Final Status",
      "gsCol": "charge_pad_status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "d": "Docked (Not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "# of alliance bots docked/engaged",
      "gsCol": "bots_docked/engaged",
      "code": "cn",
      "type": "counter"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "gsCol": "driver_skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Links Scored",
      "gsCol": "num_links",
      "code": "ls",
      "type": "counter"
    },
    { "name": "Defense Rating",
      "gsCol": "defense",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Swerve drive?",
      "gsCol": "swerve",
      "code": "sd",
      "type": "bool"
    },
    { "name": "Speed Rating",
      "gsCol": "speed",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Died/Tipped",
      "gsCol": "tipped",
      "code": "d",
      "type": "bool"
    },
    { "name": "Avoided coopertition",
      "gsCol": "coopertition",
      "code": "coo",
      "type": "bool"
    },
    { "name": "Make good alliance partner?",
      "gsCol": "good_partner",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Comments",
      "gsCol": "comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 50
    },
    { "name": "Confidence Rating",
      "gsCol": "confidence",
      "code": "cnf",
      "type": "radio",
      "choices": {
        "v": "Very Confident<br>",
        "a": "Average<br>",
        "n": "Not Confident"
        },
      "defaultValue": "a"
    }
  ]
}`;
