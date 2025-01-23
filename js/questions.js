const questions = [
    {
        "numb": 1,
        "question": "What does \"Chemical Thermodynamics\" study?",
        "answer": "General laws of mutual energy conversions from one form to another",
        "options": [
            "General laws of mutual energy conversions from one form to another",
            "Energy changes during physical processes.",
            "The rate of chemical reactions",
            "Chemical processes that cause electrons to move",
            "Energy changes during chemical transformations."
        ]
    },
    {
        "numb": 2,
        "question": "What process is called isothermal?",
        "answer": "The process taking place at a constant temperature",
        "options": [
            "The process takes place at a changing temperature",
            "The process taking place at a constant temperature",
            "The process taking place at constant heat capacity",
            "The process taking place at a constant volume",
            "The process taking place at a constant pressure"
        ]
    },
    {
        "numb": 3,
        "question": "Who formulated the Law of Mass Action ?",
        "answer": "Guldberg and Waage",
        "options": [
            "Hess",
            "Bodenstein",
            "Guldberg and Waage",
            "Graham",
            "Berthelot"
        ]
    },
    {
        "numb": 4,
        "question": "How can you name a system consisting of three different phases?",
        "answer": "Heterogeneous system",
        "options": [
            "Homogeneous system",
            "Open system",
            "Heterogeneous system",
            "Isolated system",
            "Closed system"
        ]
    },
    {
        "numb": 5,
        "question": "How do we know if a reaction is spontaneous?",
        "answer": "The sign of \u0394G\u2218",
        "options": [
            "The sign of \u0394G\u2218",
            "The second law of thermodynamics",
            "The first law of thermodynamics",
            "The value of k (the rate constant) tells us",
            "The sign of \u0394H"
        ]
    },
    {
        "numb": 6,
        "question": "Which of the following techniques will not increase the rate of a reaction?",
        "answer": "Reduce the amount of product",
        "options": [
            "Increasing the surface area between reactants",
            "Reduce the amount of product",
            "Heating the reactants in order to reach the activation energy",
            "Introducing a catalyst to lower the activation energy of the reaction",
            "Increasing the amount of reactants"
        ]
    },
    {
        "numb": 7,
        "question": "Which of the following true for a spontaneous endothermic process?",
        "answer": "\u2206G<0",
        "options": [
            "\u2206S<0",
            "\u2206G<0",
            "\u2206H<0",
            "\u2206G=0",
            "\u2206G>0"
        ]
    },
    {
        "numb": 8,
        "question": "Which of the following reactions are monomolecular?",
        "answer": "NH4Cl\u2192NH3+HCl",
        "options": [
            "NH3+HCl\u2192NH4Cl",
            "NH4Cl\u2192NH3+HCl",
            "2NO+Cl2\u21922NOCl",
            "CH4+Cl2\u2192CH3Cl+HCl",
            "2NO+O2\u21922NO2"
        ]
    },
    {
        "numb": 9,
        "question": "Calculate the standard enthalpy of reaction for the combustion of methane: CH\u2084(g) + 2O\u2082(g) \u2192 CO\u2082(g)+2H\u2082O(g), if \u0394Hf\u00b0(CH\u2084(g)) = \u221275 kJ/mol; \u0394Hf\u00b0(CO\u2082 (g)) = \u2212394 kJ/mol;\u0394Hf\u00b0(H\u2082O(g)) = \u2212284 kJ/mol; \u0394Hf\u00b0(O\u2082 (g)) = 0 kJ/mol",
        "answer": "\u0394Hf\u00b0rxn = - 887 kJ/mol",
        "options": [
            "\u0394Hf\u00b0rxn = 603 kJ/mol",
            "\u0394Hf\u00b0rxn = 887 kJ/mol",
            "\u0394Hf\u00b0rxn = 1037 kJ/mol",
            "\u0394Hf\u00b0rxn = - 603 kJ/mol",
            "\u0394Hf\u00b0rxn = - 887 kJ/mol"
        ]
    },
    {
        "numb": 10,
        "question": "What is the mass fraction?",
        "answer": "the ratio of the mass of the solute in the mass solution:",
        "options": [
            "the mass of solute contained in 1ml of solvent",
            "the equivalent amount of a substance contained in 1 liter of solution.",
            "the ratio of the mass of the solute in the mass solution:",
            "the mass of substance in 1 liter of solution.",
            "the number of moles solute contained in 1 kg of solvent."
        ]
    },
    {
        "numb": 11,
        "question": "What is the molar concentration?",
        "answer": "the mass of substance in 1 liter of solution",
        "options": [
            "the mass of solute contained in 1ml of solvent",
            "the ratio of the mass of the solute in the mass solution",
            "the equivalent amount of a substance contained in 1 liter of solution",
            "the mass of substance in 1 liter of solution",
            "the mass of solute contained in 1 kg of solvent"
        ]
    },
    {
        "numb": 12,
        "question": "What is the pH solution of the salt formed by a weak acid and weak base?",
        "answer": "pH ~7",
        "options": [
            "pH > 7",
            "pH = 7",
            "pH<7",
            "pH \u2264 7",
            "pH ~7"
        ]
    },
    {
        "numb": 13,
        "question": "Which of the following factors does not affect the solubility of solids in liquids?",
        "answer": "Stirring",
        "options": [
            "Temperature",
            "The nature of the solute",
            "The nature of the solvent",
            "Stirring",
            "Liquid density"
        ]
    },
    {
        "numb": 14,
        "question": "What is the name of a solution having an osmotic pressure higher than that of blood plasma?",
        "answer": "Hypertonic",
        "options": [
            "Isotonic",
            "Saturated",
            "Hypertonic",
            "Isoosmotic",
            "Hypotonic"
        ]
    },
    {
        "numb": 15,
        "question": "Which of the following is a buffer solution?",
        "answer": "NH4OH + NH4Cl",
        "options": [
            "CH3COONa",
            "NH4OH + NH4Cl",
            "K2SO4 + H2SO4",
            "NaOH + Na2SO4",
            "NaOH + CH3COONa"
        ]
    },
    {
        "numb": 16,
        "question": "Which of the following is an unknown solution if an addition of a methyleorange indicator into an unknown solution changes its color into red?",
        "answer": "HCl",
        "options": [
            "NaHCO\u2083",
            "HCl",
            "NaCl",
            "NaOH",
            "NH\u2083"
        ]
    },
    {
        "numb": 17,
        "question": "Determine the mass of 0.16 mol H2SO4",
        "answer": "15.68 g",
        "options": [
            "13.68 g",
            "19.68 g",
            "17.68 g",
            "15.68 g",
            "11.68 g"
        ]
    },
    {
        "numb": 18,
        "question": "Which of the following has the lowest boiling point?",
        "answer": "HCl",
        "options": [
            "HF",
            "HBr",
            "HI",
            "H2O",
            "HCl"
        ]
    },
    {
        "numb": 19,
        "question": "Find equivalent mass of sulphuric acid",
        "answer": "49",
        "options": [
            "49",
            "2",
            "32",
            "18",
            "98"
        ]
    },
    {
        "numb": 20,
        "question": "Calculate the mass fraction of sodium in the sodium carbonate Na2CO3.",
        "answer": "43%",
        "options": [
            "53%",
            "63%",
            "33%",
            "23%",
            "43%"
        ]
    },
    {
        "numb": 21,
        "question": "In which red-ox reaction different atoms of same substance change oxidation numbers?",
        "answer": "intramolecular",
        "options": [
            "disproportion",
            "counter disproportion",
            "intermolecular",
            "double exchange",
            "intramolecular"
        ]
    },
    {
        "numb": 22,
        "question": "What is the name of the electrode from which the electrons enter the solution, as well as the chemical change that occurs on this electrode?",
        "answer": "cathode, reduction",
        "options": [
            "can't say for sure.",
            "anode, oxidation",
            "cathode, oxidation",
            "anode, reduction",
            "cathode, reduction"
        ]
    },
    {
        "numb": 23,
        "question": "What does the double vertical line \"||\" mean in the standard designation of the voltaic cell?",
        "answer": "a salt bridge",
        "options": [
            "a salt bridge",
            "a standard hydrogen electrode",
            "a phase boundary",
            "gas electrode",
            "a wire (metal) connection"
        ]
    },
    {
        "numb": 24,
        "question": "What is the name of the element lossing of electrons in the redox reaction?",
        "answer": "Reactant",
        "options": [
            "Donor",
            "Reactant",
            "Oxidant",
            "Reductant",
            "Product"
        ]
    },
    {
        "numb": 25,
        "question": "When one end of a metal plate is heated, why does the other end heat up too?",
        "answer": "energised electrons moving to the other end",
        "options": [
            "due to a change in the density of the metal",
            "energised electrons moving to the other end",
            "due to the resistance of the metal",
            "due to the mobility of atoms in the metal",
            "due to a minor perturbation in the energy of the atoms."
        ]
    },
    {
        "numb": 26,
        "question": "Oxygen has a +2 oxidation state in",
        "answer": "F2O",
        "options": [
            "F2O",
            "H2O",
            "SO2",
            "H2O2",
            "Na2O"
        ]
    },
    {
        "numb": 27,
        "question": "Which of the following is the strongest reducing agent?",
        "answer": "Li",
        "options": [
            "Na",
            "Ca",
            "Mg",
            "Zn",
            "Li"
        ]
    },
    {
        "numb": 28,
        "question": "When the following equation is balanced using the smallest whole number coefficients, what is the coefficient of H2O? NH3 + O2 \u2192 NO + H2O",
        "answer": "6",
        "options": [
            "6",
            "5",
            "3",
            "4",
            "2"
        ]
    },
    {
        "numb": 29,
        "question": "What is the composition consist of a coordination compound?",
        "answer": "a metal ion and ligands",
        "options": [
            "a metal ion and counterions",
            "a metal ion and complex ion",
            "a metal ion and ligands",
            "a complex ion and counterions",
            "a complex ion and metal"
        ]
    },
    {
        "numb": 30,
        "question": "How many percent microelements content in the organism?",
        "answer": "10-3\u2013 10-5 %",
        "options": [
            "10-3\u2013 10-5 %",
            "10-7\u2013 10-9 %",
            "10-9\u2013 10-11 %",
            "10-1\u2013 10-3 %",
            "10-5\u2013 10-7 %"
        ]
    },
    {
        "numb": 31,
        "question": "Which of thefollowing biogenic element is microelement?",
        "answer": "Zn",
        "options": [
            "S",
            "N",
            "O",
            "Zn",
            "C"
        ]
    },
    {
        "numb": 32,
        "question": "Which among the following is a polydentate ligand?",
        "answer": "oxalate",
        "options": [
            "aqua",
            "nitro",
            "acetate",
            "oxalate",
            "carbonyl"
        ]
    },
    {
        "numb": 33,
        "question": "Which is an example a ligand \u00aben\u00bb?",
        "answer": "bidentate ligand",
        "options": [
            "pentadentate ligand",
            "tridentate ligand",
            "monodentate ligand",
            "hexadentate ligand",
            "bidentate ligand"
        ]
    },
    {
        "numb": 34,
        "question": "What is the coordination number of the following complex? [Cr(NH3)4Cl2]Cl",
        "answer": "6",
        "options": [
            "4",
            "6",
            "8",
            "2",
            "10"
        ]
    },
    {
        "numb": 35,
        "question": "Which of the following are bidentate ligands? (1) oxalate (2) ammonia (3) chloride (4) hydroxide (5) nitrite (6) en",
        "answer": "1, 6",
        "options": [
            "1, 3",
            "1, 2",
            "1, 4",
            "1, 5",
            "1, 6"
        ]
    },
    {
        "numb": 36,
        "question": "A complex ion contains a Cr3+ bound to four H2O molecules and two Cl\u2013 ions. Write its formula.",
        "answer": "[Cr(H2O)4Cl2]",
        "options": [
            "[Cl(H2O)4Cr2]",
            "[Cr(H2O)4]Cl",
            "[Cr(H2O)4Cl2]",
            "[ (H2O) Cr 4Cl2]",
            "[CrCl2(H2O)4]"
        ]
    },
    {
        "numb": 37,
        "question": "What are the geometry of the following complex: [Ag(NH3)2]+ ?",
        "answer": "linear",
        "options": [
            "tetrahedral",
            "trigonal",
            "linear",
            "octahedral",
            "hexahedral"
        ]
    },
    {
        "numb": 38,
        "question": "A molecule that cannot be superimposed on its mirror image is said to exhibit which of the following?",
        "answer": "optical isomerism",
        "options": [
            "reactive isomerism",
            "optical isomerism",
            "geometrical isomerism",
            "linkage isomerism",
            "coordination isomerism"
        ]
    },
    {
        "numb": 39,
        "question": "What is the oxidation number of cobalt in K[Co(CO)2Cl4]?",
        "answer": "3",
        "options": [
            "5",
            "9",
            "3",
            "7",
            "1"
        ]
    },
    {
        "numb": 40,
        "question": "Which one of the following systems has the smallest sized domains in its dispersed phase?",
        "answer": "Nanoemulsion",
        "options": [
            "Flocculation",
            "Nanoemulsion",
            "Suspension",
            "Emulsion",
            "Microemulsion"
        ]
    },
    {
        "numb": 41,
        "question": "Which of the following substances that belongs to colloid system?",
        "answer": "Milk",
        "options": [
            "Beer",
            "Wine",
            "Vinegar",
            "Milk",
            "Water"
        ]
    },
    {
        "numb": 42,
        "question": "What is the dispersed phase and dispersing medium of smoke?",
        "answer": "Solid in gas",
        "options": [
            "Solid in liquid",
            "Liquid in solid",
            "Gas in solid",
            "Solid in solid",
            "Solid in gas"
        ]
    },
    {
        "numb": 43,
        "question": "Which of the following will show Tyndall effect?",
        "answer": "Aqueous solution of soap above critical micelle concentration",
        "options": [
            "Aqueous solution of soap below critical micelle concentration",
            "Aqueous solution of sugar above critical micelle concentration",
            "Aqueous solution of soap above critical micelle concentration",
            "Aqueous solution of sugar above critical micelle concentration",
            "Aqueous solution of salt above critical micelle concentration"
        ]
    },
    {
        "numb": 44,
        "question": "Which of the following methods is used for the destruction of sol?",
        "answer": "addition of an electrolyte",
        "options": [
            "dialysis of an electrolyte",
            "addition of an electrolyte",
            "condensation of an electrolyte",
            "diffusion of an electrolyte",
            "addition of an electrolyte"
        ]
    },
    {
        "numb": 45,
        "question": "What type of dispersed systems are tobacco smoke, dust, fog, clouds related to?",
        "answer": "aerosols",
        "options": [
            "emulsion",
            "organosols",
            "aerosols",
            "hydrosols",
            "suspensions"
        ]
    },
    {
        "numb": 46,
        "question": "What type of dispersed systems are cast iron, steel, precious stones, alloys?",
        "answer": "solid colloids",
        "options": [
            "emulsions",
            "solid emulsions",
            "suspensions",
            "solid colloids",
            "capillary systems"
        ]
    },
    {
        "numb": 47,
        "question": "For which ion exchangers listed below will adsorption of \u041d+ ions be maximum?",
        "answer": "strongly acidic cation exchangers",
        "options": [
            "charcoal, teflon powder, soot",
            "soils, grounds, protein substances",
            "weakly basic anion exchangers",
            "strongly basic anion exchangers",
            "strongly acidic cation exchangers"
        ]
    },
    {
        "numb": 48,
        "question": "In which of the following media the sodium oleate micelle is formed?",
        "answer": "\u041d2\u041e",
        "options": [
            "\u0421\u041d4",
            "\u0421\u041dCl3",
            "\u04216\u041d6",
            "\u04214\u041d9\u041e\u041d",
            "\u041d2\u041e"
        ]
    },
    {
        "numb": 49,
        "question": "How can the sign of the charge of particles of a positive sol of iron hydroxide Fe(OH)3 be changed?",
        "answer": "adding HCl",
        "options": [
            "adding HCl",
            "charge sign cannot be changed",
            "adding NaOH",
            "adding Fe2SO4",
            "adding FeCl3"
        ]
    },
    {
        "numb": 50,
        "question": "The Ca3(PO4)2 sol was obtained as a result of an exchange reaction between CaCl2 and H3PO4, with H3PO4 taken in excess. Indicate the correct sol micelle formula.",
        "answer": "{m[(Ca3(PO4)2]nH+(n - x)PO43-}xPO43-",
        "options": [
            "{m[(Ca3(PO4)2]nCa2+ 2(n - x)Cl-}2xCl-",
            "{m[(Ca3(PO4)2]nH +(n - x)PO43-}xPO43",
            "{m[(Ca3(PO4)2]nCl-2(n - x)Ca2+}2xCl-",
            "{m[(Ca3(PO4)2]nH+(n - x)PO43-}xPO43-",
            "{m[(Ca3(PO4)2]nH+(n - x)PO43-}xPO44-"
        ]
    },
    {
        "numb": 51,
        "question": "When does the sreaming potential arise?",
        "answer": "when forcing a liquid through a capillary-porous system",
        "options": [
            "when forcing a liquid through a capillary-porous system",
            "when an electric field is applied to a single capillary",
            "when shaking the dispersed phase particles",
            "when the particles of the dispersed phase settle under the action of gravity",
            "with directional movement of particles of the dispersed phase"
        ]
    },
    {
        "numb": 52,
        "question": "Which of these ions Be2+, Mg2+, Ca2+, Ba2+ and Sr2+ have the lowest coagulation critical concentration?",
        "answer": "Ba2+",
        "options": [
            "Sr2+",
            "Ba2+",
            "Be2+",
            "Mg2+",
            "Ca2+"
        ]
    },
    {
        "numb": 53,
        "question": "Which element is present in all organic compounds?",
        "answer": "carbon",
        "options": [
            "phosphorous",
            "nitrogen",
            "carbon",
            "sulfur",
            "oxygen"
        ]
    },
    {
        "numb": 54,
        "question": "Which property is generally characteristic of an organic compound?",
        "answer": "soluble in nonpolar solvents",
        "options": [
            "low melting point",
            "high melting point",
            "soluble in nonpolar solvents",
            "insoluble in nonpolar solvents",
            "soluble in polar solvents"
        ]
    },
    {
        "numb": 55,
        "question": "Which compounds are isomers?",
        "answer": "1-propanol and 2-propanol",
        "options": [
            "methanol and methanal",
            "methanoic acid and ethanoic acid",
            "ethanone and ethanol",
            "1-propanol and 2-propanol",
            "ethane and ethanol"
        ]
    },
    {
        "numb": 56,
        "question": "Which class of organic compounds can be represented as R \u2013C (=O) - R?",
        "answer": "ketone",
        "options": [
            "acids",
            "ketone",
            "alcohols",
            "esters",
            "ethers"
        ]
    },
    {
        "numb": 57,
        "question": "Which of the following organic compound is a product of a saponification reaction?",
        "answer": "C3H5(OH)3",
        "options": [
            "C3H5(OH)3",
            "CCl4",
            "C8H18",
            "C6H12O6",
            "C6H6"
        ]
    },
    {
        "numb": 58,
        "question": "Identify the one which does not come under the organic addition reaction?",
        "answer": "Dehydration",
        "options": [
            "Hydration",
            "Dehydration",
            "Dehalogenation",
            "Hydrohalogenation",
            "alogenation"
        ]
    },
    {
        "numb": 59,
        "question": "Which of the following organic compound is a product of a fermentation reaction?",
        "answer": "C2H5OH",
        "options": [
            "C2H5OC2H5",
            "C2H2",
            "C2H5OH",
            "C2H5OOC2H5",
            "CCl2F2"
        ]
    },
    {
        "numb": 60,
        "question": "How many structural isomers are possible for C4H9Br?",
        "answer": "4",
        "options": [
            "2",
            "3",
            "1",
            "5",
            "4"
        ]
    },
    {
        "numb": 61,
        "question": "What type of organic reactions are involved in this following reaction? CH3CH=CH2 + HCl = _______",
        "answer": "an addition reaction",
        "options": [
            "an addition reaction",
            "a hydrolysis reaction",
            "an esterification reaction",
            "a substitution reaction",
            "a saponification reaction"
        ]
    },
    {
        "numb": 62,
        "question": "Which of the following is produced by oxidation of an aldehyde?",
        "answer": "Carboxylic acid",
        "options": [
            "Primary alcohol",
            "Aldehyde",
            "Carboxylic acid",
            "Secondary alcohol",
            "Ketone"
        ]
    },
    {
        "numb": 63,
        "question": "Which functional group contains a carbonyl group and a hydroxyl group bonded to the same carbon atom?",
        "answer": "Carboxylic acid",
        "options": [
            "Ester",
            "Ketone",
            "Amino acid",
            "Carboxylic acid",
            "Amide"
        ]
    },
    {
        "numb": 64,
        "question": "What is the product of oxidation of butanal?",
        "answer": "Butanoic acid",
        "options": [
            "Butanoic acid",
            "Butane",
            "2-butanol",
            "Butanoate",
            "1-butanol"
        ]
    },
    {
        "numb": 65,
        "question": "Which of the following is produced by reduction of an aldehyde?",
        "answer": "Primary alcohol",
        "options": [
            "Secondary alcohol",
            "Ester",
            "Primary alcohol",
            "Ether",
            "Carboxylic acid"
        ]
    },
    {
        "numb": 66,
        "question": "How this reaction can be classified CH2=CH2 + H2O ==> C2H5OH?",
        "answer": "Hydration",
        "options": [
            "Elimination",
            "Hydration",
            "Chlorination",
            "Polymerization",
            "Oxidation"
        ]
    },
    {
        "numb": 67,
        "question": "What is the reaction between an alcohol and carboxylic acid called?",
        "answer": "Esterification",
        "options": [
            "Dehydration",
            "Polymerization",
            "Esterification",
            "Hydration",
            "Hydrolysis"
        ]
    },
    {
        "numb": 68,
        "question": "Which of the following option describes hydrolysis the best?",
        "answer": "Breaking of a long-chain compound into subunits by adding water",
        "options": [
            "Breaking of a long-chain compound into subunits by adding water",
            "Constant removal of hydrogen atoms from the surface of a carbohydrate",
            "Addition of hydrogen atoms to an unsaturated compounds",
            "Heating of a compound in order to drive off excess water and concentrate its volume",
            "Linking of two or more molecules by the removal of one or more water molecules"
        ]
    },
    {
        "numb": 69,
        "question": "Which of the following compound is obtained by the reaction of ethene with diborane followed by hydrolysis with alkaline H2O2?",
        "answer": "ethanol",
        "options": [
            "propanol",
            "ethanol",
            "triethyl bromide",
            "butanol",
            "pentanol"
        ]
    },
    {
        "numb": 70,
        "question": "Which of the following compounds will give butanone on oxidation with alkaline KMnO4 solution?",
        "answer": "Butan-2-ol",
        "options": [
            "Butan-2-ol",
            "Butan-3-ol",
            "Butan-5-ol",
            "Butan-4-ol",
            "Butan-1-ol"
        ]
    },
    {
        "numb": 71,
        "question": "Which is not a heterocyclic aromatic compound?",
        "answer": "Naphthalene",
        "options": [
            "Furan",
            "Imidazole",
            "Pyrrole",
            "Thiophene",
            "Naphthalene"
        ]
    },
    {
        "numb": 72,
        "question": "What is the molecular formula of pyrrole?",
        "answer": "C4H5N",
        "options": [
            "C4H5N",
            "C5H5N",
            "C6H6S",
            "C4H4N",
            "C6H6N"
        ]
    },
    {
        "numb": 73,
        "question": "Which of the following compounds are heterofunctional compounds?",
        "answer": "Lactic acid",
        "options": [
            "Lactic acid",
            "Sorbitol",
            "Glucose",
            "Oxalic acid",
            "Acetic acid"
        ]
    },
    {
        "numb": 74,
        "question": "What are the salts and derivatives of citric acid called?",
        "answer": "citrate",
        "options": [
            "citrate",
            "lactate",
            "pyruvate",
            "malate",
            "oxaloacetate"
        ]
    },
    {
        "numb": 75,
        "question": "What form of lactic acid is involved in the metabolism of animals?",
        "answer": "L-lactic acid",
        "options": [
            "lactic acid ethyl ester",
            "D-lactic acid",
            "lactic acid ester",
            "L-lactic acid",
            "lactic acid methyl ester"
        ]
    },
    {
        "numb": 76,
        "question": "What are the salts and derivatives of malic acid called?",
        "answer": "malate",
        "options": [
            "malate",
            "acetate",
            "pyruvates",
            "lactate",
            "tartrates"
        ]
    },
    {
        "numb": 77,
        "question": "Which compound is an example of a heterocyclic amine?",
        "answer": "Pyrimidine",
        "options": [
            "Pyrimidine",
            "Benzene",
            "Acetic acid",
            "Phenol",
            "Ethanol"
        ]
    },
    {
        "numb": 78,
        "question": "What type of compound is thymine, a component of DNA?",
        "answer": "Heterocyclic",
        "options": [
            "Carboxylic acid",
            "Heterocyclic",
            "Ketone",
            "Carbohydrate",
            "Aromatic hydrocarbon"
        ]
    },
    {
        "numb": 79,
        "question": "What specific reaction occurs when hydroxycarboxylic acids are heated?",
        "answer": "lactide formation",
        "options": [
            "formation of diketopiperazine",
            "lactone formation",
            "lactide formation",
            "formation of an ester",
            "lactam formation"
        ]
    },
    {
        "numb": 80,
        "question": "Which of the following compounds are derivatives of para-aminobenzoic acid?",
        "answer": "novocaine",
        "options": [
            "streptocide",
            "citric acid",
            "novocaine",
            "aspirin",
            "salicylic acid"
        ]
    },
    {
        "numb": 81,
        "question": "Which of the following product is possible of the interaction of acetic and salicylic acids?",
        "answer": "aspirin",
        "options": [
            "aspirin",
            "phenyl salicylate",
            "phenylacetate",
            "phenolphthalein",
            "methyl salicylate"
        ]
    },
    {
        "numb": 82,
        "question": "Which of the following is not a function of Vitamin A in the body?",
        "answer": "Blood clotting",
        "options": [
            "Normal cell development and reproduction",
            "Blood clotting",
            "Vision",
            "Bone and body growth",
            "Immune defenses, maintenance of body linings and skin"
        ]
    },
    {
        "numb": 83,
        "question": "Which of the following is a monomeric link of protein?",
        "answer": "Amine acid rest",
        "options": [
            "Pyrrole",
            "Ethylene",
            "Sugar rest",
            "Amine acid rest",
            "Isoprene"
        ]
    },
    {
        "numb": 84,
        "question": "Which of the following is an imino acid?",
        "answer": "Proline",
        "options": [
            "Alanine",
            "Aspartate",
            "Serine",
            "Glycine",
            "Proline"
        ]
    },
    {
        "numb": 85,
        "question": "Which of the following is a bond a double helical structure of DNA is held together by?",
        "answer": "Hydrogen bonding",
        "options": [
            "Ionic bonds",
            "Sulphur-sulphur linkages",
            "Glycosidic bonds",
            "Hydrogen bonding",
            "Peptide bonding"
        ]
    },
    {
        "numb": 86,
        "question": "Which of the followings is a simple sugar or monosaccharide?",
        "answer": "Galactose",
        "options": [
            "Sucrose",
            "Lactose",
            "Galactose",
            "Celluliose",
            "Maltose"
        ]
    },
    {
        "numb": 87,
        "question": "Which of the following Vitamin is also called as Pyridoxine?",
        "answer": "Vitamin B6",
        "options": [
            "Vitamin B3",
            "Vitamin B6",
            "Vitamin B1",
            "Vitamin B2",
            "Vitamin B5"
        ]
    },
    {
        "numb": 88,
        "question": "Which of the following lipids provide insulation against cold and hot weather to exoskeleton of insects?",
        "answer": "Waxes",
        "options": [
            "Cholesterol",
            "Steroids",
            "Oil",
            "Waxes",
            "Fat"
        ]
    },
    {
        "numb": 89,
        "question": "Which of the following is not found in DNA?",
        "answer": "Uracil",
        "options": [
            "Guanine",
            "Thymine",
            "Uracil",
            "Adenine",
            "Cytosine"
        ]
    },
    {
        "numb": 90,
        "question": "Which of the following process descires synthesis of RNA from DNA",
        "answer": "Transcription",
        "options": [
            "Transcription",
            "Replication",
            "Duplication",
            "Transgenic",
            "Translation"
        ]
    },
    {
        "numb": 91,
        "question": "Which of the following molecules contain an anticodon?",
        "answer": "Messenger RNA",
        "options": [
            "Transfer RNA",
            "Messenger RNA",
            "Ribosomal RNA",
            "Small nuclear RNA",
            "DNA"
        ]
    },
    {
        "numb": 92,
        "question": "Which of the following reagents is used to distinguish fructose and glucose?",
        "answer": "Seliwanoff's reagent",
        "options": [
            "Benedict's reagent",
            "Seliwanoff's reagent",
            "Fehling's reagent",
            "Molish's reagent",
            "Barfoed's reagent"
        ]
    },
    {
        "numb": 93,
        "question": "Which polysaccharide is formed by \u03b21\u21924 Glycosidic linkages?",
        "answer": "Cellulose",
        "options": [
            "Glycogen",
            "Starch",
            "Glucose",
            "Cellulose",
            "Dextrin"
        ]
    },
    {
        "numb": 94,
        "question": "Where will be the bond form between sugar rest and pyrimidine N-base in nucleoside atoms?",
        "answer": "C1 and N1",
        "options": [
            "C1 and N9",
            "C5 and N1",
            "C3 and N1",
            "C3 and N9",
            "C1 and N1"
        ]
    },
    {
        "numb": 95,
        "question": "Which of the following takes place when denaturation of protein leads to loss of its biological activity?",
        "answer": "disruption of both secondary and tertiary structures only",
        "options": [
            "disruption of both secondary",
            "disruption of both primary and secondary structure",
            "formation of amino acids",
            "disruption of primary structure",
            "disruption of both secondary and tertiary structures only"
        ]
    },
    {
        "numb": 96,
        "question": "Which of the amino acids below is the uncharged derivative of an acidic amino acid?",
        "answer": "Glutamine",
        "options": [
            "Tyrosine",
            "Serine",
            "Arginine",
            "Glutamine",
            "Cysteine"
        ]
    },
    {
        "numb": 97,
        "question": "Which of the following is known as the pH at which the amino acid shows no tendency to migrate when placed in an electric field?",
        "answer": "Dipole moment",
        "options": [
            "Dipole moment",
            "Isoelectric point",
            "Delocalization",
            "Resonance",
            "Optical activity"
        ]
    },
    {
        "numb": 98,
        "question": "Which of the following test may turn yellow a protein solution on warming with concentrated HNO3?",
        "answer": "Xanthoproteic test",
        "options": [
            "Millions test",
            "Biuret test",
            "Ninhydrin test",
            "Tollens test",
            "Xanthoproteic test"
        ]
    },
    {
        "numb": 99,
        "question": "Which of the following statement is incorrect?",
        "answer": "Vitamins contain amino acids",
        "options": [
            "Excess vitamin intake is harmful",
            "Vitamins can be produced by plants",
            "Vitamins is a type of protein",
            "Vitamin deficiency causes diseases",
            "Vitamins contain amino acids"
        ]
    },
    {
        "numb": 100,
        "question": "Which of the following is true about vitamin K deficiency?",
        "answer": "Causes delayed blood clotting",
        "options": [
            "Causes Wernicke-Korsakoff syndrome",
            "Causes failure to grow",
            "Causes delayed blood clotting",
            "Causes heart disease and cancer",
            "Causes Keratinization of the cornea"
        ]
    },
    {
        "numb": 101,
        "question": "What is the mathematical expression of the first law of thermodynamics?",
        "answer": "Q=\u2206U+W",
        "options": [
            "Q=\u2206U+W",
            "\u2206U = U(f) \u2013 U(i)",
            "S = KlnW",
            "H=U+pV",
            "\u2206H = H(f) \u2013 H(i)"
        ]
    },
    {
        "numb": 102,
        "question": "Who had opened the first law of thermodynamics?",
        "answer": "Julius Robert von Mayer",
        "options": [
            "Vant Hoff",
            "Rudolf Clausius",
            "Julius Robert von Mayer",
            "Bodenstein",
            "Gibbs"
        ]
    },
    {
        "numb": 103,
        "question": "How can you name a system consisting of one phases?",
        "answer": "Homogeneous system",
        "options": [
            "Heterogeneous system",
            "Closed system",
            "Isolated system",
            "Homogeneous system",
            "Open system"
        ]
    },
    {
        "numb": 104,
        "question": "In what units is the reaction rate measured?",
        "answer": "mole per liter per second",
        "options": [
            "centimeter per hour",
            "meter per second",
            "liter per minute",
            "decimeter per minute",
            "mole per liter per second"
        ]
    },
    {
        "numb": 105,
        "question": "What happens when two fluorine atoms combine to form a fluorine molecule?",
        "answer": "When energy is released, a bond is formed",
        "options": [
            "The bond breaks as energy is absorbed.",
            "When energy is released, a bond is formed",
            "The enthalpy of the system increases.",
            "As energy is absorbed , a bond is formed",
            "The connection is broken as the energy is released"
        ]
    },
    {
        "numb": 106,
        "question": "Which characteristic is best suited for the following process: Pumping water uphill",
        "answer": "Not a spontaneous process",
        "options": [
            "The equilibrium process",
            "Spontaneous process",
            "Reversible process",
            "Not a spontaneous process",
            "Irreversible process"
        ]
    },
    {
        "numb": 107,
        "question": "Which of the following statements is incorrect about the collison theory of chemical reaction?",
        "answer": "Collision of atoms or molecules possessing sufficient threshold energy results into the product formation.",
        "options": [
            "Number of effective collisions determines the rate of reaction.",
            "\u0422he condition for effective collisions is the presence of sufficient threshold energy of molecules",
            "It considers reacting molecules or atoms to be hard spheres and ignores their structural features.",
            "Collision of atoms or molecules possessing sufficient threshold energy results into the product formation.",
            "Molecules should collide with sufficient threshold energy and proper energy"
        ]
    },
    {
        "numb": 108,
        "question": "What is the unit of reaction rate measurement for a second-order reaction?",
        "answer": "mol-l L c - 1",
        "options": [
            "s-1",
            "mol-l L c - 1",
            "mole L s",
            "mol-2 L2 s-1",
            "mol - 2 L 2"
        ]
    },
    {
        "numb": 109,
        "question": "A breakfast cereal contains 5 g of protein, 24 g of carbohydrates, and 8 g of fat. What is the Calorie content of a serving of this cereal if the average number of Calories for fat is 9.4 Calories/g, for carbohydrates is 4.1 Calories/g, and for protein is 4.1 Calories/g?",
        "answer": "194 Calories",
        "options": [
            "162 Calories",
            "225 Calories",
            "70 Calories",
            "194 Calories",
            "114 Calories"
        ]
    },
    {
        "numb": 110,
        "question": "What is the molar concentration of equivalent?",
        "answer": "the equivalent amount of a substance contained in 1 liter of solution",
        "options": [
            "the mass of solute contained in 1ml of solvent",
            "the equivalent amount of a substance contained in 1 liter of solution",
            "the mass of substance in 1 liter of solution",
            "the ratio of the mass of the solute in the mass solution",
            "the number of moles solute contained in 1 kg of solvent"
        ]
    },
    {
        "numb": 111,
        "question": "What is the molal concentration?",
        "answer": "the number of moles solute contained in 1 kg of solvent",
        "options": [
            "the number of moles solute contained in 1 kg of solvent",
            "the ratio of the mass of the solute in the mass solution",
            "the mass of solute contained in 1ml of solvent",
            "the equivalent amount of a substance contained in 1 liter of solution",
            "the mass of substance in 1 liter of solution"
        ]
    },
    {
        "numb": 112,
        "question": "What is the pH solution of the salt formed by a strong base and weak acid?",
        "answer": "pH > 7",
        "options": [
            "pH <7",
            "pH ~7",
            "pH > 7",
            "pH \u2264 7",
            "pH = 7"
        ]
    },
    {
        "numb": 113,
        "question": "Which of the following is not a colligative property?",
        "answer": "Freezing point",
        "options": [
            "Freezing point",
            "Elevation of bolling point",
            "Lowering of vapour pressure",
            "Vapor pressure redaction",
            "Osmotic pressure"
        ]
    },
    {
        "numb": 114,
        "question": "What is the name of a solution having an osmotic pressure lower than that of blood plasma?",
        "answer": "Hypotonic",
        "options": [
            "Isoosmotic",
            "Hypotonic",
            "Saturated",
            "Hypertonic",
            "Isotonic"
        ]
    },
    {
        "numb": 115,
        "question": "Find equivalent mass of phosphoric acid",
        "answer": "32.7",
        "options": [
            "2",
            "1",
            "32.7",
            "0.5",
            "65"
        ]
    },
    {
        "numb": 116,
        "question": "Which of the following solutions has the minimum freezing point?",
        "answer": "One molal CaCI2 solution",
        "options": [
            "One molal KCI solution",
            "One molal urea solution",
            "One Molal NaCI solution",
            "One molal LiCl solution",
            "One molal CaCI2 solution"
        ]
    },
    {
        "numb": 117,
        "question": "What is the nature of the sodium sulfite solution?",
        "answer": "alkaline",
        "options": [
            "slightly acidic",
            "acidic",
            "neutral",
            "insufficient data",
            "alkaline"
        ]
    },
    {
        "numb": 118,
        "question": "Which of the following is not a property of solution?",
        "answer": "It is consist of a single phase.",
        "options": [
            "It is consist of a single phase.",
            "It has a definite composition",
            "It has a homogeneous composition",
            "Can be solid, liquid, gaseous",
            "It consists of several phases"
        ]
    },
    {
        "numb": 119,
        "question": "Which of the following salts undergoes hydrolysis?",
        "answer": "FeSO4",
        "options": [
            "Ca(NO3)2",
            "FeSO4",
            "KBr",
            "NaClO4",
            "NaCl"
        ]
    },
    {
        "numb": 120,
        "question": "Determine the mass of 0.16 mol H2SO4",
        "answer": "15.68 g",
        "options": [
            "17.68 g",
            "19.68 g",
            "11.68 g",
            "15.68 g",
            "13.68 g"
        ]
    },
    {
        "numb": 121,
        "question": "In which red-ox reaction atoms of different substances change oxidation numbers?",
        "answer": "intermolecular",
        "options": [
            "disproportion",
            "intermolecular",
            "intramolecular",
            "counter disproportion",
            "double exchange"
        ]
    },
    {
        "numb": 122,
        "question": "How can the oxidation process in the redox reaction be characterized?",
        "answer": "the process of lossing of electrons",
        "options": [
            "the process of increasing the degree of oxidation",
            "the process of equalizing the number of electrons",
            "the process of gaining of electrons",
            "the process of lossing of electrons",
            "the decrease in the valence of the electropositive component"
        ]
    },
    {
        "numb": 123,
        "question": "What can the oxidation process be called?",
        "answer": "addition of oxygen",
        "options": [
            "addition of water",
            "addition of hydrogen",
            "removal of oxygen",
            "addition of oxygen",
            "removal of nitrogen"
        ]
    },
    {
        "numb": 124,
        "question": "Who invented the galvanic cell?",
        "answer": "Galvani and Volta",
        "options": [
            "Henry Cavendish",
            "Galvani and Volta",
            "Antoine Lavoisier",
            "Joseph Priestley",
            "Hermann Hess"
        ]
    },
    {
        "numb": 125,
        "question": "What is the oxidation number of Cr in K2Cr2O7?",
        "answer": "6",
        "options": [
            "2",
            "6",
            "-2",
            "3",
            "-6"
        ]
    },
    {
        "numb": 126,
        "question": "Consider the following reaction:Zn + Cu2+ \u2192 Zn2+ + Cu With reference to the above, which one of the following is the correct statement?",
        "answer": "(b) Zn is oxidised to Zn2+ ions.",
        "options": [
            "(d) Cu2+ ions are oxidized to Cu.",
            "Cu is oxidized to Cu2+ ions",
            "(b) Zn is oxidised to Zn2+ ions.",
            "Zn is reduced to Zn2+ ions.",
            "(c) Zn2+ ions are oxidised to Zn."
        ]
    },
    {
        "numb": 127,
        "question": "Which of the above will not conduct electricity in an aqueous solution?",
        "answer": "Sugar",
        "options": [
            "Table salt",
            "Copper sulfate",
            "Nitric acid",
            "Sugar",
            "Sodium hydroxide"
        ]
    },
    {
        "numb": 128,
        "question": "When the following equation is balanced using the smallest whole number coefficients, what is the coefficient of NH3?NH3 + O2 \u2192 NO + H2O",
        "answer": "4",
        "options": [
            "6",
            "2",
            "3",
            "4",
            "5"
        ]
    },
    {
        "numb": 129,
        "question": "Which of the following option correct the donor of electrons in coordination compound?",
        "answer": "ligands",
        "options": [
            "ligands and outer sphere ion",
            "ligands",
            "central ion",
            "central ion and ligands",
            "outer sphere ions"
        ]
    },
    {
        "numb": 130,
        "question": "What will be in the sequence of d-p-s-elements of complex forming ability?",
        "answer": "increases",
        "options": [
            "increases",
            "release",
            "absorb",
            "doesn\u2019t change",
            "decreases"
        ]
    },
    {
        "numb": 131,
        "question": "What is the dentatness of EDTA?",
        "answer": "6",
        "options": [
            "3",
            "6",
            "2",
            "4",
            "5"
        ]
    },
    {
        "numb": 132,
        "question": "What is the coordination number of the following complex? [Cu(NH3)4]SO4",
        "answer": "4",
        "options": [
            "4",
            "5",
            "1",
            "2",
            "3"
        ]
    },
    {
        "numb": 133,
        "question": "What is the explanation for the formation of complexes on the basis of valent bonds theory?",
        "answer": "donor-acceptor interaction",
        "options": [
            "electron number",
            "protons number",
            "donor-acceptor interaction",
            "electrostatic model",
            "rate of reaction"
        ]
    },
    {
        "numb": 134,
        "question": "Which of the following has a coordination number as a feature?",
        "answer": "Ligand",
        "options": [
            "Central atom",
            "complex compound",
            "Coordination entity",
            "Coordination compound",
            "Ligand"
        ]
    },
    {
        "numb": 135,
        "question": "Which one of the following complexes can exhibit geometrical isomerism?",
        "answer": "[Co(NH3)5Cl]2+ (octahedral)",
        "options": [
            "[Cu(CN)2]- (linear)",
            "[Pt(NH3)2Cl2] (square planar)",
            "[Cu(NH3)4]2+ (square planar)",
            "[Co(NH3)5Cl]2+ (octahedral)",
            "[Zn(NH3)2Cl2] (tetrahedral)"
        ]
    },
    {
        "numb": 136,
        "question": "How many geometrical isomers are possiple in [Al(C2O4)3]3+?",
        "answer": "1",
        "options": [
            "1",
            "2",
            "0",
            "3",
            "4"
        ]
    },
    {
        "numb": 137,
        "question": "Identify the correct naming for K2[PdCl4].",
        "answer": "Potassium tetrachloridopalladate(II)",
        "options": [
            "Potassium tetrachloridopalladate(II)",
            "Potassium tetrachloridopalladate(IV)",
            "Potassium tetrachloridopalladium(II)",
            "Potassium tetrachlorinepalladium(II)",
            "Potassium tetrachlorinepalladate(II)"
        ]
    },
    {
        "numb": 138,
        "question": "Which of the following compounds has tetrahedral geometry?",
        "answer": "[NiCl4]2-",
        "options": [
            "[Pd(CN)4]2-",
            "[Fe(CN)6]",
            "[Ni(CN)4]2-",
            "[NiCl4]2-",
            "[PdCl4]2-"
        ]
    },
    {
        "numb": 139,
        "question": "What is the name of following coordination compound? K4[Fe(CN)6]",
        "answer": "potassium hexacyanoferrate(II)",
        "options": [
            "tetrapotassiumhexacyanoferrate(II)",
            "potassium hexacyanoferrate(II)",
            "hexacyanoferrate(II) potassium",
            "potassium hexacyanoferrate(III)",
            "potassium cyanoferrate(II)"
        ]
    },
    {
        "numb": 140,
        "question": "Which of the following is not a mechanism for the separation of a physically unstable suspension of magnesium hydroxide in water?",
        "answer": "Hydrolysis",
        "options": [
            "Flocculation",
            "Filtration",
            "Aggregation",
            "Hydrolysis",
            "Separation"
        ]
    },
    {
        "numb": 141,
        "question": "Which of the following is a colloid?",
        "answer": "acid solution",
        "options": [
            "acid solution",
            "salt solution",
            "sugar solution",
            "water solution",
            "urea solution"
        ]
    },
    {
        "numb": 142,
        "question": "Which of the following is a homogeneous system?",
        "answer": "sugar in water",
        "options": [
            "concrete in water",
            "bread in water",
            "muddy water",
            "sugar in water",
            "smoke in water"
        ]
    },
    {
        "numb": 143,
        "question": "Which property of colloidal suspension is used to determine the nature of charge on the particles?",
        "answer": "ectrophoresis",
        "options": [
            "sedimentation",
            "titration",
            "ultrafiltration",
            "ectrophoresis",
            "centrifugation"
        ]
    },
    {
        "numb": 144,
        "question": "Which one of the following is not represented by sols?",
        "answer": "absorption",
        "options": [
            "flocculation",
            "absorption",
            "tyndall effect",
            "coagulation",
            "paramagnetism"
        ]
    },
    {
        "numb": 145,
        "question": "What components can form an emulsion?",
        "answer": "liquid medium - liquid particles",
        "options": [
            "gaseous medium - liquid particles",
            "solid medium - solid particles",
            "liquid medium - solid particles",
            "liquid medium - liquid particles",
            "solid medium - gaseous particles"
        ]
    },
    {
        "numb": 146,
        "question": "Which of the following systems are direct emulsions?",
        "answer": "milk",
        "options": [
            "greases",
            "motor oils",
            "natural oil",
            "milk",
            "mineral"
        ]
    },
    {
        "numb": 147,
        "question": "What phenomena are observed when light passes on colloid systems?",
        "answer": "light scattering, reflection, refraction and interference",
        "options": [
            "light scattering, reflection, refraction and interference",
            "light scattering, reflection, refraction and interference",
            "scattering, concentration, refraction and diffraction of ligh",
            "reflection, interference and scattering",
            "opalescence, reflection, scattering and absorption of light"
        ]
    },
    {
        "numb": 148,
        "question": "What rule determines the adsorption of substances at the solid-solution interface?",
        "answer": "Traube-Duclaux Rule",
        "options": [
            "Equalizing the polarities of the contacting phases according to Rebinder",
            "Langmuir-Blodgett",
            "Surface action",
            "Micelle formation according to Peskov-Fayans",
            "Traube-Duclaux Rule"
        ]
    },
    {
        "numb": 149,
        "question": "Which of the following adsorbents is well wetted by a polar liquid?",
        "answer": "Coal",
        "options": [
            "Paraffin",
            "Paraffin",
            "Sulfur",
            "Graphite",
            "Coal"
        ]
    },
    {
        "numb": 150,
        "question": "For which of the below mentioned ion exchangers will OH- adsorption be maximum?",
        "answer": "strongly basic anion exchangers",
        "options": [
            "charcoal, teflon powder, soot",
            "strongly basic anion exchangers",
            "soils, grounds, protein substances",
            "strongly acidic cation exchangers",
            "weakly basic anion exchangers"
        ]
    },
    {
        "numb": 151,
        "question": "Indicate the formula of the micelle of AgJ sol obtained in excess of KJ:",
        "answer": "{[m(AgJ)]nAg+(n-x)J-}x J-",
        "options": [
            "{[m(AgJ)]nK+(n-x)J-}x J",
            "{[m(AgJ)]nAg+(n-x)J-}x J-",
            "{[m(AgJ)]n NO3-(n-x)NO3-}x Ag+",
            "{[m(AgJ)]nAg+(n-x)NO3-}x NO3-",
            "{[m(AgJ)]nJ-(n-x)K+}x K+"
        ]
    },
    {
        "numb": 152,
        "question": "How the influence of the radius of monovalent ions on their coagulating ability is expressed by the lyotropic series?",
        "answer": "Li+<Na+<K+<Rb+<Cs+",
        "options": [
            "Cs+<K+< Na+<Rb+<Li+",
            "Li+<Cs+<Rb+< Na+<K+",
            "Cs+<Rb+<K+< Na+< Li+",
            "Li+<Na+<K+<Rb+<Cs+",
            "Li+<Na+<Rb+<Cs+<K+"
        ]
    },
    {
        "numb": 153,
        "question": "Which statement explains why the element carbon forms so many compounds?",
        "answer": "Carbon readily forms covalent bonds with other carbon atoms.",
        "options": [
            "Carbon atoms combine readily with oxygen.",
            "Carbon atoms have very high electronegativity.",
            "Carbon readily forms ionic bonds with other carbon atoms.",
            "Carbon readily forms covalent bonds with other carbon atoms.",
            "Carbon atoms have very low electronegativity."
        ]
    },
    {
        "numb": 154,
        "question": "Which polymers occur naturally?",
        "answer": "starch and cellulose",
        "options": [
            "plastic and nylon",
            "protein and nylon",
            "starch and nylon",
            "protein and plastic",
            "starch and cellulose"
        ]
    },
    {
        "numb": 155,
        "question": "Which class of organic compounds can be represented as R - OH?",
        "answer": "alcohols",
        "options": [
            "esters",
            "alcohols",
            "acids",
            "ethers",
            "aldehydes"
        ]
    },
    {
        "numb": 156,
        "question": "Which alcohol contains three hydroxyl groups per molecule?",
        "answer": "glycerol",
        "options": [
            "glycerol",
            "pentanol",
            "propanol",
            "hexanol",
            "butanol"
        ]
    },
    {
        "numb": 157,
        "question": "Which of the following is one of the products obtained by a reaction of an acid and alcohol?",
        "answer": "water",
        "options": [
            "water",
            "carbon dioxide",
            "propanol",
            "glycerol",
            "ethanol."
        ]
    },
    {
        "numb": 158,
        "question": "Which hydrocarbon has more than one possible structural formula?",
        "answer": "C4H10",
        "options": [
            "CH4",
            "C2H4",
            "C4H10",
            "C3H8",
            "C2H6"
        ]
    },
    {
        "numb": 159,
        "question": "Choose the correct one which will react faster in the SN2 nucleophilic substitution reaction?",
        "answer": "CH2 = CH \u2013 CH2 \u2013 Br",
        "options": [
            "CH = CH2 \u2013 CH3 \u2013 Br",
            "CH = CH2 \u2013 CH2 \u2013 Br",
            "CH2 = CH \u2013 CH2 = Br",
            "CH2 \u2013 CH = CH2 = Br",
            "CH2 = CH \u2013 CH2 \u2013 Br"
        ]
    },
    {
        "numb": 160,
        "question": "What will be the reactivity of chlorobenzene in an electrophilic substitution reaction with benzene?",
        "answer": "Reacts very slowly than benzene",
        "options": [
            "Reacts very faster than benzene",
            "Reacts very slowly than benzene",
            "Does not react with benzene",
            "Reacts in the same way as benzene",
            "Reacts faster than benzene"
        ]
    },
    {
        "numb": 161,
        "question": "What type of organic reactions are involved in this following reaction? CH3CH2CH2CH2Br + H2O = _______________ + HBr",
        "answer": "a substitution reaction",
        "options": [
            "an addition reaction",
            "a hydrolysis reaction",
            "a saponification reaction",
            "a substitution reaction",
            "an esterification reaction"
        ]
    },
    {
        "numb": 162,
        "question": "What group of organic molecule have general formula of ROH?",
        "answer": "Alcohol",
        "options": [
            "Carboxylic acids",
            "Alcohol",
            "Ketones",
            "Ethers",
            "Esters"
        ]
    },
    {
        "numb": 163,
        "question": "Which of the following compound gives a characteristic odor and taste of fruit such as bananas, oranges, and pineapples?",
        "answer": "Esters",
        "options": [
            "Aldehydes",
            "Carboxylic acids",
            "Ethers",
            "Esters",
            "Ketones"
        ]
    },
    {
        "numb": 164,
        "question": "What is the use of Tollens' reagent?",
        "answer": "Distinguish aldehydes from ketones",
        "options": [
            "Reduce aldehydes",
            "Reduce carboxylic acids",
            "Distinguish alcohols from aldehydes",
            "Distinguish aldehydes from ketones",
            "Reduce ketones"
        ]
    },
    {
        "numb": 165,
        "question": "Which of the following is a product of reduction of a ketone?",
        "answer": "A secondary alcohol",
        "options": [
            "A tertiary acohol",
            "A ketone",
            "A carboxylic acid",
            "A secondary alcohol",
            "A primary alcohol"
        ]
    },
    {
        "numb": 166,
        "question": "What are the products of the reaction between methanol and ethanoic acid?",
        "answer": "Methyl ethanoate and water",
        "options": [
            "Ethyl methanoate and water",
            "CH3COOC2H5 and water",
            "Methyl ethanoate and water",
            "CH3COOCH3 and hydrogen",
            "Ethyle ethanoate and water"
        ]
    },
    {
        "numb": 167,
        "question": "Which compound will give a positive Tollen's test?",
        "answer": "Pentanal",
        "options": [
            "Pentanal",
            "Pentanoic acid",
            "3-pentanone",
            "Pentanol",
            "Ethyle propanoate"
        ]
    },
    {
        "numb": 168,
        "question": "What is the product of reduction of 2- butanone?",
        "answer": "2-butanol",
        "options": [
            "2-butanol",
            "1-butanol",
            "Butanoic acid",
            "Butane",
            "2-butanone"
        ]
    },
    {
        "numb": 169,
        "question": "Which of the following is used for production of alcohol by fermentation method?",
        "answer": "YEAST",
        "options": [
            "H2O",
            "YEAST",
            "O2",
            "INVERTASE",
            "CO2"
        ]
    },
    {
        "numb": 170,
        "question": "Which of the following is formed on hydrolysis of CH2 = CH2?",
        "answer": "Acetaldehyde",
        "options": [
            "Ethylene glycol",
            "Ethyl",
            "Ethylene oxide",
            "Ethyl alcohol",
            "Acetaldehyde"
        ]
    },
    {
        "numb": 171,
        "question": "A para of mirror isomers of which compound is the standard for assigning optical isomers to the D or L-form?:",
        "answer": "glyceraldehyde",
        "options": [
            "glucose",
            "alanine",
            "glyceraldehyde",
            "malic acid",
            "ethyl alcohol"
        ]
    },
    {
        "numb": 172,
        "question": "Which of the following is molecular formula of pyrrole?",
        "answer": "C4H5N",
        "options": [
            "C4H5N",
            "C4H4N",
            "C6H6N",
            "C5H6N",
            "C5H5N"
        ]
    },
    {
        "numb": 173,
        "question": "Which of the following statements is not correct for mononucleotides?",
        "answer": "mononucleotides consist of three constitutional parts",
        "options": [
            "heterocycle is linked with pentose by O-glycosidic bond",
            "the anomer carbon of pentose has \u03b2 - configuration",
            "ribose exist in its furanose form",
            "mononucleotides consist of three constitutional parts",
            "hydroxyl groups"
        ]
    },
    {
        "numb": 174,
        "question": "Which is not a heterocyclic aromatic compound?",
        "answer": "Naphthalene",
        "options": [
            "Pyrrole",
            "Furan",
            "Imidazole",
            "Naphthalene",
            "Thiophene"
        ]
    },
    {
        "numb": 175,
        "question": "What are the salts and derivatives of malic acid called?",
        "answer": "malate",
        "options": [
            "lactate",
            "tartrates",
            "acetate",
            "pyruvates",
            "malate"
        ]
    },
    {
        "numb": 176,
        "question": "Which of the following acids are oxycarboxylic acids?",
        "answer": "pyruvic acid",
        "options": [
            "Acetic acid",
            "pyruvic acid",
            "oxalic acid",
            "Butyric acid",
            "tartaric acid"
        ]
    },
    {
        "numb": 177,
        "question": "Which of the following acids are hydroxycarboxylic acids?",
        "answer": "Lactic acid",
        "options": [
            "acetic acid",
            "glyoxylic acid",
            "Lactic acid",
            "Butyric acid",
            "oxalic acid"
        ]
    },
    {
        "numb": 178,
        "question": "Which of the following is a heterocyclic aromatic amine?",
        "answer": "Adenine",
        "options": [
            "Alanine",
            "Adenine",
            "Glycine",
            "Oxalic acid",
            "Ethylamine"
        ]
    },
    {
        "numb": 179,
        "question": "Which is a heterocyclic aromatic compound found in DNA?",
        "answer": "Guanine",
        "options": [
            "Benzene",
            "Phenol",
            "Lactic acid",
            "Glucose",
            "Guanine"
        ]
    },
    {
        "numb": 180,
        "question": "Which compound is an example of a heterocyclic amine?",
        "answer": "Pyrimidine",
        "options": [
            "Phenol",
            "Ethanol",
            "Pyrimidine",
            "Acetic acid",
            "Benzene"
        ]
    },
    {
        "numb": 181,
        "question": "Which of the following product is possible of the interaction of acetic and salicylic acids?",
        "answer": "aspirin",
        "options": [
            "phenyl salicylate",
            "phenolphthalein",
            "phenylacetate",
            "aspirin",
            "methyl salicylate"
        ]
    },
    {
        "numb": 182,
        "question": "Which of the following is not a monosaccharide?",
        "answer": "Sucrose",
        "options": [
            "Tetrose",
            "Glucose",
            "Ribose",
            "Fructose",
            "Sucrose"
        ]
    },
    {
        "numb": 183,
        "question": "Which of the followinf is type of \u03b1-amine acid \u2013 valine?",
        "answer": "Neutral",
        "options": [
            "Acidic",
            "Ionic",
            "Slightly Polar",
            "Basic",
            "Neutral"
        ]
    },
    {
        "numb": 184,
        "question": "What is the difference of fats from waxes?",
        "answer": "A glycerol backbone",
        "options": [
            "Higher melting points",
            "A glycerol backbone",
            "Longer fatty acids",
            "More unsaturation",
            "An ester"
        ]
    },
    {
        "numb": 185,
        "question": "Which of the following compounds form under hydrolysis of simple lipids?",
        "answer": "Alcohols, carboxylic acids",
        "options": [
            "Esters",
            "Carboxylic acids",
            "Alcohols, carboxylic acids, carbohydrates etc",
            "Alcohols, carboxylic acids",
            "Alcohols"
        ]
    },
    {
        "numb": 186,
        "question": "Which sugar forms major component of nucleic acids?",
        "answer": "Ribose",
        "options": [
            "Ribose",
            "Xylulose",
            "Galactose",
            "Mannose",
            "Maltose"
        ]
    },
    {
        "numb": 187,
        "question": "Which of the following is due to Vitamin C deficiency?",
        "answer": "Scurvy",
        "options": [
            "BeriBeri",
            "Rickets",
            "Anemia",
            "Cancer",
            "Scurvy"
        ]
    },
    {
        "numb": 188,
        "question": "Which of the following is not a function of Vitamin A in the body?",
        "answer": "Blood clotting",
        "options": [
            "Blood clotting",
            "Immune defenses, maintenance of body linings and skin",
            "Vision",
            "Normal cell development and reproduction",
            "Bone and body growth"
        ]
    },
    {
        "numb": 189,
        "question": "What compound sugars are converted into in the liver?",
        "answer": "Glycogen",
        "options": [
            "Starch",
            "Chitin",
            "Cellulose",
            "Glycogen",
            "Vitamin"
        ]
    },
    {
        "numb": 190,
        "question": "What is the end product of hydrolysis of a Starch by amylase?",
        "answer": "Glucose",
        "options": [
            "Dextrins",
            "Maltose",
            "Glucose",
            "Glycogen",
            "Soluble starch"
        ]
    },
    {
        "numb": 191,
        "question": "Bond between sugar rest and pyrimidine N-base in nucleoside is formed between which atoms?",
        "answer": "C1 and N1",
        "options": [
            "C1 and N1",
            "C3 and N9",
            "C3 and N1",
            "C1 and N9",
            "C5 and N1"
        ]
    },
    {
        "numb": 192,
        "question": "How the double helical structure of DNA is held together?",
        "answer": "Hydrogen bonding",
        "options": [
            "Ester linkages",
            "Peptide bonding",
            "Hydrogen bonding",
            "Sulphur-sulphur linkages",
            "Glycosidic bonds"
        ]
    },
    {
        "numb": 193,
        "question": "Which of the following statements is false about glucose?",
        "answer": "It is a disaccharide",
        "options": [
            "It has a pyranose form",
            "It is aldose sugar",
            "It is a disaccharide",
            "It is a polyalcohol",
            "It is a reducing sugar"
        ]
    },
    {
        "numb": 194,
        "question": "Which of the following vitamin functions as both, hormone and visual pigment?",
        "answer": "Retinal",
        "options": [
            "Biotin",
            "Niacin",
            "Retinal",
            "Cobalamin",
            "Thiamine"
        ]
    },
    {
        "numb": 195,
        "question": "Which of the following sugar yields only glucose on hydrolysis?",
        "answer": "Maltose",
        "options": [
            "Lactose",
            "Inulin",
            "Maltose",
            "Sucrose",
            "Fructose"
        ]
    },
    {
        "numb": 196,
        "question": "Which of the following vitamin works together with Folate to produce new red blood cells?",
        "answer": "Vitamin B-12",
        "options": [
            "Vitamin D",
            "Vitamin B-1",
            "Niacin",
            "Vitamin B-12",
            "Vitamin A"
        ]
    },
    {
        "numb": 197,
        "question": "What is the form of converted sugars in the liver?",
        "answer": "Glycogen",
        "options": [
            "Glycogen",
            "Chitin",
            "Starch",
            "Inulin",
            "Cellulose"
        ]
    },
    {
        "numb": 198,
        "question": "Which of the following compound forms upon hydrolysis of proteins?",
        "answer": "Amino acids",
        "options": [
            "Hydroxyl acids",
            "Fatty acids",
            "Amino acids",
            "Amines",
            "Alcohols"
        ]
    },
    {
        "numb": 199,
        "question": "Dinucleotide is obtained by joining two nucleotides together by phosphodiester linkage. Between which carbon atoms of pentose sugars of nucleotides are these linkages present?",
        "answer": "5 and 3",
        "options": [
            "3 and 3",
            "1 and 5",
            "3 and 1",
            "5 and 5",
            "5 and 3"
        ]
    },
    {
        "numb": 200,
        "question": "Amino acids generally exist in the form of Zwitter ions, which means they contain?",
        "answer": "The basic \u2013 NH3+ group and acidic \u2013 COO\u2013 group",
        "options": [
            "Basic \u2013 NH2 group and acidic \u2013 COOH group",
            " Basic \u2013 COOH group and acidic \u2013 NH group",
            "Basic -NH2 and acidic \u2013 H+ group",
            "The basic \u2013 NH3+ group and acidic \u2013 COO\u2013 group",
            "Basic \u2013 COO\u2013 group and acidic \u2013 NH3+ group"
        ]
    }
];
