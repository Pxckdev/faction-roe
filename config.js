// =====================================================================
//  SOLS V2 - FACTION RULES OF ENGAGEMENT
//  Edit everything on the page here. Save, then refresh the page.
// =====================================================================
//
//  HOW IT WORKS
//  - Each section in "sections" is one big card on the page (01, 02, 03...).
//    Add, remove or move a section and the numbers and "Jump to" menu update by themselves.
//  - A section has a "title", optional "content" and optional "subsections".
//  - A subsection has a "title", an optional "badge" (small tag next to the title) and "content".
//
//  WHAT CAN GO IN "content" (in any order):
//    "Some text"                                   -> a paragraph
//    { rules: ["Rule one", "Rule two"] }           -> a list of rules
//    { rules: [{ text: "Rule", sub: ["a", "b"] }] } -> a rule with smaller points under it
//    { note: "Example:", text: "..." }             -> a grey box with a label (text can be a list of paragraphs)
//    { note: "Restriction", text: "...", warn: true } -> a red warning box
//    { tiers: [{ name: "Tier 1", badge: "...", text: "..." }] } -> tier cards (blue / purple / red)
//    { jumpLinks: true }                           -> buttons that jump to this section's subsections
//    { badges: ["24-hour deadline"] }              -> small tags
//
//  TEXT TIPS
//  - Put **double stars** around words to make them bold.
//  - Links: [text to show](https://example.com)
//  - Every piece of text needs "quotes" around it and a comma after it.
//    If your text has a " inside it, write it as \"  (example: "Using \"he killed my friend\" as a reason")
// =====================================================================

