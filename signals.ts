const signals: {[type: string]: string[]} = {
   'fluid': [
      'ammonia',
      'ammoniacal-solution',
      'crude-oil',
      'electrolyte',
      'fluorine',
      'fluoroketone-cold',
      'fluoroketone-hot',
      'fusion-plasma',
      'heavy-oil',
      'holmium-solution',
      'lava',
      'light-oil',
      'lithium-brine',
      'lubricant',
      'molten-copper',
      'molten-iron',
      'petroleum-gas',
      'steam',
      'sulfuric-acid',
      'thruster-fuel',
      'thruster-oxidizer',
      'water',
   ],
   'item': [
      'accumulator',
      'active-provider-chest',
      'advanced-circuit',
      'agricultural-tower',
      'arithmetic-combinator',
      'artificial-jellynut-soil',
      'artificial-yumako-soil',
      'artillery-turret',
      'assembling-machine-1',
      'assembling-machine-2',
      'assembling-machine-3',
      'asteroid-collector',
      'barrel',
      'battery',
      'battery-equipment',
      'battery-mk2-equipment',
      'battery-mk3-equipment',
      'beacon',
      'belt-immunity-equipment',
      'big-electric-pole',
      'big-mining-drill',
      'biochamber',
      'biolab',
      'biter-egg',
      'boiler',
      'buffer-chest',
      'bulk-inserter',
      'burner-generator',
      'burner-inserter',
      'burner-mining-drill',
      'calcite',
      'captive-biter-spawner',
      'carbon',
      'carbon-fiber',
      'carbonic-asteroid-chunk',
      'cargo-bay',
      'cargo-landing-pad',
      'centrifuge',
      'chemical-plant',
      'coal',
      'coin',
      'concrete',
      'constant-combinator',
      'construction-robot',
      'copper-bacteria',
      'copper-cable',
      'copper-ore',
      'copper-plate',
      'copper-wire',
      'crude-oil-barrel',
      'crusher',
      'cryogenic-plant',
      'decider-combinator',
      'depleted-uranium-fuel-cell',
      'discharge-defense-equipment',
      'display-panel',
      'electric-energy-interface',
      'electric-engine-unit',
      'electric-furnace',
      'electric-mining-drill',
      'electromagnetic-plant',
      'electronic-circuit',
      'empty-module-slot',
      'energy-shield-equipment',
      'energy-shield-mk2-equipment',
      'engine-unit',
      'exoskeleton-equipment',
      'explosives',
      'express-loader',
      'express-splitter',
      'express-transport-belt',
      'express-underground-belt',
      'fast-inserter',
      'fast-loader',
      'fast-splitter',
      'fast-transport-belt',
      'fast-underground-belt',
      'fission-reactor-equipment',
      'flamethrower-turret',
      'fluoroketone-cold-barrel',
      'fluoroketone-hot-barrel',
      'flying-robot-frame',
      'foundation',
      'foundry',
      'fusion-generator',
      'fusion-power-cell',
      'fusion-reactor',
      'fusion-reactor-equipment',
      'gate',
      'green-wire',
      'gun-turret',
      'hazard-concrete',
      'heat-exchanger',
      'heat-interface',
      'heat-pipe',
      'heating-tower',
      'heavy-oil-barrel',
      'holmium-ore',
      'holmium-plate',
      'ice',
      'ice-platform',
      'infinity-chest',
      'infinity-pipe',
      'inserter',
      'iron-bacteria',
      'iron-chest',
      'iron-gear-wheel',
      'iron-ore',
      'iron-plate',
      'iron-stick',
      'jellynut-seed',
      'lab',
      'land-mine',
      'landfill',
      'lane-splitter',
      'laser-turret',
      'light-oil-barrel',
      'lightning-collector',
      'lightning-rod',
      'linked-belt',
      'linked-chest',
      'lithium',
      'lithium-plate',
      'loader',
      'logistic-robot',
      'long-handed-inserter',
      'low-density-structure',
      'lubricant-barrel',
      'medium-electric-pole',
      'metallic-asteroid-chunk',
      'night-vision-equipment',
      'nuclear-fuel',
      'nuclear-reactor',
      'nutrients',
      'offshore-pump',
      'oil-refinery',
      'overgrowth-jellynut-soil',
      'overgrowth-yumako-soil',
      'oxide-asteroid-chunk',
      'passive-provider-chest',
      'pentapod-egg',
      'personal-laser-defense-equipment',
      'personal-roboport-equipment',
      'personal-roboport-mk2-equipment',
      'petroleum-gas-barrel',
      'pipe',
      'pipe-to-ground',
      'plastic-bar',
      'power-switch',
      'processing-unit',
      'programmable-speaker',
      'promethium-asteroid-chunk',
      'pump',
      'pumpjack',
      'quantum-processor',
      'radar',
      'rail-chain-signal',
      'rail-signal',
      'rail-support',
      'railgun-turret',
      'recycler',
      'red-wire',
      'refined-concrete',
      'refined-hazard-concrete',
      'requester-chest',
      'roboport',
      'rocket-fuel',
      'rocket-part',
      'rocket-silo',
      'rocket-turret',
      'science',
      'scrap',
      'selector-combinator',
      'simple-entity-with-force',
      'simple-entity-with-owner',
      'small-electric-pole',
      'small-lamp',
      'solar-panel',
      'solar-panel-equipment',
      'solid-fuel',
      'space-platform-foundation',
      'space-platform-hub',
      'splitter',
      'spoilage',
      'stack-inserter',
      'steam-engine',
      'steam-turbine',
      'steel-chest',
      'steel-furnace',
      'steel-plate',
      'stone',
      'stone-brick',
      'stone-furnace',
      'stone-wall',
      'storage-chest',
      'storage-tank',
      'substation',
      'sulfur',
      'sulfuric-acid-barrel',
      'supercapacitor',
      'superconductor',
      'tesla-turret',
      'thruster',
      'toolbelt-equipment',
      'train-stop',
      'transport-belt',
      'tree-seed',
      'tungsten-carbide',
      'tungsten-ore',
      'tungsten-plate',
      'turbo-loader',
      'turbo-splitter',
      'turbo-transport-belt',
      'turbo-underground-belt',
      'underground-belt',
      'uranium-235',
      'uranium-238',
      'uranium-fuel-cell',
      'uranium-ore',
      'water-barrel',
      'wood',
      'wooden-chest',
      'yumako-seed',
   ],
   'quality': [
      'epic',
      'legendary',
      'normal',
      'rare',
      'uncommon',
   ],
   'virtual': [
      'down-arrow',
      'down-left-arrow',
      'down-right-arrow',
      'left-arrow',
      'right-arrow',
      'shape-circle',
      'shape-corner',
      'shape-cross',
      'shape-curve',
      'shape-diagonal',
      'shape-diagonal-cross',
      'shape-horizontal',
      'shape-t',
      'shape-vertical',
      'signal-0',
      'signal-1',
      'signal-2',
      'signal-3',
      'signal-4',
      'signal-5',
      'signal-6',
      'signal-7',
      'signal-8',
      'signal-9',
      'signal-A',
      'signal-B',
      'signal-C',
      'signal-D',
      'signal-E',
      'signal-F',
      'signal-G',
      'signal-H',
      'signal-I',
      'signal-J',
      'signal-K',
      'signal-L',
      'signal-M',
      'signal-N',
      'signal-O',
      'signal-P',
      'signal-Q',
      'signal-R',
      'signal-S',
      'signal-T',
      'signal-U',
      'signal-V',
      'signal-W',
      'signal-X',
      'signal-Y',
      'signal-Z',
      'signal-any-quality',
      'signal-black',
      'signal-blue',
      'signal-check',
      'signal-cyan',
      'signal-deny',
      'signal-dot',
      'signal-ghost',
      'signal-green',
      'signal-grey',
      'signal-heart',
      'signal-info',
      'signal-pink',
      'signal-red',
      'signal-skull',
      'signal-stack-size',
      'signal-white',
      'signal-yellow',
      'up-arrow',
      'up-left-arrow',
      'up-right-arrow',
   ],
   'entity': [
      'behemoth-biter',
      'behemoth-spitter',
      'big-biter',
      'big-spitter',
      'big-wriggler-pentapod',
      'big-wriggler-pentapod-premature',
      'medium-biter',
      'medium-spitter',
      'medium-wriggler-pentapod',
      'medium-wriggler-pentapod-premature',
      'small-biter',
      'small-spitter',
      'small-wriggler-pentapod',
      'small-wriggler-pentapod-premature',
   ],
   'recipe': [
      'accumulator',
      'accumulator-recycling',
      'acid-neutralisation',
      'active-provider-chest',
      'active-provider-chest-recycling',
      'advanced-carbonic-asteroid-crushing',
      'advanced-circuit',
      'advanced-circuit-recycling',
      'advanced-metallic-asteroid-crushing',
      'advanced-oil-processing',
      'advanced-oxide-asteroid-crushing',
      'advanced-thruster-fuel',
      'advanced-thruster-oxidizer',
      'agricultural-science-pack',
      'agricultural-science-pack-recycling',
      'agricultural-tower',
      'agricultural-tower-recycling',
      'ammonia-rocket-fuel',
      'ammoniacal-solution-separation',
      'arithmetic-combinator',
      'arithmetic-combinator-recycling',
      'artificial-jellynut-soil',
      'artificial-jellynut-soil-recycling',
      'artificial-yumako-soil',
      'artificial-yumako-soil-recycling',
      'artillery-shell',
      'artillery-shell-recycling',
      'artillery-targeting-remote-recycling',
      'artillery-turret',
      'artillery-turret-recycling',
      'artillery-wagon',
      'artillery-wagon-cannon-recycling',
      'artillery-wagon-recycling',
      'assembling-machine-1',
      'assembling-machine-1-recycling',
      'assembling-machine-2',
      'assembling-machine-2-recycling',
      'assembling-machine-3',
      'assembling-machine-3-recycling',
      'asteroid-collector',
      'asteroid-collector-recycling',
      'atomic-bomb',
      'atomic-bomb-recycling',
      'automation-science-pack',
      'automation-science-pack-recycling',
      'barrel',
      'barrel-recycling',
      'basic-oil-processing',
      'battery',
      'battery-equipment',
      'battery-equipment-recycling',
      'battery-mk2-equipment',
      'battery-mk2-equipment-recycling',
      'battery-mk3-equipment',
      'battery-mk3-equipment-recycling',
      'battery-recycling',
      'beacon',
      'beacon-recycling',
      'belt-immunity-equipment',
      'belt-immunity-equipment-recycling',
      'big-electric-pole',
      'big-electric-pole-recycling',
      'big-mining-drill',
      'big-mining-drill-recycling',
      'biochamber',
      'biochamber-recycling',
      'bioflux',
      'bioflux-recycling',
      'biolab',
      'biolab-recycling',
      'biolubricant',
      'bioplastic',
      'biosulfur',
      'biter-egg',
      'biter-egg-recycling',
      'blueprint-book-recycling',
      'blueprint-recycling',
      'boiler',
      'boiler-recycling',
      'buffer-chest',
      'buffer-chest-recycling',
      'bulk-inserter',
      'bulk-inserter-recycling',
      'burner-generator-recycling',
      'burner-inserter',
      'burner-inserter-recycling',
      'burner-mining-drill',
      'burner-mining-drill-recycling',
      'burnt-spoilage',
      'calcite-recycling',
      'cannon-shell',
      'cannon-shell-recycling',
      'captive-biter-spawner',
      'captive-biter-spawner-recycling',
      'capture-robot-rocket',
      'capture-robot-rocket-recycling',
      'car',
      'car-recycling',
      'carbon',
      'carbon-fiber',
      'carbon-fiber-recycling',
      'carbon-recycling',
      'carbonic-asteroid-chunk-recycling',
      'carbonic-asteroid-crushing',
      'carbonic-asteroid-reprocessing',
      'cargo-bay',
      'cargo-bay-recycling',
      'cargo-landing-pad',
      'cargo-landing-pad-recycling',
      'cargo-wagon',
      'cargo-wagon-recycling',
      'casting-copper',
      'casting-copper-cable',
      'casting-iron',
      'casting-iron-gear-wheel',
      'casting-iron-stick',
      'casting-low-density-structure',
      'casting-pipe',
      'casting-pipe-to-ground',
      'casting-steel',
      'centrifuge',
      'centrifuge-recycling',
      'chemical-plant',
      'chemical-plant-recycling',
      'chemical-science-pack',
      'chemical-science-pack-recycling',
      'cliff-explosives',
      'cliff-explosives-recycling',
      'cluster-grenade',
      'cluster-grenade-recycling',
      'coal-liquefaction',
      'coal-recycling',
      'coal-synthesis',
      'coin-recycling',
      'combat-shotgun',
      'combat-shotgun-recycling',
      'concrete',
      'concrete-from-molten-iron',
      'concrete-recycling',
      'constant-combinator',
      'constant-combinator-recycling',
      'construction-robot',
      'construction-robot-recycling',
      'copper-bacteria',
      'copper-bacteria-cultivation',
      'copper-bacteria-recycling',
      'copper-cable',
      'copper-cable-recycling',
      'copper-ore-recycling',
      'copper-plate',
      'copper-plate-recycling',
      'copper-wire-recycling',
      'copy-paste-tool-recycling',
      'crude-oil-barrel',
      'crude-oil-barrel-recycling',
      'crusher',
      'crusher-recycling',
      'cryogenic-plant',
      'cryogenic-plant-recycling',
      'cryogenic-science-pack',
      'cryogenic-science-pack-recycling',
      'cut-paste-tool-recycling',
      'decider-combinator',
      'decider-combinator-recycling',
      'deconstruction-planner-recycling',
      'defender-capsule',
      'defender-capsule-recycling',
      'depleted-uranium-fuel-cell-recycling',
      'destroyer-capsule',
      'destroyer-capsule-recycling',
      'discharge-defense-equipment',
      'discharge-defense-equipment-recycling',
      'discharge-defense-remote-recycling',
      'display-panel',
      'display-panel-recycling',
      'distractor-capsule',
      'distractor-capsule-recycling',
      'efficiency-module',
      'efficiency-module-2',
      'efficiency-module-2-recycling',
      'efficiency-module-3',
      'efficiency-module-3-recycling',
      'efficiency-module-recycling',
      'electric-energy-interface-recycling',
      'electric-engine-unit',
      'electric-engine-unit-recycling',
      'electric-furnace',
      'electric-furnace-recycling',
      'electric-mining-drill',
      'electric-mining-drill-recycling',
      'electrolyte',
      'electromagnetic-plant',
      'electromagnetic-plant-recycling',
      'electromagnetic-science-pack',
      'electromagnetic-science-pack-recycling',
      'electronic-circuit',
      'electronic-circuit-recycling',
      'empty-crude-oil-barrel',
      'empty-fluoroketone-cold-barrel',
      'empty-fluoroketone-hot-barrel',
      'empty-heavy-oil-barrel',
      'empty-light-oil-barrel',
      'empty-lubricant-barrel',
      'empty-module-slot-recycling',
      'empty-petroleum-gas-barrel',
      'empty-sulfuric-acid-barrel',
      'empty-water-barrel',
      'energy-shield-equipment',
      'energy-shield-equipment-recycling',
      'energy-shield-mk2-equipment',
      'energy-shield-mk2-equipment-recycling',
      'engine-unit',
      'engine-unit-recycling',
      'exoskeleton-equipment',
      'exoskeleton-equipment-recycling',
      'explosive-cannon-shell',
      'explosive-cannon-shell-recycling',
      'explosive-rocket',
      'explosive-rocket-recycling',
      'explosive-uranium-cannon-shell',
      'explosive-uranium-cannon-shell-recycling',
      'explosives',
      'explosives-recycling',
      'express-loader',
      'express-loader-recycling',
      'express-splitter',
      'express-splitter-recycling',
      'express-transport-belt',
      'express-transport-belt-recycling',
      'express-underground-belt',
      'express-underground-belt-recycling',
      'fast-inserter',
      'fast-inserter-recycling',
      'fast-loader',
      'fast-loader-recycling',
      'fast-splitter',
      'fast-splitter-recycling',
      'fast-transport-belt',
      'fast-transport-belt-recycling',
      'fast-underground-belt',
      'fast-underground-belt-recycling',
      'firearm-magazine',
      'firearm-magazine-recycling',
      'fish-breeding',
      'fission-reactor-equipment',
      'fission-reactor-equipment-recycling',
      'flamethrower',
      'flamethrower-ammo',
      'flamethrower-ammo-recycling',
      'flamethrower-recycling',
      'flamethrower-turret',
      'flamethrower-turret-recycling',
      'fluid-wagon',
      'fluid-wagon-recycling',
      'fluoroketone',
      'fluoroketone-cold-barrel',
      'fluoroketone-cold-barrel-recycling',
      'fluoroketone-cooling',
      'fluoroketone-hot-barrel',
      'fluoroketone-hot-barrel-recycling',
      'flying-robot-frame',
      'flying-robot-frame-recycling',
      'foundation',
      'foundation-recycling',
      'foundry',
      'foundry-recycling',
      'fusion-generator',
      'fusion-generator-recycling',
      'fusion-power-cell',
      'fusion-power-cell-recycling',
      'fusion-reactor',
      'fusion-reactor-equipment',
      'fusion-reactor-equipment-recycling',
      'fusion-reactor-recycling',
      'gate',
      'gate-recycling',
      'green-wire-recycling',
      'grenade',
      'grenade-recycling',
      'gun-turret',
      'gun-turret-recycling',
      'hazard-concrete',
      'hazard-concrete-recycling',
      'heat-exchanger',
      'heat-exchanger-recycling',
      'heat-interface',
      'heat-interface-recycling',
      'heat-pipe',
      'heat-pipe-recycling',
      'heating-tower',
      'heating-tower-recycling',
      'heavy-armor',
      'heavy-armor-recycling',
      'heavy-oil-barrel',
      'heavy-oil-barrel-recycling',
      'heavy-oil-cracking',
      'holmium-ore-recycling',
      'holmium-plate',
      'holmium-plate-recycling',
      'holmium-solution',
      'ice-melting',
      'ice-platform',
      'ice-platform-recycling',
      'ice-recycling',
      'infinity-chest',
      'infinity-chest-recycling',
      'infinity-pipe',
      'infinity-pipe-recycling',
      'inserter',
      'inserter-recycling',
      'iron-bacteria',
      'iron-bacteria-cultivation',
      'iron-bacteria-recycling',
      'iron-chest',
      'iron-chest-recycling',
      'iron-gear-wheel',
      'iron-gear-wheel-recycling',
      'iron-ore-recycling',
      'iron-plate',
      'iron-plate-recycling',
      'iron-stick',
      'iron-stick-recycling',
      'jelly-recycling',
      'jellynut-processing',
      'jellynut-recycling',
      'jellynut-seed-recycling',
      'kovarex-enrichment-process',
      'lab',
      'lab-recycling',
      'land-mine',
      'land-mine-recycling',
      'landfill',
      'landfill-recycling',
      'lane-splitter-recycling',
      'laser-turret',
      'laser-turret-recycling',
      'light-armor',
      'light-armor-recycling',
      'light-oil-barrel',
      'light-oil-barrel-recycling',
      'light-oil-cracking',
      'lightning-collector',
      'lightning-collector-recycling',
      'lightning-rod',
      'lightning-rod-recycling',
      'linked-belt-recycling',
      'linked-chest-recycling',
      'lithium',
      'lithium-plate',
      'lithium-plate-recycling',
      'lithium-recycling',
      'loader',
      'loader-recycling',
      'locomotive',
      'locomotive-recycling',
      'logistic-robot',
      'logistic-robot-recycling',
      'logistic-science-pack',
      'logistic-science-pack-recycling',
      'long-handed-inserter',
      'long-handed-inserter-recycling',
      'low-density-structure',
      'low-density-structure-recycling',
      'lubricant',
      'lubricant-barrel',
      'lubricant-barrel-recycling',
      'mech-armor',
      'mech-armor-recycling',
      'medium-electric-pole',
      'medium-electric-pole-recycling',
      'metallic-asteroid-chunk-recycling',
      'metallic-asteroid-crushing',
      'metallic-asteroid-reprocessing',
      'metallurgic-science-pack',
      'metallurgic-science-pack-recycling',
      'military-science-pack',
      'military-science-pack-recycling',
      'modular-armor',
      'modular-armor-recycling',
      'molten-copper',
      'molten-copper-from-lava',
      'molten-iron',
      'molten-iron-from-lava',
      'night-vision-equipment',
      'night-vision-equipment-recycling',
      'nuclear-fuel',
      'nuclear-fuel-recycling',
      'nuclear-fuel-reprocessing',
      'nuclear-reactor',
      'nuclear-reactor-recycling',
      'nutrients-from-bioflux',
      'nutrients-from-biter-egg',
      'nutrients-from-fish',
      'nutrients-from-spoilage',
      'nutrients-from-yumako-mash',
      'nutrients-recycling',
      'offshore-pump',
      'offshore-pump-recycling',
      'oil-refinery',
      'oil-refinery-recycling',
      'overgrowth-jellynut-soil',
      'overgrowth-jellynut-soil-recycling',
      'overgrowth-yumako-soil',
      'overgrowth-yumako-soil-recycling',
      'oxide-asteroid-chunk-recycling',
      'oxide-asteroid-crushing',
      'oxide-asteroid-reprocessing',
      'passive-provider-chest',
      'passive-provider-chest-recycling',
      'pentapod-egg',
      'pentapod-egg-recycling',
      'personal-laser-defense-equipment',
      'personal-laser-defense-equipment-recycling',
      'personal-roboport-equipment',
      'personal-roboport-equipment-recycling',
      'personal-roboport-mk2-equipment',
      'personal-roboport-mk2-equipment-recycling',
      'petroleum-gas-barrel',
      'petroleum-gas-barrel-recycling',
      'piercing-rounds-magazine',
      'piercing-rounds-magazine-recycling',
      'piercing-shotgun-shell',
      'piercing-shotgun-shell-recycling',
      'pipe',
      'pipe-recycling',
      'pipe-to-ground',
      'pipe-to-ground-recycling',
      'pistol',
      'pistol-recycling',
      'plastic-bar',
      'plastic-bar-recycling',
      'poison-capsule',
      'poison-capsule-recycling',
      'power-armor',
      'power-armor-mk2',
      'power-armor-mk2-recycling',
      'power-armor-recycling',
      'power-switch',
      'power-switch-recycling',
      'processing-unit',
      'processing-unit-recycling',
      'production-science-pack',
      'production-science-pack-recycling',
      'productivity-module',
      'productivity-module-2',
      'productivity-module-2-recycling',
      'productivity-module-3',
      'productivity-module-3-recycling',
      'productivity-module-recycling',
      'programmable-speaker',
      'programmable-speaker-recycling',
      'promethium-asteroid-chunk-recycling',
      'promethium-science-pack',
      'promethium-science-pack-recycling',
      'pump',
      'pump-recycling',
      'pumpjack',
      'pumpjack-recycling',
      'quality-module',
      'quality-module-2',
      'quality-module-2-recycling',
      'quality-module-3',
      'quality-module-3-recycling',
      'quality-module-recycling',
      'quantum-processor',
      'quantum-processor-recycling',
      'radar',
      'radar-recycling',
      'rail',
      'rail-chain-signal',
      'rail-chain-signal-recycling',
      'rail-ramp',
      'rail-ramp-recycling',
      'rail-recycling',
      'rail-signal',
      'rail-signal-recycling',
      'rail-support',
      'rail-support-recycling',
      'railgun',
      'railgun-ammo',
      'railgun-ammo-recycling',
      'railgun-recycling',
      'railgun-turret',
      'railgun-turret-recycling',
      'raw-fish-recycling',
      'recycler',
      'recycler-recycling',
      'red-wire-recycling',
      'refined-concrete',
      'refined-concrete-recycling',
      'refined-hazard-concrete',
      'refined-hazard-concrete-recycling',
      'repair-pack',
      'repair-pack-recycling',
      'requester-chest',
      'requester-chest-recycling',
      'roboport',
      'roboport-recycling',
      'rocket',
      'rocket-fuel',
      'rocket-fuel-from-jelly',
      'rocket-fuel-recycling',
      'rocket-launcher',
      'rocket-launcher-recycling',
      'rocket-part',
      'rocket-part-recycling',
      'rocket-recycling',
      'rocket-silo',
      'rocket-silo-recycling',
      'rocket-turret',
      'rocket-turret-recycling',
      'science-recycling',
      'scrap-recycling',
      'selection-tool-recycling',
      'selector-combinator',
      'selector-combinator-recycling',
      'shotgun',
      'shotgun-recycling',
      'shotgun-shell',
      'shotgun-shell-recycling',
      'simple-coal-liquefaction',
      'simple-entity-with-force-recycling',
      'simple-entity-with-owner-recycling',
      'slowdown-capsule',
      'slowdown-capsule-recycling',
      'small-electric-pole',
      'small-electric-pole-recycling',
      'small-lamp',
      'small-lamp-recycling',
      'solar-panel',
      'solar-panel-equipment',
      'solar-panel-equipment-recycling',
      'solar-panel-recycling',
      'solid-fuel-from-ammonia',
      'solid-fuel-from-heavy-oil',
      'solid-fuel-from-light-oil',
      'solid-fuel-from-petroleum-gas',
      'solid-fuel-recycling',
      'space-platform-foundation',
      'space-platform-foundation-recycling',
      'space-platform-hub-recycling',
      'space-platform-starter-pack',
      'space-platform-starter-pack-recycling',
      'space-science-pack',
      'space-science-pack-recycling',
      'speed-module',
      'speed-module-2',
      'speed-module-2-recycling',
      'speed-module-3',
      'speed-module-3-recycling',
      'speed-module-recycling',
      'spidertron',
      'spidertron-recycling',
      'spidertron-remote-recycling',
      'spidertron-rocket-launcher-1-recycling',
      'spidertron-rocket-launcher-2-recycling',
      'spidertron-rocket-launcher-3-recycling',
      'spidertron-rocket-launcher-4-recycling',
      'splitter',
      'splitter-recycling',
      'spoilage-recycling',
      'stack-inserter',
      'stack-inserter-recycling',
      'steam-condensation',
      'steam-engine',
      'steam-engine-recycling',
      'steam-turbine',
      'steam-turbine-recycling',
      'steel-chest',
      'steel-chest-recycling',
      'steel-furnace',
      'steel-furnace-recycling',
      'steel-plate',
      'steel-plate-recycling',
      'stone-brick',
      'stone-brick-recycling',
      'stone-furnace',
      'stone-furnace-recycling',
      'stone-recycling',
      'stone-wall',
      'stone-wall-recycling',
      'storage-chest',
      'storage-chest-recycling',
      'storage-tank',
      'storage-tank-recycling',
      'submachine-gun',
      'submachine-gun-recycling',
      'substation',
      'substation-recycling',
      'sulfur',
      'sulfur-recycling',
      'sulfuric-acid',
      'sulfuric-acid-barrel',
      'sulfuric-acid-barrel-recycling',
      'supercapacitor',
      'supercapacitor-recycling',
      'superconductor',
      'superconductor-recycling',
      'tank',
      'tank-cannon-recycling',
      'tank-flamethrower-recycling',
      'tank-machine-gun-recycling',
      'tank-recycling',
      'tesla-ammo',
      'tesla-ammo-recycling',
      'tesla-turret',
      'tesla-turret-recycling',
      'teslagun',
      'teslagun-recycling',
      'thruster',
      'thruster-fuel',
      'thruster-oxidizer',
      'thruster-recycling',
      'toolbelt-equipment',
      'toolbelt-equipment-recycling',
      'train-stop',
      'train-stop-recycling',
      'transport-belt',
      'transport-belt-recycling',
      'tree-seed-recycling',
      'tungsten-carbide',
      'tungsten-carbide-recycling',
      'tungsten-ore-recycling',
      'tungsten-plate',
      'tungsten-plate-recycling',
      'turbo-loader',
      'turbo-loader-recycling',
      'turbo-splitter',
      'turbo-splitter-recycling',
      'turbo-transport-belt',
      'turbo-transport-belt-recycling',
      'turbo-underground-belt',
      'turbo-underground-belt-recycling',
      'underground-belt',
      'underground-belt-recycling',
      'upgrade-planner-recycling',
      'uranium-235-recycling',
      'uranium-238-recycling',
      'uranium-cannon-shell',
      'uranium-cannon-shell-recycling',
      'uranium-fuel-cell',
      'uranium-fuel-cell-recycling',
      'uranium-ore-recycling',
      'uranium-processing',
      'uranium-rounds-magazine',
      'uranium-rounds-magazine-recycling',
      'utility-science-pack',
      'utility-science-pack-recycling',
      'vehicle-machine-gun-recycling',
      'water-barrel',
      'water-barrel-recycling',
      'wood-processing',
      'wood-recycling',
      'wooden-chest',
      'wooden-chest-recycling',
      'yumako-mash-recycling',
      'yumako-processing',
      'yumako-recycling',
      'yumako-seed-recycling',
   ],
   'space-location': [
      'shattered-planet',
      'solar-system-edge',
   ],
   'asteroid-chunk': [
      'carbonic-asteroid-chunk',
      'metallic-asteroid-chunk',
      'oxide-asteroid-chunk',
      'promethium-asteroid-chunk',
   ]
};

export default signals;
