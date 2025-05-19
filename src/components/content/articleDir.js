import { intro } from "./intro"
import { mission } from "./mission"
import { proposal } from "./proposal"
import { inventory } from "./inventory"
import { themes } from "./themes"
import { logos } from "./logos"
import { graphics } from "./graphics"
import { maintenance } from './maintenance'
import { scope } from "./scope"

export const titleSequence = {
    'intro': `Rhema's New Site`,
    'mission': `Site Mission`,
    'market-research': `Market Research`,
    'proposal': `Suggested Improvements`,
    'map': `Site Map`,
    'inventory': `Inventory Considerations`,
    'themes': `Site Theme Concepts`,
    'logos' : `Logo Upgrades`,
    'graphics': `Graphic Style Options`,
    'scope' : `Project Scope`,
    'maintenance': `Site Maintenance`,
    'timeline' : `Project Timeline`,
}

export const articles = {
    'intro' : intro,
    'mission': mission,
    'proposal': proposal,
    'inventory': inventory,
    'themes' : themes,
    'logos' : logos,
    'graphics': graphics,
    'scope' : scope,
    'maintenance' : maintenance
}