window.ROE = {
  // ----- Background video -----
  // Put an .mp4 file in the same folder as index.html and write its name here.
  // It plays on loop, with no sound, blurred so you can't really tell what it is.
  // Leave it as "" for a plain black background.
  backgroundVideo: "background.mp4",
  backgroundBlur: 28,      // how blurry: 0 = sharp, 20 = soft, 40 = very blurry
  backgroundDarkness: 0.6, // how dark: 0 = full brightness, 0.6 = dim, 0.9 = almost black

  // ----- Top of the page -----
  pageTitle: "SOLS V2 | Faction Rules of Engagement",
  kicker: "SOLS V2 · FACTIONS",
  title: "Rules of Engagement",
  tagline: "Feed The Streets",
  subtitle: "Every faction member is expected to know these rules. \"I didn't know\" won't be accepted.",

  // Small facts under the title. The number of sections is added automatically.
  stats: [
    { value: "3", label: "Faction Tiers" },
    { value: "24h", label: "Report Window" },
  ],

  // ----- Bottom of the page -----
  footerNote: "Stories of Los Santos V2 · Faction Management has final say on anything not covered here.",
  footerLinks: [
    { label: "Server Guidelines", url: "https://pxckdev.github.io/solsv2-server-guidelines/" },
    { label: "Faction RP Guide", url: "https://pxckdev.github.io/factions--simple-guide-to-serious-faction-roleplay/" },
    { label: "Faction Helper", url: "https://pxckdev.github.io/solsv2-faction-helper/" },
  ],

  // ----- The rules -----
  sections: [
    {
      title: "Faction Progression & Beef System",
      content: [
        "Factions are expected to gradually build their presence within the server rather than immediately entering multiple conflicts. Each stage of faction progression comes with different limits on how many active beefs a faction may have.",
        {
          tiers: [
            {
              name: "Tier 1",
              text: "This stage is focused on developing your faction's identity, building connections, and creating RP with other factions. Use this time to establish relationships, alliances, rivalries, and storylines before becoming a Tier 1.5 Faction.",
            },
            {
              name: "Tier 1.5",
              badge: "Up to 3 active beefs",
              text: "Once your faction becomes Tier 1.5, you may have active beef with up to three (3) other Tier 1.5 Factions at a time. This encourages factions to develop meaningful conflicts rather than attempting to involve themselves in every situation.",
            },
            {
              name: "Tier 2",
              badge: "Three-beef limit removed",
              text: "Once your faction reaches Tier 2, the three-beef limit is removed. Tier 2 factions may develop conflicts with any faction that is Tier 1.5 status or higher, provided all other ROE and escalation requirements are followed.",
            },
          ],
        },
      ],
    },
    {
      title: "Faction Attacks",
      content: [
        "Faction Attacks occur when an attacking faction creates a hostile environment toward another faction. Once accepted into a weapon scheme, faction attacks are limited to firearms unless otherwise specified. All attacks must escalate realistically and organically under all circumstances.",
        "There are four different attack types, which operate under two separate cooldown systems:",
        { jumpLinks: true },
      ],
      subsections: [
        {
          title: "Deathmatching Attacks",
          badge: "4+ on set turf",
          content: [
            "Deathmatching Attacks are faction attacks committed strictly through the use of firearms. This includes shooting in the air, at a person, or anywhere on a faction's set turf.",
            {
              rules: [
                "If you are attacking a faction and there are 4 or more members/users on their set turf, you may initiate a Deathmatching Attack.",
                "There is a 3-day cooldown between Deathmatching Attacks.",
                "Tier 2 factions and higher may conduct 2 Deathmatching Attacks per day.",
                "Deathmatching Attacks must still be conducted organically and cannot be used to force unnecessary conflict.",
              ],
            },
          ],
        },
        {
          title: "Robberies",
          badge: "6-hour cooldown",
          content: [
            "A Robbery is considered an interaction when a faction member attempts to rob another player.",
            {
              rules: [
                "Factions have a 6-hour cooldown between Robberies.",
                "If a Robbery occurs within another faction's set turf, it will count as a Faction Attack, as it creates a hostile environment.",
                "Robberies are expected to occur organically and should only be initiated when there is a clear or reasonably identifiable advantage.",
                "Acceptable examples include 2v1 or 4v2 situations.",
                "Attempting to force robberies in situations such as 4v3 or 4v4 is not permitted under the Server Guidelines.",
              ],
            },
            {
              note: "Exception",
              text: [
                "The numbers rule does not apply in every situation. For example, if you enter your own faction's turf and there is a large crowd present, or if you enter a house where the number of occupants is unknown, you cannot reasonably be expected to know the exact numbers involved.",
                "However, outside of situations where the numbers are genuinely unknown or naturally skewed, factions should not intentionally force a numerical advantage simply to justify a robbery. Robberies should happen naturally through RP rather than being treated as a way to manufacture conflict.",
              ],
            },
          ],
        },
        {
          title: "Hostile Environment",
          content: [
            "A Hostile Environment occurs when a faction enters another faction's turf with the intent to create hostility or provoke a reaction.",
            "Hostile actions may include, but are not limited to:",
            {
              rules: [
                "Putting a member of the opposing faction into Death Mode.",
                "Chasing an opposing faction member on foot or in a vehicle.",
                "Being verbally hostile toward the opposing faction, such as dissing their set.",
                "Repeatedly spinning an opposing faction's turf, if the opposing faction reacts to the behavior.",
                "Entering an opposing faction's turf with the intent to instigate or provoke them into attacking.",
                "Heavily trooping through the turf of a faction you have an established beef with in a manner clearly intended to provoke a response.",
              ],
            },
            "If a defending faction chooses to react to a Hostile Environment by engaging the opposing faction, the interaction will count as an Attack for the faction that created the Hostile Environment.",
            "The faction responsible for creating the Hostile Environment will subsequently be placed under the 12-hour Deathmatching Attack cooldown.",
          ],
        },
        {
          title: "Mutual Combat",
          badge: "5+ members per faction",
          content: [
            "Mutual Combat occurs when two crowded factions, consisting of 5 or more members from each faction, engage in an interaction within the same vicinity that creates a hostile environment and could reasonably escalate into a shootout.",
            "If a shootout occurs, the faction that engages first will be considered the attacking faction.",
            {
              note: "Examples:",
              rules: [
                "Two factions unexpectedly encounter one another at a gas station or clothing store, resulting in an organic escalation into a shootout.",
              ],
            },
            "When Mutual Combat results in a shootout, both participating factions will be placed under the 12-hour Deathmatching Attack cooldown.",
            {
              note: "Restriction",
              text: "Mutual Combat cannot take place on a faction's set turf.",
              warn: true,
            },
          ],
        },
      ],
    },
    {
      title: "Attack Regulations",
      content: [
        "Before participating in any faction attack or shootout, all members are expected to follow the regulations below. Failure to follow these regulations may result in individual or faction punishment.",
      ],
      subsections: [
        {
          title: "Character Development",
          content: [
            {
              rules: [
                "Before participating in a shootout, you must have fully developed your character. This is a strict requirement.",
                {
                  text: "Your character must have realistic development toward:",
                  sub: [
                    "Possessing and/or obtaining a firearm.",
                    "Becoming involved in illegal activity.",
                    "Developing a legitimate negative interaction or conflict with the opposing faction.",
                  ],
                },
                "Gunplay should never be the starting point of a character's story. There must be sufficient RP leading up to the conflict.",
              ],
            },
          ],
        },
        {
          title: "72-Hour Requirement",
          badge: "72 hours (3 days)",
          content: [
            {
              rules: [
                "You must wait at least 72 hours (3 days) after creating a character and/or joining a faction before participating in a faction attack.",
                "Failure to meet this requirement may result in punishment.",
              ],
            },
          ],
        },
        {
          title: "Attack Size",
          badge: "4 participants",
          content: [
            {
              rules: [
                "A maximum of 4 members may intentionally participate in a faction attack.",
                {
                  text: "Exceptions may apply when:",
                  sub: [
                    "The attack occurs on your faction's set turf after the turf has been made hostile.",
                    "The interaction qualifies as Mutual Combat.",
                  ],
                },
              ],
            },
          ],
        },
        {
          title: "Maximum Kills",
          badge: "3 intentional kills",
          content: [
            {
              rules: [
                "During a faction attack, you may intentionally kill a maximum of 3 members of the opposing faction.",
                "If a fourth user is unintentionally killed, the final victim may be revived and the attacking faction will not receive a refund.",
                "This regulation does not apply to shootouts. If both parties actively engage in a shootout, no characters will be revived regardless of whether every participant was armed.",
              ],
            },
          ],
        },
        {
          title: "Turf Defense",
          content: [
            "Defense within a faction's turf must remain realistic and reasonable.",
            "The following are prohibited or heavily discouraged:",
            {
              rules: [
                "Creating extended or deliberate roadblocks.",
                "Constantly patrolling the turf on foot or in vehicles solely to defend it.",
                "Camping on rooftops.",
                "Any other tactic that is deemed unrealistic or excessively defensive by Faction Management.",
              ],
            },
            "Tactics that are considered Playing to Win or Subpar Roleplay may result in faction punishment.",
          ],
        },
        {
          title: "Double Attacks",
          content: [
            {
              rules: [
                "If the roleplay surrounding an attack is sufficient and the opposing faction has not slid back within 120 hours (5 days), a faction may conduct a double attack.",
                "You may not conduct another Deathmatching Attack until 5 full calendar days have passed.",
                "This rule applies only to Deathmatching Attacks and does not apply to Robberies.",
              ],
            },
          ],
        },
        {
          title: "Shooter's POV",
          badge: "3-minute minimum",
          content: [
            {
              rules: [
                "A Shooter's POV with sound must be provided whenever requested by Faction Management or staff.",
                "Failure to provide the required POV may result in the report being decided without your evidence and may lead to faction punishment.",
                "POVs must be recorded using GeForce Experience/NVIDIA or AMD recording software.",
                "The required recording must be at least 3 minutes long.",
              ],
            },
          ],
        },
        {
          title: "Turf Camping",
          content: [
            {
              rules: [
                "You may not intentionally linger around an opposing faction's turf after an attack or interaction.",
                "Remaining in or around a turf without legitimate RP justification may be considered Turf Camping.",
                "Turf Camping is ultimately subject to Faction Management discretion.",
              ],
            },
          ],
        },
        {
          title: "Scouting & Spinning",
          content: [
            "Members who are not actively participating in a faction attack may not scout or spin an opposing faction's turf.",
            "This applies to:",
            {
              rules: [
                "Defense.",
                "Backdoor roleplay, unless you are the player actively lining the victim.",
                "Gathering information for an upcoming attack or interaction.",
                "Relaying information about opposing faction members to your faction.",
              ],
            },
            "Scouting is defined as intentionally circling or monitoring an opposing faction's turf, or your own turf, for the primary purpose of gathering information and relaying it to your faction.",
            "Scouting is prohibited both on foot and in vehicles.",
          ],
        },
        {
          title: "Probationary Factions",
          content: [
            {
              rules: [
                "You may not attack a faction that is currently on probation.",
                "Probationary factions should not participate in gunplay until their probationary period has ended.",
                "This includes set-ups, lines, and other forms of faction gunplay.",
                "An exception may apply if the probationary faction directly brings the situation upon themselves, such as through disrespect toward deceased members.",
              ],
            },
          ],
        },
        {
          title: "Fist Fights & Brawls",
          content: [
            {
              rules: [
                "Fist fights are not considered faction attacks once a faction has been Tiered or has completed probation.",
                "For Tiered/non-probationary factions, fist fights only count as an interaction.",
                "During probation, however, any physical altercation where one faction outnumbers the opposing party will count as an attack.",
                "This includes brawls, jumping, and similar situations.",
              ],
            },
          ],
        },
        {
          title: "Non-Faction Members",
          content: [
            {
              rules: [
                "Users who are not members of a faction may not participate in faction attacks.",
                "The exception is users participating through the Illegal Civilian Scheme.",
                "Illegal Civilians may participate only when they have sufficient evidence and RP established through backdoor roleplay.",
              ],
            },
          ],
        },
        {
          title: "Masks & Identification",
          content: [
            {
              rules: [
                "If a member of an opposing faction is wearing a mask, they may still be held liable for an attack.",
                "This applies whether they are on the opposing faction's turf or in a public area, regardless of the type of mask being worn.",
              ],
            },
          ],
        },
        {
          title: "Vehicles",
          content: [
            {
              rules: [
                "Faction attacks conducted from electric vehicles or motorcycles are strictly prohibited.",
                "All forms of motorcycles except mopeds and bicycles are prohibited from being used during faction attacks.",
              ],
            },
          ],
        },
        {
          title: "Post-Attack Server Time",
          badge: "30 minutes",
          content: [
            {
              rules: [
                "After initiating a faction attack, you must remain in the server for at least 30 minutes.",
                "The same requirement applies to members participating in the defense of a faction attack.",
                "Leaving the server before the required time may result in punishment.",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Bullying & Courtesy",
      content: [
        "The purpose of these regulations is to encourage factions below Tier 1 to develop meaningful roleplay throughout the server while preventing established factions from circumventing courtesy rules or unnecessarily bullying non-tiered factions.",
        {
          rules: [
            "Tier 2 loot may only be used against factions that are Tier 1 or higher when conducting an Attack.",
            "Tier 1.5 weapons are limited to a maximum of 2 weapons when engaging a non-tiered faction.",
            "Any violation of these regulations may result in faction discipline, regardless of whether a formal report is submitted.",
          ],
        },
        "Tier 1 and Tier 1.5 factions should prioritize building ROLEPLAY throughout the server before becoming eligible for Tier 2.",
        "There should also be a reasonable level of respect and/or fear toward established Tier 2 factions. Realistically, an inexperienced group would not see an established faction openly displaying multiple rifles and act completely fearless without considering the potential consequences or their own limitations.",
        "Before becoming a Tiered faction, you should be actively roleplaying around the fact that established factions have more experience, resources, and influence than your own. This system exists to maintain a fair environment for both new and experienced factions within the Faction Scheme.",
      ],
    },
    {
      title: "Pinpointing & Escalation",
      subsections: [
        {
          title: "Pinpointing",
          content: [
            "Pinpointing is the act of gathering information about a faction or individual with the intent of potentially using that information to conduct a future attack.",
            "Pinpointing must be based exclusively on legitimate in-character knowledge.",
            "Information that may be used for pinpointing includes, but is not limited to:",
            {
              rules: [
                "Known hangout locations.",
                "Apartments or residences.",
                "Vehicles.",
                "Clothing or recognizable outfits.",
                "Known faction members or notable individuals.",
                "Other locations or identifying information discovered through legitimate RP.",
              ],
            },
            "If a faction has obtained legitimate in-character knowledge that a faction member or notable member is located at one of these locations, they may act on that information.",
            {
              note: "Example:",
              text: "A faction observes two known members of an opposing faction enter an apartment. The location has now been established through IC knowledge, meaning the faction may enter the apartment without requiring additional pinpointing.",
            },
            "Nametags may also be used as a form of pinpointing when the information is reasonably obtained through the RP situation.",
          ],
        },
        {
          title: "Poor Escalation",
          badge: "7 meaningful interactions",
          content: [
            "Faction attacks must have sufficient roleplay, reasoning, and escalation behind them.",
            "Any attack that is initiated without proper buildup or a sufficient reason may be considered Poor Escalation and can result in faction punishment.",
            "As a general requirement, you should have at least 7 meaningful interactions with the individual involved before escalating to a faction attack. These interactions must contribute to the development of the conflict and cannot simply be manufactured for the purpose of reaching the required number.",
          ],
        },
        {
          title: "Negative Interactions",
          badge: "7 negative interactions",
          content: [
            {
              rules: [
                "A faction member must have at least 7 meaningful negative interactions with an opposing faction member before engaging in a shootout.",
                "Simple arguments or verbal exchanges do not count toward these interactions.",
                "The interactions must be legitimate and contribute to the development of the conflict.",
                "This requirement is void if gunplay has already occurred between the players.",
              ],
            },
          ],
        },
        {
          title: "Avoiding Roleplay / Playing to Win",
          content: [
            "If an opposing faction member enters a faction's set turf and is identified as a member of that faction, whether through their appearance, clothing, mask, or other recognizable characteristics, they may be engaged through RP.",
            "If the individual deliberately avoids or refuses legitimate roleplay in an attempt to escape the situation or gain an advantage, this may be considered Playing to Win.",
            "If the player is clearly identified as an opposing faction member and is intentionally refusing the RP interaction, the defending faction may have full authority to kill the player.",
            "This authority should only be exercised when the circumstances clearly demonstrate an intentional attempt to avoid legitimate roleplay. It should not be used as an excuse to bypass normal escalation requirements.",
          ],
        },
      ],
    },
    {
      title: "Additional Rules",
      content: [
        {
          rules: [
            "As a Faction Member, you are only allowed to roleplay injuries if you are shot and do not enter the Death Script. If you enter the Death Script from being shot, you are required to Character Kill (CK) after having received your one-time PK (if you qualify). This also applies to situations such as tripping, vehicle accidents, and similar incidents. If a player enters the Death Script due to a confirmed server-sided issue, the outcome will be left to Administrator discretion. This includes falling through the map while out of combat or dying due to server-sided/invisible collisions.",
            {
              text: "**Backdoor Roleplay:** All revenge, conflict, or hostile actions must be based on developed, realistic, and meaningful in-character reasoning. You must demonstrate ongoing RP and IC development leading up to your actions. Using thin or one-line justifications, such as \"he killed my best friend,\" without proper in-character investigation, RP progression, or evidence of the connection will be considered Backdoor RP and may result in administrative action. The member committing the backdoor or lining a user does not count toward the 4-user attack limit, unless the member lining the user shoots or otherwise utilizes a weapon.",
              callout: {
                note: "Example of acceptable Backdoor Roleplay:",
                text: "Your character's brother is killed. You witness the murder, gather IC clues over time, speak with others, uncover information, and build a storyline of revenge through escalating RP and faction development.",
              },
            },
            "The maximum number of people allowed to participate in a brawl is 8 people per faction. This includes allies.",
            "At public gatherings, parties, or get-togethers that have been advertised through the server, factions are not permitted to shoot, start beef, or intentionally cause drama. The conflict must be taken to a different location where the situation can properly develop through RP.",
            "Multiple users being banned for Malicious Activity, Third-Party Modifications, or other serious offenses may be judged as Poor Representation of Faction Roleplay. Final judgment will always remain at Faction Management discretion.",
            "Any behavior that is deemed by Faction Management to be a poor representation of Faction Roleplay may result in faction punishment.",
            "If a faction has not applied to become a faction, gangs or factions may not be formally established. A faction may begin its development and participate in faction activity once it has an active thread.",
            "Faction members are not permitted to enter Local OOC or act out of character without legitimate justification. Faction Management may punish an individual or their faction if they enter Local OOC simply because they are unable to take a loss. Players may also report faction members who engage in this behavior. Allow the situation to develop before asking questions; do not disrupt the flow of roleplay.",
            "You may not attempt to take someone's inventory items after knocking them out. Only physical belongings such as shoes, clothing, etc. may be taken, and the action must be properly roleplayed through /me and /do.",
            "Kidnapping is considered part of robbing. You may kidnap and rob another player, but you may not kidnap and kill. This also includes Torture Roleplay.",
            "If a user is outnumbered while being surrounded, circled, cornered, or otherwise placed in a situation where resistance would be unreasonable, they must value their life and display appropriate fear, regardless of whether they are carrying a firearm.",
            "Usage of F-Chat is strictly limited to out-of-character announcements from Server Management or faction Leadership. Any in-character usage or metagaming through F-Chat will result in a Faction Strike.",
            "**Water Evading:** Factions may not use water as a means of intentionally escaping from Police or an opposing faction. If caught, your character will be automatically CK’d.",
            "**Cop Baiting:** Factions may not intentionally bait or use distractions against Police in an attempt to avoid jail time or otherwise abuse server limitations. Punishment will depend on the severity of the situation.",
            "Depending on the severity, a faction may receive a Strike or face Closure if there are multiple instances of members repeatedly provoking others within a Greenzone.",
            "Factions may be punished for Playing to Win or Avoiding Roleplay, depending on the severity and Faction Management's discretion.",
            "Any firearm whose serial number has not been properly registered with Faction Management may result in a ban and/or faction strike.",
            "Player Kills (PKs) are defined as being able to continue roleplaying after entering the Death Script. A PK is only permitted once per character, provided the character was not shot in the head or neck and did not sustain more than two (2) gunshot wounds to the chest.",
            "**PK Injury Roleplay:** Characters who receive a PK must realistically roleplay their injuries. Depending on the severity, injuries must be roleplayed for 12–72 hours of active in-game time. Offline time does not count. Failure to properly roleplay PK injuries may result in Faction Management forcing a Character Kill (CK).",
            "NPC-owned stores located on a faction's turf, such as Clothing Stores, Barbershops, Gas Stations, etc., are not considered Greenzones under ROE. Players may initiate and conduct attacks inside or outside of these locations. Player-Owned Businesses on faction turf are still considered Greenzones; this exception only applies to NPC-owned stores. There should still be common courtesy toward players who are genuinely changing their clothing or using the store for its intended purpose. Do not simply shoot everyone inside a clothing store without consideration for the RP occurring there. Faction Management has final discretion regarding situations involving this rule.",
            "**Untrusted Member Limit:** A faction may have no more than 5 members holding the Untrusted Member rank at any given time.",
            "You may shoot if you are placed in imminent danger, such as having a firearm pulled on you, being actively aimed at, or having your vehicle intentionally rammed. In these situations, the shooting will not count as an Attack for either side, subject to Faction Management discretion.",
            "Upon firing a weapon anywhere within the server, you are automatically placed under a universal 12-hour Player Cooldown. You must wait 12 hours before participating in another shootout. This cooldown does not apply when you are acting in defense.",
          ],
        },
      ],
    },
    {
      title: "Report Regulations",
      content: [
        {
          badges: ["24-hour deadline"],
        },
        {
          rules: [
            "Faction reports must be submitted within 24 hours of the incident.",
            "Filing a report solely out of retaliation because a situation did not go as planned is prohibited.",
            "If you have an active report against another faction, you must not participate in any form of negative interaction with that faction until the report has received and posted a verdict. This applies to both factions involved.",
            "Public bashing and/or OOC toxicity toward a faction or its roleplay may result in punishment. If you have an issue with a faction, make a report or leave the situation alone. Maintain common courtesy toward other factions.",
            "Factions may be prohibited from selling firearms and/or drugs while an active faction report is pending.",
          ],
        },
      ],
    },
    {
      title: "Weapon Trading & Refill Guidelines",
      content: [
        {
          rules: [
            "Any abuse of the refill, trading, or robbery systems may result in an instant de-tier or other disciplinary action, at Faction Management's discretion.",
            "Weapons may only be traded or purchased once a faction reaches Tier 1.5. Upon reaching Tier 1.5, a faction may sell one firearm per week. All sales must be logged with Faction Management immediately.",
            "Tier 1.5 factions may conduct up to two firearm sales per week, while Tier 2 factions may conduct up to three firearm sales per week.",
            "All firearms gained, traded, purchased, sold, or lost count toward your overall weapon limit. Every firearm transaction must be properly logged within your faction Discord and reported to a member of Faction Management. This includes sales, trades, purchases, and losses. Lost firearms may be documented through the designated lost-firearm channel.",
            "Any firearm gained through a refill must also be logged within your faction Discord. Factions must maintain an appropriate channel specifically for documenting refills.",
            "Going inactive between refill periods solely to return when firearms become available again is considered abuse of the scheme and may result in faction discipline. Your faction occupies a slot within the weapon scheme to contribute to roleplay, not simply to obtain and use firearms.",
            "Faction Management actively monitors this behavior. If a faction is found intentionally disappearing after losing its firearms or manipulating activity around refill periods, disciplinary action will be taken.",
          ],
        },
      ],
    },
  ],
};
