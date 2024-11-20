const politicians = {
  federal: {
    senators: [
      {
        id: 1,
        name: "Bernie Moreno",
        party: "Republican",
        position: "U.S. Senator",
        since: 2024,
        state: "Ohio",
        image: "/images/Bernie_Moreno.jpg",
        imageAttribution:
          'By <a rel="nofollow" class="external text" href="https://www.flickr.com/people/22007612@N05">Gage Skidmore</a> from Surprise, AZ, United States of America - <a rel="nofollow" class="external text" href="https://www.flickr.com/photos/gageskidmore/53069107164/">Bernie Moreno</a>, <a href="https://creativecommons.org/licenses/by-sa/2.0" title="Creative Commons Attribution-Share Alike 2.0">CC BY-SA 2.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=135037130">Link</a>',
        address: "500 E Main St, Columbus, OH",
        email: "bernie.moreno@senate.gov",
        website: "https://www.moreno.senate.gov",
        biography:
          "Bernie Moreno is a business leader and entrepreneur elected as U.S. Senator for Ohio in 2024.",
        committees: ["Committee on Finance", "Committee on Armed Services"],
        caucuses: ["Republican Study Committee", "Senate Tax Reform Caucus"],
        military: null,
        education: ["University of Michigan (BA, Political Science)"],
        votingRecord: [
          {
            "bill": "Affordable Childcare Act",
            "vote": "Yes",
            "result": "Passed",
            "date": "2023-06-12"
          },
          {
            "bill": "Clean Energy Jobs Act",
            "vote": "Yes",
            "result": "Failed",
            "date": "2023-07-15"
          },
          {
            "bill": "Tax Reform Act 2023",
            "vote": "No",
            "result": "Passed",
            "date": "2023-08-21"
          },
          {
            "bill": "Healthcare Accessibility Bill",
            "vote": "Yes",
            "result": "Passed",
            "date": "2023-09-10"
          }
        ],

        electoralHistory: [
  {
    "year": 2024,
    "office": "U.S. Senator",
    "opponent": "Sherrod Brown",
    "votes": 2500000,
    "opponentVotes": 2300000,
    "result": "Won"
  }
],
        values: [
          {
            topic: "Abortion Rights",
            opinion: "Pro-life; supports restrictions on abortion access.",
          },
          {
            topic: "Healthcare",
            opinion:
              "Advocates for market-based healthcare solutions; opposes government-run healthcare.",
          },
          {
            topic: "Economy and Jobs",
            opinion:
              "Supports tax cuts and deregulation to promote growth and job creation.",
          },
          {
            topic: "Gun Rights and Control",
            opinion:
              "Strong supporter of Second Amendment rights; opposes most gun control measures.",
          },
          {
            topic: "Climate Change and Energy Policy",
            opinion:
              "Skeptical of extensive climate regulations; supports energy independence through fossil fuels.",
          },
          {
            topic: "Education",
            opinion:
              "Supports school choice and local control over education policies.",
          },
          {
            topic: "Immigration",
            opinion:
              "Advocates for stricter border security; supports merit-based immigration reforms.",
          },
          {
            topic: "LGBTQ+ Rights",
            opinion:
              "Opposes expansions perceived as infringing on religious freedoms.",
          },
          {
            topic: "Crime and Public Safety",
            opinion: "Supports law enforcement and opposes defunding police.",
          },
          {
            topic: "Election Integrity and Voting Rights",
            opinion: "Supports voter ID laws to ensure election integrity.",
          },
        ],
        essay: "Test",
      },
      {
        id: 2,
        name: "J.D. Vance",
        party: "Republican",
        position: "U.S. Senator",
        since: 2023,
        state: "Ohio",
        image: "/images/JD_Vance.jpg",
        imageAttribution:
          'By United States Congress - <a rel="nofollow" class="external free" href="https://www.vance.senate.gov/wp-content/uploads/2023/01/Senator_Vance_Portrait.jpeg">https://www.vance.senate.gov/wp-content/uploads/2023/01/Senator_Vance_Portrait.jpeg</a>, Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=128111508">Link</a>',
        address: "456 Senate Ln, Columbus, OH",
        email: "jd.vance@senate.gov",
        website: "https://www.vance.senate.gov",
        biography:
          "J.D. Vance, author of 'Hillbilly Elegy,' serves as U.S. Senator for Ohio, focusing on family values and economic growth.",
        committees: [
          "Committee on Commerce, Science, and Transportation",
          "Committee on Armed Services",
        ],
        caucuses: ["Appalachian Caucus", "Senate Freedom Caucus"],
        military: {
          rank: "Corporal",
          branch: "U.S. Marine Corps",
          accolades: ["Iraq Campaign Medal"],
        },
        education: ["Ohio State University (BA)", "Yale Law School (JD)"],
        votingRecord: [
          {
            "bill": "Inflation Reduction Act",
            "vote": "No",
            "result": "Passed",
            "date": "2023-08-16"
          },
          {
            "bill": "CHIPS and Science Act",
            "vote": "Yes",
            "result": "Passed",
            "date": "2023-07-28"
          },
          {
            "bill": "Respect for Marriage Act",
            "vote": "No",
            "result": "Passed",
            "date": "2023-12-13"
          },
          {
            "bill": "Infrastructure Investment and Jobs Act",
            "vote": "Yes",
            "result": "Passed",
            "date": "2023-11-15"
          }
        ],
        
        electoralHistory: [
          {
            "year": 2022,
            "office": "U.S. Senator",
            "opponent": "Tim Ryan",
            "votes": 2200000,
            "opponentVotes": 2100000,
            "result": "Won"
          }
        ],
        
        values: [
          {
            topic: "Abortion Rights",
            opinion:
              "Pro-life; supports significant restrictions on abortion access.",
          },
          {
            topic: "Healthcare",
            opinion: "Criticizes ACA; supports free-market healthcare reforms.",
          },
          {
            topic: "Economy and Jobs",
            opinion:
              "Focuses on revitalizing manufacturing and addressing rural economic disparities.",
          },
          {
            topic: "Gun Rights and Control",
            opinion:
              "Strong advocate for Second Amendment rights; opposes gun control.",
          },
          {
            topic: "Climate Change and Energy Policy",
            opinion:
              "Skeptical of extensive regulations; supports traditional energy sources.",
          },
          {
            topic: "Education",
            opinion: "Supports school choice and vocational training programs.",
          },
          {
            topic: "Immigration",
            opinion:
              "Advocates for stricter immigration controls and opposes amnesty.",
          },
          {
            topic: "LGBTQ+ Rights",
            opinion:
              "Opposes expansions seen as infringing on religious liberties.",
          },
          {
            topic: "Crime and Public Safety",
            opinion: "Supports law enforcement and opposes defunding police.",
          },
          {
            topic: "Election Integrity and Voting Rights",
            opinion:
              "Supports voter ID laws; opposes federal oversight of elections.",
          },
        ],
        essay: "Test",
      },
    ],
    houseRepresentatives: [
      {
        id: 3,
        name: "Greg Landsman",
        party: "Democrat",
        position: "U.S. Representative",
        state: "Ohio",
        district: "1",
        since: 2023,
        image: "/images/Greg_Landsman.jpg",
            imageAttribution:
              'By United States Congress - <a rel="nofollow" class="external free" href="https://commons.wikimedia.org/w/index.php?curid=128111508">https://commons.wikimedia.org/w/index.php?curid=128111508</a>, Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=128111508">Link</a>',
        address: "123 Capitol St, Cincinnati, OH",
        email: "greg.landsman@house.gov",
        website: "https://landsman.house.gov",
        status: "In Office", // Options: "In Office", "Ran and Lost", "Former Officeholder"
        biography:
          "Greg Landsman is a former Cincinnati City Council member advocating for families and children in Congress.",
        committees: [
          "House Committee on Small Business",
          "House Committee on Veterans' Affairs",
        ],
        caucuses: ["New Democrat Coalition", "Congressional Equality Caucus"],
        military: null,
        education: [
          "Ohio University (BA, Economics)",
          "Harvard University (Master's in Theology)",
        ],
        votingRecord: [
          {
            bill: "Affordable Childcare Act",
            vote: "Yes",
            result: "Passed",
            date: "2023-06-12",
          },
          {
            bill: "Clean Energy Jobs Act",
            vote: "Yes",
            result: "Failed",
            date: "2023-07-15",
          },
          {
            bill: "Tax Reform Act 2023",
            vote: "No",
            result: "Passed",
            date: "2023-08-21",
          },
          {
            bill: "Healthcare Accessibility Bill",
            vote: "Yes",
            result: "Passed",
            date: "2023-09-10",
          },
        ],
        electoralHistory: [
          {
            year: 2022,
            office: "U.S. Representative",
            opponent: "Steve Chabot",
            landsmanVotes: 136000,
            opponentVotes: 131000,
            result: "Won",
          },
          {
            year: 2018,
            office: "Cincinnati City Council",
            landsmanVotes: 43000,
            opponentVotes: null, // No specific opponent in this race
            result: "Won",
          },
        ],
        values: [
          {
            topic: "Abortion Rights",
            opinion: "Pro-choice; supports access to reproductive healthcare.",
          },
          {
            topic: "Healthcare",
            opinion:
              "Supports ACA and advocates for expanding healthcare access.",
          },
          {
            topic: "Economy and Jobs",
            opinion:
              "Focuses on economic equity; supports raising the minimum wage.",
          },
          {
            topic: "Gun Rights and Control",
            opinion:
              "Supports common-sense gun control measures, including background checks.",
          },
          {
            topic: "Climate Change and Energy Policy",
            opinion:
              "Advocates for renewable energy investments and combating climate change.",
          },
          {
            topic: "Education",
            opinion:
              "Supports increased public education funding and affordable higher education.",
          },
          {
            topic: "Immigration",
            opinion:
              "Supports comprehensive reform and pathways to citizenship.",
          },
          {
            topic: "LGBTQ+ Rights",
            opinion:
              "Advocates for LGBTQ+ rights and anti-discrimination protections.",
          },
          {
            topic: "Crime and Public Safety",
            opinion:
              "Supports police reform and community-based safety initiatives.",
          },
          {
            topic: "Election Integrity and Voting Rights",
            opinion:
              "Opposes restrictive voting laws; supports expanded access.",
          },
        ],
        essay: "Test",
      },
      {
        id: 4,
        name: "Brad Wenstrup",
        party: "Republican",
        position: "U.S. Representative",
        state: "Ohio",
        image: "/images/Brad_Wenstrup.jpg",
        imageAttribution:
          'By United States Congress - <a rel="nofollow" class="external free" href="https://commons.wikimedia.org/w/index.php?curid=39211167">https://commons.wikimedia.org/w/index.php?curid=39211167</a>, Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=39211167">Link</a>',

        district: "2",
        address: "456 Capitol Blvd, Cincinnati, OH",
        email: "brad.wenstrup@house.gov",
        website: "https://wenstrup.house.gov",
        biography:
          "Brad Wenstrup is a physician and Army Reserve Colonel representing Ohio's 2nd district.",
        committees: [
          "Committee on Ways and Means",
          "House Permanent Select Committee on Intelligence",
        ],
        caucuses: ["GOP Doctors Caucus", "Republican Study Committee"],
        military: {
          rank: "Colonel",
          branch: "Army Reserve",
          accolades: ["Bronze Star", "Soldier's Medal"],
        },
        education: [
          "University of Cincinnati (BA, Psychology)",
          "Scholl College of Podiatric Medicine (DPM)",
        ],
        votingRecord: [
          {
            "bill": "American Rescue Plan Act",
            "vote": "No",
            "result": "Passed",
            "date": "2023-03-11"
          },
          {
            "bill": "For the People Act",
            "vote": "No",
            "result": "Failed",
            "date": "2023-06-22"
          },
          {
            "bill": "John R. Lewis Voting Rights Advancement Act",
            "vote": "No",
            "result": "Failed",
            "date": "2023-08-24"
          },
          {
            "bill": "Build Back Better Act",
            "vote": "No",
            "result": "Failed",
            "date": "2023-11-19"
          }
        ],
        
        electoralHistory: [
          {
            "year": 2022,
            "office": "U.S. Representative",
            "opponent": "Samantha Meadows",
            "votes": 200000,
            "opponentVotes": 100000,
            "result": "Won"
          }
        ],
        values: [
          {
            topic: "Abortion Rights",
            opinion: "Pro-life; supports restrictions on abortion access.",
          },
          {
            topic: "Healthcare",
            opinion: "Opposes ACA; supports market-based healthcare solutions.",
          },
          {
            topic: "Economy and Jobs",
            opinion:
              "Supports tax cuts and deregulation to promote economic growth.",
          },
          {
            topic: "Gun Rights and Control",
            opinion:
              "Strong supporter of Second Amendment rights; opposes gun control.",
          },
          {
            topic: "Climate Change and Energy Policy",
            opinion:
              "Supports an all-of-the-above energy approach, including fossil fuels and renewables.",
          },
          {
            topic: "Education",
            opinion: "Supports school choice and local control over education.",
          },
          {
            topic: "Immigration",
            opinion:
              "Advocates for strong border security and stricter immigration enforcement.",
          },
          {
            topic: "LGBTQ+ Rights",
            opinion:
              "Opposes expansions perceived as infringing on religious freedoms.",
          },
          {
            topic: "Crime and Public Safety",
            opinion: "Supports law enforcement and tough-on-crime policies.",
          },
          {
            topic: "Election Integrity and Voting Rights",
            opinion: "Supports voter ID laws and election security measures.",
          },
        ],
        essay: null,
      },
      {
        id: 5,
        name: "Joyce Beatty",
        party: "Democrat",
        position: "U.S. Representative",
        state: "Ohio",
        district: "3",
        image: "/images/Joyce_Beatty.jpg",
        imageAttribution:
        'By United States Congress - <a rel="nofollow" class="external free" href="https://web.archive.org/web/20150906185852if_/http://beatty.house.gov/sites/beatty.house.gov/files/wysiwyg_uploaded/Headshot%20resized_0.jpg">https://web.archive.org/web/20150906185852if_/http://beatty.house.gov/sites/beatty.house.gov/files/wysiwyg_uploaded/Headshot%20resized_0.jpg</a>, Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=49512154">Link</a>',
        address: "789 Capitol Ave, Columbus, OH",
        email: "joyce.beatty@house.gov",
        website: "https://beatty.house.gov",
        biography:
          "Joyce Beatty represents Ohio's 3rd district and is a long-time advocate for economic and racial equity.",
        committees: ["House Financial Services Committee"],
        caucuses: [
          "Congressional Black Caucus (Chair)",
          "Voting Rights Caucus",
        ],
        military: null,
        education: [
          "Central State University (BA)",
          "Wright State University (Master's)",
        ],
        votingRecord: [
          {
            "bill": "George Floyd Justice in Policing Act",
            "vote": "Yes",
            "result": "Passed",
            "date": "2023-03-03"
          },
          {
            "bill": "For the People Act",
            "vote": "Yes",
            "result": "Passed",
            "date": "2023-01-13"
          },
          {
            "bill": "American Rescue Plan Act",
            "vote": "Yes",
            "result": "Passed",
            "date": "2023-02-27"
          },
          {
            "bill": "Build Back Better Act",
            "vote": "Yes",
            "result": "Passed",
            "date": "2023-11-19"
          }
        ],

        electoralHistory: [
  {
    "year": 2022,
    "office": "U.S. Representative",
    "opponent": "Mark Richardson",
    "votes": 150000,
    "opponentVotes": 50000,
    "result": "Won"
  }
],
        values: [
          {
            topic: "Abortion Rights",
            opinion:
              "Pro-choice; advocates for comprehensive reproductive healthcare access.",
          },
          {
            topic: "Healthcare",
            opinion: "Supports ACA and expanding healthcare access.",
          },
          {
            topic: "Economy and Jobs",
            opinion:
              "Focuses on economic equity; supports raising the minimum wage.",
          },
          {
            topic: "Gun Rights and Control",
            opinion:
              "Supports gun control measures like background checks and assault weapon bans.",
          },
          {
            topic: "Climate Change and Energy Policy",
            opinion:
              "Advocates for renewable energy investments and climate action.",
          },
          {
            topic: "Education",
            opinion:
              "Supports increased public education funding and reducing student loan debt.",
          },
          {
            topic: "Immigration",
            opinion:
              "Supports pathways to citizenship and comprehensive immigration reform.",
          },
          {
            topic: "LGBTQ+ Rights",
            opinion:
              "Strong advocate for LGBTQ+ rights and anti-discrimination protections.",
          },
          {
            topic: "Crime and Public Safety",
            opinion:
              "Supports police reform and addressing systemic racism in policing.",
          },
          {
            topic: "Election Integrity and Voting Rights",
            opinion:
              "Opposes restrictive voting laws; supports expanded access.",
          },
        ],
        essay: null,
      },
      {
        id: 6,
        name: "Jim Jordan",
        party: "Republican",
        position: "U.S. Representative",
        state: "Ohio",
        district: "4",
        since: 2007,
        address: "123 Republican Way, Lima, OH",
        email: "jim.jordan@house.gov",
        website: "https://jordan.house.gov",
        biography:
          "Jim Jordan, a founding member of the Freedom Caucus, has been a vocal advocate for limited government and fiscal responsibility.",
        committees: [
          "Committee on the Judiciary (Chair)",
          "Committee on Oversight and Reform",
        ],
        caucuses: ["House Freedom Caucus", "Republican Study Committee"],
        military: null,
        education: ["University of Wisconsin (BA)", "Capital University (JD)"],
        votingRecord: [
            {
              "bill": "American Rescue Plan Act",
              "vote": "No",
              "result": "Passed",
              "date": "2023-03-11"
            },
            {
              "bill": "For the People Act",
              "vote": "No",
              "result": "Failed",
              "date": "2023-06-22"
            },
            {
              "bill": "John R. Lewis Voting Rights Advancement Act",
              "vote": "No",
              "result": "Failed",
              "date": "2023-08-24"
            },
            {
              "bill": "Build Back Better Act",
              "vote": "No",
              "result": "Failed",
              "date": "2023-11-19"
            }
          ],
          electoralHistory: [
            {
              "year": 2024,
              "office": "U.S. Representative",
              "opponent": "Jeff Sites",
              "votes": 250000,
              "opponentVotes": 100000,
              "result": "Won"
            },
            {
              "year": 2022,
              "office": "U.S. Representative",
              "opponent": "Tamie Wilson",
              "votes": 250000,
              "opponentVotes": 100000,
              "result": "Won"
            },
            {
              "year": 2020,
              "office": "U.S. Representative",
              "opponent": "Shannon Freshour",
              "votes": 250000,
              "opponentVotes": 100000,
              "result": "Won"
            },
            {
              "year": 2018,
              "office": "U.S. Representative",
              "opponent": "Janet Garrett",
              "votes": 250000,
              "opponentVotes": 100000,
              "result": "Won"
            },
            {
              "year": 2016,
              "office": "U.S. Representative",
              "opponent": "Janet Garrett",
              "votes": 250000,
              "opponentVotes": 100000,
              "result": "Won"
            },
            {
              "year": 2014,
              "office": "U.S. Representative",
              "opponent": "Janet Garrett",
              "votes": 250000,
              "opponentVotes": 100000,
              "result": "Won"
            },
            {
              "year": 2012,
              "office": "U.S. Representative",
              "opponent": "Jim Slone",
              "votes": 250000,
              "opponentVotes": 100000,
              "result": "Won"
            },
            {
              "year": 2010,
              "office": "U.S. Representative",
              "opponent": "Doug Litt",
              "votes": 250000,
              "opponentVotes": 100000,
              "result": "Won"
            },
            {
              "year": 2008,
              "office": "U.S. Representative",
              "opponent": "Mike Carroll",
              "votes": 250000,
              "opponentVotes": 100000,
              "result": "Won"
            },
            {
              "year": 2006,
              "office": "U.S. Representative",
              "opponent": "Rick Siferd",
              "votes": 250000,
              "opponentVotes": 100000,
              "result": "Won"
            },
            {
              "year": 2004,
              "office": "Ohio State Senator",
              "opponent": null,
              "votes": 250000,
              "opponentVotes": null,
              "result": "Won"
            },
            {
              "year": 2000,
              "office": "Ohio State Senator",
              "opponent": null,
              "votes": 250000,
              "opponentVotes": null,
              "result": "Won"
            },
            {
              "year": 1998,
              "office": "Ohio State Representative",
              "opponent": null,
              "votes": 250000,
              "opponentVotes": null,
              "result": "Won"
            },
            {
              "year": 1996,
              "office": "Ohio State Representative",
              "opponent": null,
              "votes": 250000,
              "opponentVotes": null,
              "result": "Won"
            },
            {
              "year": 1994,
              "office": "Ohio State Representative",
              "opponent": null,
              "votes": 250000,
              "opponentVotes": null,
              "result": "Won"
            }
          ],
        
        
        values: [
          {
            topic: "Abortion Rights",
            opinion:
              "Pro-life; opposes abortion and federal funding for Planned Parenthood.",
          },
          {
            topic: "Healthcare",
            opinion:
              "Opposes ACA; advocates for market-based healthcare solutions.",
          },
          {
            topic: "Economy and Jobs",
            opinion:
              "Supports tax cuts and deregulation to stimulate economic growth.",
          },
          {
            topic: "Gun Rights and Control",
            opinion: "Defends Second Amendment rights; opposes gun control.",
          },
          {
            topic: "Climate Change and Energy Policy",
            opinion:
              "Skeptical of regulations; supports fossil fuel development.",
          },
          {
            topic: "Education",
            opinion: "Advocates for school choice and local education control.",
          },
          {
            topic: "Immigration",
            opinion:
              "Supports border security and opposes amnesty for undocumented immigrants.",
          },
          {
            topic: "LGBTQ+ Rights",
            opinion: "Opposes same-sex marriage and related expansions.",
          },
          {
            topic: "Crime and Public Safety",
            opinion: "Supports law enforcement and opposes defunding police.",
          },
          {
            topic: "Election Integrity and Voting Rights",
            opinion: "Supports voter ID laws; opposes federal oversight.",
          },
        ],
        essay: null,
      },
      {
        id: 7,
        name: "Bob Latta",
        party: "Republican",
        position: "U.S. Representative",
        state: "Ohio",
        district: "5",
        since: 2007,
        address: "456 Conservative Dr, Bowling Green, OH",
        email: "bob.latta@house.gov",
        website: "https://latta.house.gov",
        biography:
          "Bob Latta represents Ohio's 5th district, advocating for rural development, agriculture, and energy independence.",
        committees: [
          "Energy and Commerce Committee",
          "Subcommittee on Communications and Technology",
        ],
        caucuses: ["Rural Broadband Caucus", "Republican Study Committee"],
        military: null,
        education: [
          "Bowling Green State University (BA)",
          "University of Toledo College of Law (JD)",
        ],
        votingRecord: [
          {
            "bill": "National Defense Authorization Act for Fiscal Year 2024",
            "vote": "Yea",
            "result": "Passed",
            "date": "2024-07-14"
          },
          {
            "bill": "To terminate the requirement imposed by the Director of the Centers for Disease Control and Prevention for proof of COVID-19 vaccination for foreign travelers",
            "vote": "Yea",
            "result": "Passed",
            "date": "2024-02-08"
          }
        ],
        
        electoralHistory: [
          {
            "year": 2024,
            "office": "U.S. Representative",
            "opponent": "Keith Mundy",
            "votes": 251824,
            "opponentVotes": 120738,
            "result": "Won"
          },
          {
            "year": 2022,
            "office": "U.S. Representative",
            "opponent": "Craig Swartz",
            "votes": 235000,
            "opponentVotes": 115000,
            "result": "Won"
          },
          {
            "year": 2020,
            "office": "U.S. Representative",
            "opponent": "Nick Rubando",
            "votes": 260000,
            "opponentVotes": 140000,
            "result": "Won"
          }
        ]
        ,
        values: [
          {
            topic: "Abortion Rights",
            opinion: "Pro-life; supports restrictions on abortion access.",
          },
          {
            topic: "Healthcare",
            opinion: "Opposes ACA; supports free-market healthcare reforms.",
          },
          {
            topic: "Economy and Jobs",
            opinion: "Supports tax cuts and reducing government spending.",
          },
          {
            topic: "Gun Rights and Control",
            opinion:
              "Strong supporter of Second Amendment rights; opposes gun control.",
          },
          {
            topic: "Climate Change and Energy Policy",
            opinion:
              "Skeptical of extensive regulations; supports energy independence.",
          },
          {
            topic: "Education",
            opinion: "Supports local control over education and school choice.",
          },
          {
            topic: "Immigration",
            opinion: "Advocates for stricter enforcement of immigration laws.",
          },
          {
            topic: "LGBTQ+ Rights",
            opinion:
              "Supports traditional marriage definitions; opposes expansions.",
          },
          {
            topic: "Crime and Public Safety",
            opinion: "Strong supporter of law enforcement policies.",
          },
          {
            topic: "Election Integrity and Voting Rights",
            opinion: "Supports voter ID laws and election security measures.",
          },
        ],
        essay: null,
      },
      {
        id: 8,
        name: "Vacant",
        party: "N/A",
        position: "Vacant Seat",
        state: "Ohio",
        district: "6",
        since: null,
        address: null,
        email: null,
        website: null,
        biography: null,
        committees: null,
        caucuses: null,
        military: null,
        education: null,
        electoralHistory: null,
        values: null,
        essay: null,
      },
      {
        id: 9,
        name: "Max Miller",
        party: "Republican",
        position: "U.S. Representative",
        state: "Ohio",
        district: "7",
        since: 2023,
        address: "789 Conservative Ln, Strongsville, OH",
        email: "max.miller@house.gov",
        website: "https://miller.house.gov",
        biography:
          "Max Miller is a Marine veteran and former senior advisor to President Donald Trump, focusing on national security and economic growth.",
        committees: [
          "House Committee on Foreign Affairs",
          "House Committee on Armed Services",
        ],
        caucuses: ["House Freedom Caucus", "Republican Study Committee"],
        military: {
          rank: "Sergeant",
          branch: "U.S. Marine Corps",
          accolades: null,
        },
        education: ["Cleveland State University (BA)"],
        votingRecord: [
          {
            "bill": "National Defense Authorization Act for Fiscal Year 2024",
            "vote": "Yea",
            "result": "Passed",
            "date": "2024-07-14"
          },
          {
            "bill": "To terminate the requirement imposed by the Director of the Centers for Disease Control and Prevention for proof of COVID-19 vaccination for foreign travelers",
            "vote": "Yea",
            "result": "Passed",
            "date": "2024-02-08"
          }
        ],        
        electoralHistory: [
          {
            "year": 2024,
            "office": "U.S. Representative",
            "opponent": "Matthew Diemer",
            "votes": 200962,
            "opponentVotes": 141741,
            "result": "Won"
          },
          {
            "year": 2022,
            "office": "U.S. Representative",
            "opponent": "Matthew Diemer",
            "votes": 195000,
            "opponentVotes": 130000,
            "result": "Won"
          }
        ],
        values: [
          {
            topic: "Abortion Rights",
            opinion: "Pro-life; supports abortion restrictions.",
          },
          {
            topic: "Healthcare",
            opinion:
              "Opposes government-run healthcare; supports free-market solutions.",
          },
          {
            topic: "Economy and Jobs",
            opinion: "Advocates for tax cuts and deregulation to create jobs.",
          },
          {
            topic: "Gun Rights and Control",
            opinion: "Defends Second Amendment rights; opposes gun control.",
          },
          {
            topic: "Climate Change and Energy Policy",
            opinion:
              "Supports energy independence; favors a mix of energy sources.",
          },
          {
            topic: "Education",
            opinion: "Supports school choice and vocational training programs.",
          },
          {
            topic: "Immigration",
            opinion:
              "Favors stronger border security and immigration enforcement.",
          },
          {
            topic: "LGBTQ+ Rights",
            opinion:
              "Supports equal rights but opposes measures seen as infringing religious freedoms.",
          },
          {
            topic: "Crime and Public Safety",
            opinion: "Supports law enforcement and reducing crime.",
          },
          {
            topic: "Election Integrity and Voting Rights",
            opinion: "Advocates for voter ID laws and election security.",
          },
        ],
        essay: null,
      },
      {
        id: 10,
        name: "Warren Davidson",
        party: "Republican",
        position: "U.S. Representative",
        state: "Ohio",
        district: "8",
        since: 2016,
        address: "123 Davidson Rd, Troy, OH",
        email: "warren.davidson@house.gov",
        website: "https://davidson.house.gov",
        biography:
          "Warren Davidson, a veteran and entrepreneur, represents Ohio's 8th district, advocating for constitutional governance and fiscal responsibility.",
        committees: ["Committee on Financial Services"],
        caucuses: ["House Freedom Caucus", "Liberty Caucus"],
        military: {
          rank: "Captain",
          branch: "U.S. Army",
          accolades: ["Army Commendation Medal"],
        },
        education: [
          "United States Military Academy (BS)",
          "University of Notre Dame (MBA)",
        ],
        votingRecord: [
          {
            "bill": "National Defense Authorization Act for Fiscal Year 2024",
            "vote": "Yea",
            "result": "Passed",
            "date": "2024-07-14"
          },
          {
            "bill": "To terminate the requirement imposed by the Director of the Centers for Disease Control and Prevention for proof of COVID-19 vaccination for foreign travelers",
            "vote": "Yea",
            "result": "Passed",
            "date": "2024-02-08"
          }
        ],
        
        electoralHistory: [
          {
            "year": 2024,
            "office": "U.S. Representative",
            "opponent": "Vanessa Enoch",
            "votes": 233439,
            "opponentVotes": 137284,
            "result": "Won"
          },
          {
            "year": 2022,
            "office": "U.S. Representative",
            "opponent": "Vanessa Enoch",
            "votes": 225000,
            "opponentVotes": 130000,
            "result": "Won"
          }
        ],
        values: [
          {
            topic: "Abortion Rights",
            opinion: "Pro-life; supports significant abortion restrictions.",
          },
          {
            topic: "Healthcare",
            opinion: "Opposes ACA; supports market-based healthcare solutions.",
          },
          {
            topic: "Economy and Jobs",
            opinion:
              "Supports tax cuts and deregulation to reduce government spending.",
          },
          {
            topic: "Gun Rights and Control",
            opinion:
              "Strong advocate for Second Amendment rights; opposes gun control.",
          },
          {
            topic: "Climate Change and Energy Policy",
            opinion:
              "Skeptical of regulations; supports fossil fuel development.",
          },
          {
            topic: "Education",
            opinion: "Advocates for school choice and local control.",
          },
          {
            topic: "Immigration",
            opinion: "Supports stricter border security and enforcement.",
          },
          {
            topic: "LGBTQ+ Rights",
            opinion:
              "Supports traditional marriage definitions; opposes expansions.",
          },
          {
            topic: "Crime and Public Safety",
            opinion: "Strong supporter of law enforcement.",
          },
          {
            topic: "Election Integrity and Voting Rights",
            opinion: "Supports voter ID laws and election security measures.",
          },
        ],
        essay: null,
      },
      {
        id: 11,
        name: "Marcy Kaptur",
        party: "Democrat",
        position: "U.S. Representative",
        state: "Ohio",
        district: "9",
        since: 1983,
        address: "789 Progress St, Toledo, OH",
        email: "marcy.kaptur@house.gov",
        website: "https://kaptur.house.gov",
        biography:
          "Marcy Kaptur is the longest-serving woman in the history of the U.S. House, championing workers' rights and economic development.",
        committees: ["Committee on Appropriations (Senior Member)"],
        caucuses: [
          "Congressional Progressive Caucus",
          "House Great Lakes Task Force",
        ],
        military: null,
        education: [
          "University of Wisconsin (BA)",
          "University of Michigan (Master's in Urban Planning)",
        ],
        votingRecord: [
          {
            "bill": "National Defense Authorization Act for Fiscal Year 2024",
            "vote": "Yea",
            "result": "Passed",
            "date": "2024-07-14"
          },
          {
            "bill": "To terminate the requirement imposed by the Director of the Centers for Disease Control and Prevention for proof of COVID-19 vaccination for foreign travelers",
            "vote": "Nay",
            "result": "Passed",
            "date": "2024-02-08"
          }
        ],        
        electoralHistory: [
          {
            "year": 2024,
            "office": "U.S. Representative",
            "opponent": "Derek Merrin",
            "votes": 150000,
            "opponentVotes": 148800,
            "result": "Won"
          },
          {
            "year": 2022,
            "office": "U.S. Representative",
            "opponent": "J.R. Majewski",
            "votes": 160000,
            "opponentVotes": 120000,
            "result": "Won"
          }
        ],
        values: [
          {
            topic: "Abortion Rights",
            opinion: "Pro-choice; supports reproductive healthcare access.",
          },
          {
            topic: "Healthcare",
            opinion: "Supports ACA and expanding healthcare access.",
          },
          {
            topic: "Economy and Jobs",
            opinion:
              "Advocates for workers' rights and reducing income inequality.",
          },
          {
            topic: "Gun Rights and Control",
            opinion:
              "Supports common-sense gun control measures, including background checks.",
          },
          {
            topic: "Climate Change and Energy Policy",
            opinion:
              "Advocates for renewable energy and environmental protection.",
          },
          {
            topic: "Education",
            opinion:
              "Supports increased funding for public education and affordable higher education.",
          },
          {
            topic: "Immigration",
            opinion:
              "Supports comprehensive reform and pathways to citizenship.",
          },
          {
            topic: "LGBTQ+ Rights",
            opinion:
              "Advocates for LGBTQ+ rights and anti-discrimination protections.",
          },
          {
            topic: "Crime and Public Safety",
            opinion: "Supports criminal justice reform and community policing.",
          },
          {
            topic: "Election Integrity and Voting Rights",
            opinion:
              "Opposes restrictive voting laws and supports expanded access.",
          },
        ],
        essay: null,
      },
      {
        id: 12,
        name: "Mike Turner",
        party: "Republican",
        position: "U.S. Representative",
        state: "Ohio",
        district: "10",
        since: 2003,
        address: "123 Defense Ln, Dayton, OH",
        email: "mike.turner@house.gov",
        website: "https://turner.house.gov",
        biography:
          "Mike Turner serves Ohio's 10th district, focusing on national defense, economic development, and innovation.",
        committees: [
          "House Armed Services Committee (Chair)",
          "House Permanent Select Committee on Intelligence",
        ],
        caucuses: ["NATO Parliamentary Assembly"],
        military: null,
        education: [
          "Ohio Northern University (BA)",
          "Case Western Reserve University (JD)",
        ],
        votingRecord: [
          {
            "bill": "National Defense Authorization Act for Fiscal Year 2024",
            "vote": "Yes",
            "result": "Passed",
            "date": "2023-07-14"
          },
          {
            "bill": "Protecting Our Kids Act",
            "vote": "No",
            "result": "Failed",
            "date": "2023-06-08"
          },
          {
            "bill": "Inflation Reduction Act of 2023",
            "vote": "No",
            "result": "Passed",
            "date": "2023-08-12"
          },
          {
            "bill": "John R. Lewis Voting Rights Advancement Act of 2023",
            "vote": "No",
            "result": "Failed",
            "date": "2023-09-20"
          }
        ],
        
        electoralHistory: [
          {
            "year": 2024,
            "office": "U.S. Representative",
            "opponent": "Amy Cox",
            "votes": 180000,
            "opponentVotes": 120000,
            "result": "Won"
          },
          {
            "year": 2022,
            "office": "U.S. Representative",
            "opponent": "Jeffrey A. Hardenbrook",
            "votes": 170000,
            "opponentVotes": 110000,
            "result": "Won"
          }
        ],
        values: [
          {
            topic: "Abortion Rights",
            opinion:
              "Pro-life; supports significant restrictions on abortion access.",
          },
          {
            topic: "Healthcare",
            opinion:
              "Opposes the ACA; supports market-based healthcare solutions.",
          },
          {
            topic: "Economy and Jobs",
            opinion:
              "Advocates for tax cuts and deregulation to promote economic growth.",
          },
          {
            topic: "Gun Rights and Control",
            opinion:
              "Strong supporter of Second Amendment rights; opposes gun control.",
          },
          {
            topic: "Climate Change and Energy Policy",
            opinion:
              "Skeptical of climate regulations; supports an all-of-the-above energy strategy.",
          },
          {
            topic: "Education",
            opinion:
              "Supports school choice, charter schools, and local education control.",
          },
          {
            topic: "Immigration",
            opinion:
              "Advocates for border security; opposes amnesty for undocumented immigrants.",
          },
          {
            topic: "LGBTQ+ Rights",
            opinion:
              "Mixed record; supports some rights but opposes same-sex marriage.",
          },
          {
            topic: "Crime and Public Safety",
            opinion:
              "Strong supporter of law enforcement; opposes defunding the police.",
          },
          {
            topic: "Election Integrity and Voting Rights",
            opinion: "Supports voter ID laws and election integrity measures.",
          },
        ],
        essay: null,
      },
      {
        id: 13,
        name: "Shontel Brown",
        party: "Democrat",
        position: "U.S. Representative",
        state: "Ohio",
        district: "11",
        since: 2021,
        address: "456 Progress Ln, Cleveland, OH",
        email: "shontel.brown@house.gov",
        website: "https://brown.house.gov",
        biography:
          "Shontel Brown represents Ohio's 11th district, advocating for equity, education, and healthcare access.",
        committees: [
          "Committee on Agriculture",
          "Committee on Oversight and Reform",
        ],
        caucuses: ["Congressional Black Caucus", "Progressive Caucus"],
        military: null,
        education: ["Cuyahoga Community College (Associate's Degree)"],
        votingRecord: [
          {
            "bill": "Build Back Better Act",
            "vote": "Yes",
            "result": "Passed",
            "date": "2023-11-19"
          },
          {
            "bill": "George Floyd Justice in Policing Act of 2023",
            "vote": "Yes",
            "result": "Passed",
            "date": "2023-03-03"
          },
          {
            "bill": "For the People Act of 2023",
            "vote": "Yes",
            "result": "Passed",
            "date": "2023-01-13"
          },
          {
            "bill": "American Rescue Plan Act of 2023",
            "vote": "Yes",
            "result": "Passed",
            "date": "2023-02-27"
          }
        ],
        
        electoralHistory: [
          {
            "year": 2024,
            "office": "U.S. Representative",
            "opponent": "Alan Rapoport",
            "votes": 150000,
            "opponentVotes": 50000,
            "result": "Won"
          },
          {
            "year": 2022,
            "office": "U.S. Representative",
            "opponent": "Eric Brewer",
            "votes": 140000,
            "opponentVotes": 60000,
            "result": "Won"
          }
        ]
        ,
        values: [
          {
            topic: "Abortion Rights",
            opinion: "Pro-choice; advocates for women's reproductive rights.",
          },
          {
            topic: "Healthcare",
            opinion:
              "Supports the ACA; explores Medicare for All to expand access.",
          },
          {
            topic: "Economy and Jobs",
            opinion:
              "Supports raising the minimum wage and reducing economic inequality.",
          },
          {
            topic: "Gun Rights and Control",
            opinion:
              "Advocates for universal background checks and assault weapon bans.",
          },
          {
            topic: "Climate Change and Energy Policy",
            opinion:
              "Supports aggressive action on climate change and renewable energy.",
          },
          {
            topic: "Education",
            opinion:
              "Promotes increased public school funding and reducing student loan debt.",
          },
          {
            topic: "Immigration",
            opinion:
              "Supports pathways to citizenship and comprehensive reform.",
          },
          {
            topic: "LGBTQ+ Rights",
            opinion:
              "Strong advocate for LGBTQ+ rights and anti-discrimination protections.",
          },
          {
            topic: "Crime and Public Safety",
            opinion:
              "Supports criminal justice reform and police accountability measures.",
          },
          {
            topic: "Election Integrity and Voting Rights",
            opinion:
              "Opposes restrictive voting laws; supports expanding voting access.",
          },
        ],
        essay: null,
      },
      {
        id: 14,
        name: "Troy Balderson",
        party: "Republican",
        position: "U.S. Representative",
        state: "Ohio",
        district: "12",
        since: 2018,
        address: "789 Liberty Ln, Zanesville, OH",
        email: "troy.balderson@house.gov",
        website: "https://balderson.house.gov",
        biography:
          "Troy Balderson represents Ohio's 12th district, focusing on energy independence and agricultural development.",
        committees: ["House Transportation and Infrastructure Committee"],
        caucuses: ["Republican Main Street Partnership"],
        military: null,
        education: ["Muskingum University (Attended)"],
        votingRecord: [
          {
            "bill": "Tax Cuts and Jobs Act of 2023",
            "vote": "Yes",
            "result": "Passed",
            "date": "2023-12-22"
          },
          {
            "bill": "Second Amendment Protection Act",
            "vote": "Yes",
            "result": "Passed",
            "date": "2023-05-15"
          },
          {
            "bill": "Border Security Enhancement Act",
            "vote": "Yes",
            "result": "Passed",
            "date": "2023-06-10"
          },
          {
            "bill": "Repeal of the Affordable Care Act",
            "vote": "Yes",
            "result": "Failed",
            "date": "2023-07-20"
          }
        ],        
        electoralHistory: [
          {
            "year": 2024,
            "office": "U.S. Representative",
            "opponent": "Jerrad Christian",
            "votes": 160000,
            "opponentVotes": 100000,
            "result": "Won"
          },
          {
            "year": 2022,
            "office": "U.S. Representative",
            "opponent": "Alaina Shearer",
            "votes": 150000,
            "opponentVotes": 90000,
            "result": "Won"
          }
        ]
        ,
        values: [
          {
            topic: "Abortion Rights",
            opinion:
              "Pro-life; supports legislation restricting abortion access.",
          },
          {
            topic: "Healthcare",
            opinion:
              "Opposes the ACA; supports free-market healthcare reforms.",
          },
          {
            topic: "Economy and Jobs",
            opinion: "Advocates for tax cuts and small business support.",
          },
          {
            topic: "Gun Rights and Control",
            opinion:
              "Strong supporter of Second Amendment rights; opposes gun control.",
          },
          {
            topic: "Climate Change and Energy Policy",
            opinion:
              "Supports all-of-the-above energy policies, including fossil fuels.",
          },
          {
            topic: "Education",
            opinion:
              "Supports school choice and local control over education policies.",
          },
          {
            topic: "Immigration",
            opinion: "Advocates for stronger border security; opposes amnesty.",
          },
          {
            topic: "LGBTQ+ Rights",
            opinion:
              "Conservative stance; opposes expansions such as the Equality Act.",
          },
          {
            topic: "Crime and Public Safety",
            opinion: "Supports law enforcement and opposes police defunding.",
          },
          {
            topic: "Election Integrity and Voting Rights",
            opinion:
              "Supports voter ID laws and other election integrity measures.",
          },
        ],
        essay: null,
      },
      {
        id: 15,
        name: "Emilia Sykes",
        party: "Democrat",
        position: "U.S. Representative",
        state: "Ohio",
        district: "13",
        since: 2023,
        address: "123 Unity St, Akron, OH",
        email: "emilia.sykes@house.gov",
        website: "https://sykes.house.gov",
        biography:
          "Emilia Sykes represents Ohio's 13th district, focusing on healthcare reform and economic equity.",
        committees: ["House Committee on Transportation and Infrastructure"],
        caucuses: ["Congressional Progressive Caucus"],
        military: null,
        education: ["Kent State University (BA)", "University of Florida (JD)"],
        votingRecord: [
          {
            "bill": "Women's Health Protection Act of 2023",
            "vote": "Yes",
            "result": "Passed",
            "date": "2023-05-28"
          },
          {
            "bill": "Equality Act",
            "vote": "Yes",
            "result": "Passed",
            "date": "2023-02-25"
          },
          {
            "bill": "Infrastructure Investment and Jobs Act",
            "vote": "Yes",
            "result": "Passed",
            "date": "2023-08-10"
          },
          {
            "bill": "Climate Action Now Act",
            "vote": "Yes",
            "result": "Passed",
            "date": "2023-09-15"
          }
        ],        
        electoralHistory: [
          {
            "year": 2024,
            "office": "U.S. Representative",
            "opponent": "Kevin Coughlin",
            "votes": 140000,
            "opponentVotes": 120000,
            "result": "Won"
          },
          {
            "year": 2022,
            "office": "U.S. Representative",
            "opponent": "Madison Gesiotto Gilbert",
            "votes": 130000,
            "opponentVotes": 110000,
            "result": "Won"
          }
        ],
        values: [
          {
            topic: "Abortion Rights",
            opinion:
              "Pro-choice; advocates for access to reproductive healthcare.",
          },
          {
            topic: "Healthcare",
            opinion:
              "Supports the ACA; emphasizes mental health and expanded access.",
          },
          {
            topic: "Economy and Jobs",
            opinion:
              "Supports raising the minimum wage and reducing economic inequality.",
          },
          {
            topic: "Gun Rights and Control",
            opinion:
              "Advocates for universal background checks and red flag laws.",
          },
          {
            topic: "Climate Change and Energy Policy",
            opinion: "Supports renewable energy and action on climate change.",
          },
          {
            topic: "Education",
            opinion:
              "Promotes public school funding and reducing student loan debt.",
          },
          {
            topic: "Immigration",
            opinion:
              "Supports comprehensive reform and pathways to citizenship.",
          },
          {
            topic: "LGBTQ+ Rights",
            opinion:
              "Strong supporter of LGBTQ+ rights and equality protections.",
          },
          {
            topic: "Crime and Public Safety",
            opinion: "Supports police reform and addressing systemic racism.",
          },
          {
            topic: "Election Integrity and Voting Rights",
            opinion:
              "Opposes restrictive laws; supports expanding voting access.",
          },
        ],
        essay: null,
      },
      {
        id: 16,
        name: "David Joyce",
        party: "Republican",
        position: "U.S. Representative",
        state: "Ohio",
        image: "/images/David_Joyce.jpg",
        imageAttribution: 
            'By <a rel="nofollow" class="external text" href="http://joyce.house.gov//images/user_images/DaveJoyceheadshot.jpg">United States Congress</a> - <a rel="nofollow" class="external text" href="http://joyce.house.gov//images/user_images/DaveJoyceheadshot.jpg">Dave Joyce headshot</a>, Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=25337593">Link</a>',
        district: "14",
        since: 2013,
        address: "456 Justice Rd, Painesville, OH",
        email: "david.joyce@house.gov",
        website: "https://joyce.house.gov",
        biography:
          "David Joyce represents Ohio's 14th district, focusing on bipartisan governance and environmental conservation.",
        committees: ["House Appropriations Committee"],
        caucuses: ["Problem Solvers Caucus"],
        military: null,
        education: ["University of Dayton (BA, JD)"],
        votingRecord: [
          {
            bill: "Affordable Childcare Act",
            vote: "Yes",
            result: "Passed",
            date: "2023-06-12",
          },
          {
            bill: "Clean Energy Jobs Act",
            vote: "Yes",
            result: "Failed",
            date: "2023-07-15",
          },
          {
            bill: "Tax Reform Act 2023",
            vote: "No",
            result: "Passed",
            date: "2023-08-21",
          },
          {
            bill: "Healthcare Accessibility Bill",
            vote: "Yes",
            result: "Passed",
            date: "2023-09-10",
          },
        ],

        electoralHistory: [
          {
            year: 2022,
            office: "Attorney General",
            opponent: "Jeffrey A. Crossman",
            votes: 2484753,
            opponentVotes: 1965789,
            result: "Won",
          },
          {
            year: 2018,
            office: "Attorney General",
            opponent: "Steve Dettelbach",
            votes: 2201994,
            opponentVotes: 2001368,
            result: "Won",
          },
        ],

        values: [
          {
            topic: "Abortion Rights",
            opinion: "Pro-life; opposes abortion rights.",
          },
          {
            topic: "Healthcare",
            opinion:
              "Opposes the ACA; supported some bipartisan healthcare initiatives.",
          },
          {
            topic: "Economy and Jobs",
            opinion:
              "Supports workforce development and business-friendly policies.",
          },
          {
            topic: "Gun Rights and Control",
            opinion:
              "Defends Second Amendment rights; opposes stricter gun laws.",
          },
          {
            topic: "Climate Change and Energy Policy",
            opinion:
              "Supports environmental conservation but avoids aggressive regulations.",
          },
          {
            topic: "Education",
            opinion: "Promotes STEM education and local control over schools.",
          },
          {
            topic: "Immigration",
            opinion:
              "Supports stricter refugee scrutiny and visa waiver improvements.",
          },
          {
            topic: "LGBTQ+ Rights",
            opinion: "Mixed record; voted for the Respect for Marriage Act.",
          },
          {
            topic: "Crime and Public Safety",
            opinion:
              "Focuses on addressing the opioid crisis and law enforcement.",
          },
          {
            topic: "Election Integrity and Voting Rights",
            opinion:
              "Supports measures for election security; voted for January 6th inquiry.",
          },
        ],
        essay: null,
      },
      {
        id: 17,
        name: "Mike Carey",
        party: "Republican",
        position: "U.S. Representative",
        state: "Ohio",
        district: "15",
        since: 2021,
        address: "789 Growth Blvd, Grove City, OH",
        email: "mike.carey@house.gov",
        website: "https://carey.house.gov",
        biography:
          "Mike Carey is a business leader representing Ohio's 15th district, focusing on energy policy and economic growth.",
        committees: ["House Energy and Commerce Committee"],
        caucuses: ["House Energy Action Team"],
        military: null,
        education: ["Ohio State University (BA)"],
        votingRecord: [
          {
            "bill": "Infrastructure Investment and Jobs Act",
            "vote": "No",
            "result": "Passed",
            "date": "2021-11-05"
          },
          {
            "bill": "Build Back Better Act",
            "vote": "No",
            "result": "Failed",
            "date": "2021-11-19"
          }
        ],
        
        electoralHistory: [
          {
            "year": 2022,
            "office": "U.S. Representative",
            "opponent": "Gary Josephson",
            "votes": 200000,
            "opponentVotes": 150000,
            "result": "Won"
          },
          {
            "year": 2021,
            "office": "U.S. Representative (Special Election)",
            "opponent": "Allison Russo",
            "votes": 105000,
            "opponentVotes": 85000,
            "result": "Won"
          }
        ],
        
        values: [
          {
            topic: "Abortion Rights",
            opinion: "Pro-life; opposes abortion rights.",
          },
          {
            topic: "Healthcare",
            opinion:
              "Opposes the ACA; advocates for free-market healthcare solutions.",
          },
          {
            topic: "Economy and Jobs",
            opinion: "Supports tax cuts and deregulation for job growth.",
          },
          {
            topic: "Gun Rights and Control",
            opinion: "Strong supporter of Second Amendment rights.",
          },
          {
            topic: "Climate Change and Energy Policy",
            opinion:
              "Supports fossil fuel development; skeptical of stringent policies.",
          },
          {
            topic: "Education",
            opinion: "Advocates for school choice and local education control.",
          },
          {
            topic: "Immigration",
            opinion: "Favors strict border security and opposes amnesty.",
          },
          {
            topic: "LGBTQ+ Rights",
            opinion:
              "Conservative stance; not a strong advocate for expansion.",
          },
          {
            topic: "Crime and Public Safety",
            opinion: "Supports law enforcement and opposes defunding police.",
          },
          {
            topic: "Election Integrity and Voting Rights",
            opinion: "Supports voter ID laws and election integrity.",
          },
        ],
        essay: null,
      },
    ],
  },
  state: {
    governor: {
      id: 18,
      name: "Mike DeWine",
      party: "Republican",
      position: "Governor",
      state: "Ohio",
      address: "77 S High St, Columbus, OH",
      email: "governor.dewine@ohio.gov",
      website: "https://governor.ohio.gov",
      biography:
        "Mike DeWine is the 70th Governor of Ohio, committed to improving education and public safety.",
      committees: null,
      caucuses: null,
      military: null,
      education: [
        "Miami University (BA)",
        "Ohio Northern University College of Law (JD)",
      ],
      electoralHistory: [
        {
          "year": 2022,
          "office": "Governor of Ohio",
          "opponent": "Nan Whaley",
          "votes": 2200000,
          "opponentVotes": 1500000,
          "result": "Won"
        },
        {
          "year": 2018,
          "office": "Governor of Ohio",
          "opponent": "Richard Cordray",
          "votes": 2100000,
          "opponentVotes": 1900000,
          "result": "Won"
        }
      ],
      values: [
        {
          topic: "Abortion Rights",
          opinion:
            "Pro-life; signed the Heartbeat Bill banning most abortions.",
        },
        {
          topic: "Healthcare",
          opinion: "Supports Medicaid expansion; addresses the opioid crisis.",
        },
        {
          topic: "Economy and Jobs",
          opinion: "Focuses on workforce development and job creation.",
        },
        {
          topic: "Gun Rights and Control",
          opinion:
            "Supports gun rights but advocates for red flag laws and expanded background checks.",
        },
        {
          topic: "Climate Change and Energy Policy",
          opinion: "Supports an all-of-the-above energy strategy.",
        },
        {
          topic: "Education",
          opinion:
            "Increased funding for early childhood education and technical programs.",
        },
        {
          topic: "Immigration",
          opinion: "Supports legal immigration and cautious refugee policies.",
        },
        {
          topic: "LGBTQ+ Rights",
          opinion:
            "Opposes same-sex marriage; supports some anti-discrimination measures.",
        },
        {
          topic: "Crime and Public Safety",
          opinion:
            "Focuses on drug addiction reforms and law enforcement training.",
        },
        {
          topic: "Election Integrity and Voting Rights",
          opinion:
            "Confident in Ohio’s election system; opposes federal overreach.",
        },
      ],
      essay: null,
    },
    lieutenantGovernor: {
      id: 19,
      name: "Jon Husted",
      party: "Republican",
      position: "Lieutenant Governor",
      state: "Ohio",
      address: "77 S High St, Columbus, OH",
      email: "jon.husted@ltgov.ohio.gov",
      website: "https://ltgovernor.ohio.gov",
      biography:
        "Jon Husted is Ohio's Lieutenant Governor, focusing on workforce development and technology innovation.",
      committees: null,
      caucuses: null,
      military: null,
      education: ["University of Dayton (BA, Master of Public Administration)"],
      electoralHistory: [
        {
          "year": 2022,
          "office": "Lieutenant Governor of Ohio",
          "opponent": "Cheryl Stephens",
          "votes": 2200000,
          "opponentVotes": 1500000,
          "result": "Won"
        },
        {
          "year": 2018,
          "office": "Lieutenant Governor of Ohio",
          "opponent": "Betty Sutton",
          "votes": 2100000,
          "opponentVotes": 1900000,
          "result": "Won"
        }
      ],
      values: [
        {
          topic: "Abortion Rights",
          opinion: "Pro-life; supports restricting abortion access.",
        },
        {
          topic: "Healthcare",
          opinion: "Advocates for market-based reforms and cost reductions.",
        },
        {
          topic: "Economy and Jobs",
          opinion: "Focuses on workforce development and business attraction.",
        },
        {
          topic: "Gun Rights and Control",
          opinion: "Supports gun rights and opposes restrictive legislation.",
        },
        {
          topic: "Climate Change and Energy Policy",
          opinion:
            "Favors a balanced energy policy including renewables and fossil fuels.",
        },
        {
          topic: "Education",
          opinion:
            "Promotes career and technical education; supports school choice.",
        },
        {
          topic: "Immigration",
          opinion: "Emphasizes secure borders and legal immigration.",
        },
        {
          topic: "LGBTQ+ Rights",
          opinion:
            "Aligns with conservative stances; not a strong advocate for expansion.",
        },
        {
          topic: "Crime and Public Safety",
          opinion:
            "Supports law enforcement and improving public safety initiatives.",
        },
        {
          topic: "Election Integrity and Voting Rights",
          opinion:
            "Implemented measures for election security as Secretary of State.",
        },
      ],
      essay: null,
    },
    attorneyGeneral: {
      id: 20,
      name: "Dave Yost",
      party: "Republican",
      position: "Attorney General",
      state: "Ohio",
      address: "30 E Broad St, Columbus, OH",
      email: "dave.yost@ohioattorneygeneral.gov",
      website: "https://www.ohioattorneygeneral.gov",
      biography:
        "Dave Yost is Ohio's Attorney General, known for tackling corruption and protecting consumers.",
      committees: null,
      caucuses: null,
      military: null,
      education: [
        "Ohio State University (BA)",
        "Capital University Law School (JD)",
      ],
      electoralHistory: [
        {
          "year": 2022,
          "office": "Attorney General of Ohio",
          "opponent": "Jeff Crossman",
          "votes": 2300000,
          "opponentVotes": 1600000,
          "result": "Won"
        },
        {
          "year": 2018,
          "office": "Attorney General of Ohio",
          "opponent": "Steve Dettelbach",
          "votes": 2200000,
          "opponentVotes": 2000000,
          "result": "Won"
        }
      ],
      
      values: [
        {
          topic: "Abortion Rights",
          opinion: "Pro-life; defends restrictions on abortion access.",
        },
        {
          topic: "Healthcare",
          opinion:
            "Critical of the ACA; supports state-level healthcare solutions.",
        },
        {
          topic: "Economy and Jobs",
          opinion:
            "Advocates for reducing regulations and supporting tax cuts.",
        },
        {
          topic: "Gun Rights and Control",
          opinion: "Strong supporter of Second Amendment rights.",
        },
        {
          topic: "Climate Change and Energy Policy",
          opinion: "Balances economic interests with environmental concerns.",
        },
        {
          topic: "Education",
          opinion:
            "Supports school choice and accountability in education spending.",
        },
        {
          topic: "Immigration",
          opinion: "Favors strict enforcement and opposes sanctuary cities.",
        },
        {
          topic: "LGBTQ+ Rights",
          opinion:
            "Opposes expansions of LGBTQ+ rights; defends traditional marriage definitions.",
        },
        {
          topic: "Crime and Public Safety",
          opinion:
            "Prioritizes fighting human trafficking and the opioid crisis.",
        },
        {
          topic: "Election Integrity and Voting Rights",
          opinion: "Supports voter ID laws and election security measures.",
        },
      ],
      essay: null,
    },
    secretaryOfState: {
      id: 21,
      name: "Frank LaRose",
      party: "Republican",
      position: "Secretary of State",
      state: "Ohio",
      address: "180 E Broad St, Columbus, OH",
      email: "frank.larose@sos.ohio.gov",
      website: "https://www.sos.state.oh.us",
      biography:
        "Frank LaRose serves as Ohio's Secretary of State, focusing on secure and accessible elections.",
      committees: null,
      caucuses: null,
      military: {
        rank: "Sergeant",
        branch: "U.S. Army Special Forces",
        accolades: ["Bronze Star"],
      },
      education: ["Ohio State University (BA, Consumer Affairs)"],
      electoralHistory: [
        {
          "year": 2022,
          "office": "Secretary of State of Ohio",
          "opponent": "Chelsea Clark",
          "votes": 2400000,
          "opponentVotes": 1700000,
          "result": "Won"
        },
        {
          "year": 2018,
          "office": "Secretary of State of Ohio",
          "opponent": "Kathleen Clyde",
          "votes": 2300000,
          "opponentVotes": 2100000,
          "result": "Won"
        }
      ],      
      values: [
        {
          topic: "Abortion Rights",
          opinion: "Pro-life; aligns with conservative platforms.",
        },
        {
          topic: "Healthcare",
          opinion:
            "Focuses on state-level duties, minimal advocacy for reforms.",
        },
        {
          topic: "Economy and Jobs",
          opinion: "Streamlines business processes to encourage job creation.",
        },
        {
          topic: "Gun Rights and Control",
          opinion: "Supports gun rights; opposes restrictive legislation.",
        },
        {
          topic: "Climate Change and Energy Policy",
          opinion: "Minimal involvement in climate policy discussions.",
        },
        {
          topic: "Education",
          opinion:
            "Promotes civic education; limited broader education involvement.",
        },
        {
          topic: "Immigration",
          opinion: "Minimal focus on immigration issues.",
        },
        {
          topic: "LGBTQ+ Rights",
          opinion:
            "Aligns with conservative positions; not a strong advocate for expansion.",
        },
        {
          topic: "Crime and Public Safety",
          opinion: "Enhances election security as a public safety priority.",
        },
        {
          topic: "Election Integrity and Voting Rights",
          opinion: "Implements voter ID laws and purging inactive voters.",
        },
      ],
      essay: null,
    },
    treasurer: {
      id: 22,
      name: "Robert Sprague",
      party: "Republican",
      position: "State Treasurer",
      state: "Ohio",
      address: "30 E Broad St, Columbus, OH",
      email: "robert.sprague@ohiotreasurer.gov",
      website: "https://www.ohiotreasurer.gov",
      biography:
        "Robert Sprague is Ohio's Treasurer, ensuring fiscal responsibility and innovative financial solutions.",
      committees: null,
      caucuses: null,
      military: null,
      education: ["Duke University (MBA)"],
      electoralHistory: [
        {
          "year": 2022,
          "office": "Treasurer of Ohio",
          "opponent": "Scott Schertzer",
          "votes": 2350000,
          "opponentVotes": 1650000,
          "result": "Won"
        },
        {
          "year": 2018,
          "office": "Treasurer of Ohio",
          "opponent": "Rob Richardson",
          "votes": 2250000,
          "opponentVotes": 2050000,
          "result": "Won"
        }
      ],
    
      values: [
        {
          topic: "Abortion Rights",
          opinion:
            "Pro-life; supported anti-abortion legislation in the legislature.",
        },
        {
          topic: "Healthcare",
          opinion:
            "Focuses on financial management of Medicaid and healthcare funds.",
        },
        {
          topic: "Economy and Jobs",
          opinion: "Manages state investments to ensure stability and growth.",
        },
        {
          topic: "Gun Rights and Control",
          opinion: "Supports Second Amendment rights; opposes gun control.",
        },
        {
          topic: "Climate Change and Energy Policy",
          opinion: "Minimal involvement in climate or energy policies.",
        },
        {
          topic: "Education",
          opinion:
            "Focused on financial management, not central in education policy.",
        },
        {
          topic: "Immigration",
          opinion: "Minimal focus on immigration issues.",
        },
        {
          topic: "LGBTQ+ Rights",
          opinion:
            "Aligns with conservative stances; not involved in expansions.",
        },
        {
          topic: "Crime and Public Safety",
          opinion:
            "Supports financial strategies for opioid crisis interventions.",
        },
        {
          topic: "Election Integrity and Voting Rights",
          opinion:
            "Focuses on financial management rather than election policy.",
        },
      ],
      essay: null,
    },
    auditor: {
      id: 23,
      name: "Keith Faber",
      party: "Republican",
      position: "State Auditor",
      state: "Ohio",
      address: "88 E Broad St, Columbus, OH",
      email: "keith.faber@ohioauditor.gov",
      website: "https://www.ohioauditor.gov",
      biography:
        "Keith Faber is Ohio's Auditor, ensuring government accountability and efficiency.",
      committees: null,
      caucuses: null,
      military: null,
      education: [
        "Ohio State University (BA)",
        "University of Dayton School of Law (JD)",
      ],
      electoralHistory: [
        {
          "year": 2022,
          "office": "Auditor of Ohio",
          "opponent": "Taylor Sappington",
          "votes": 2320000,
          "opponentVotes": 1680000,
          "result": "Won"
        },
        {
          "year": 2018,
          "office": "Auditor of Ohio",
          "opponent": "Zack Space",
          "votes": 2200000,
          "opponentVotes": 2000000,
          "result": "Won"
        }
      ],
      
      values: [
        {
          topic: "Abortion Rights",
          opinion: "Pro-life; consistently supports anti-abortion legislation.",
        },
        {
          topic: "Healthcare",
          opinion:
            "Advocates for Medicaid reform to reduce costs and improve efficiency.",
        },
        {
          topic: "Economy and Jobs",
          opinion: "Supports tax cuts and reduced government spending.",
        },
        {
          topic: "Gun Rights and Control",
          opinion: "Strong supporter of gun rights; opposes restrictions.",
        },
        {
          topic: "Climate Change and Energy Policy",
          opinion:
            "Favors traditional energy sources; skeptical of regulations.",
        },
        {
          topic: "Education",
          opinion:
            "Supports school choice and competition in education systems.",
        },
        {
          topic: "Immigration",
          opinion: "Advocates for strict enforcement and secure borders.",
        },
        {
          topic: "LGBTQ+ Rights",
          opinion:
            "Opposes expanding LGBTQ+ rights; aligns with conservative views.",
        },
        {
          topic: "Crime and Public Safety",
          opinion: "Supports reforms to reduce recidivism and enhance safety.",
        },
        {
          topic: "Election Integrity and Voting Rights",
          opinion: "Advocates for voter ID laws and election security.",
        },
      ],
      essay: null,
    },
  },
};

export default politicians;
