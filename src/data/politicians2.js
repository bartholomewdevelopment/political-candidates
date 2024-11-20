const politicians = {
    federal: {
      senators: [
        {
          id: 1,
          name: "Bernie Moreno",
          party: "Republican",
          position: "U.S. Senator",
          since: 2024,
          image: "/images/Bernie_Moreno.jpg",
          imageAttribution:
            'By <a rel="nofollow" class="external text" href="https://www.flickr.com/people/22007612@N05">Gage Skidmore</a> from Surprise, AZ, United States of America - <a rel="nofollow" class="external text" href="https://www.flickr.com/photos/gageskidmore/53069107164/">Bernie Moreno</a>, <a href="https://creativecommons.org/licenses/by-sa/2.0" title="Creative Commons Attribution-Share Alike 2.0">CC BY-SA 2.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=135037130">Link</a>',
          address: "500 E Main St, Columbus, OH",
          email: "bernie.moreno@senate.gov",
          website: "https://www.moreno.senate.gov",
          votingResults: ["Elected 2024"],
          laws: ["Healthcare Modernization Act", "Tax Reform Bill"],
          values: "Economic growth, healthcare reform, education improvement",
          religion: "Christian",
          articles: [
            {
              title: "Bernie Moreno's First 100 Days",
              url: "https://example.com/bernie-moreno-first-100-days",
            },
            {
              title: "Moreno Pushes for Tax Reform",
              url: "https://example.com/bernie-moreno-tax-reform",
            },
          ],
          essay:
            "As your Senator, I pledge to bring economic opportunity to Ohio, ensure access to quality healthcare, and reform the education system to meet the needs of every family.",
        },
        {
          id: 2,
          name: "J.D. Vance",
          party: "Republican",
          position: "U.S. Senator",
          since: 2023,
          image: "/images/JD_Vance.jpg",
          imageAttribution:
            'By United States Congress - <a rel="nofollow" class="external free" href="https://www.vance.senate.gov/wp-content/uploads/2023/01/Senator_Vance_Portrait.jpeg">https://www.vance.senate.gov/wp-content/uploads/2023/01/Senator_Vance_Portrait.jpeg</a>, Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=128111508">Link</a>',
          address: "456 Senate Ln, Columbus, OH",
          email: "jd.vance@senate.gov",
          website: "https://www.vance.senate.gov",
          votingResults: ["Elected 2022"],
          laws: ["Tax Cuts and Jobs Act"],
          values: "Family, Freedom, Prosperity",
          religion: "Christian",
          articles: [
            { title: "Vance's Tax Plan", url: "https://example.com" },
          ],
          essay: "I will uphold family values and reduce taxes for Ohioans.",
        },
      ],
      houseRepresentatives: [
        {
            id: 3,
            name: "Greg Landsman",
            party: "Democrat",
            state: "Ohio",
            position: "U.S. Representative",
            district: "1",
            since: 2023,
            image: "/images/Greg_Landsman.jpg",
            imageAttribution:
              'By United States Congress - <a rel="nofollow" class="external free" href="https://commons.wikimedia.org/w/index.php?curid=128111508">https://commons.wikimedia.org/w/index.php?curid=128111508</a>, Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=128111508">Link</a>',
            address: "123 Capitol St, Cincinnati, OH",
            email: "greg.landsman@house.gov",
            website: "https://landsman.house.gov",
            biography: `Representative Greg Landsman is a father and husband who is proud to call Southwest Ohio home.

            Before joining the U.S. House of Representatives in 2023, Greg served on the Cincinnati City Council for five years where he led investments in public safety and core services. Greg also led the effort to establish the City of Cincinnati’s first-ever Office of Ethics and Good Government as well as the Balanced Development Scorecard to increase trust in local government and transparency in the development process.
            
            Greg has spent his entire career advocating for children and families, especially those most marginalized. Prior to his time in elected office, Greg was a public school teacher and worked in education advocacy as the Executive Director of the Strive Partnership.
            
            Greg also served as the Director of Faith-based and Community Initiatives under former Ohio Governor Ted Strickland. There, he led Ohio’s efforts to help local churches and synagogues provide education and food programs in their communities.
            
            A pragmatic leader, Greg has a long history of working with broad, bipartisan coalitions to get good, meaningful things done. In 2016, Greg led a successful ballot measure to pass the Cincinnati Preschool Promise, a program which provides two years of quality preschool education for every three- and four-year-old in Cincinnati. In 2018, he built a coalition of Democrats, Republicans, labor organizations, business leaders, and community members to pass the largest investment in transportation and infrastructure in Hamilton County’s history.
            
            Greg earned a bachelor’s degree in Economics and Political Science from Ohio University and a master’s degree in Theology from Harvard University. Greg and his wife, Sarah, live in Cincinnati with their two children, Maddie and Elijah.`,
            
            committees: [
                "House Committee on Small Business",
                "House Committee on Veterans’ Affairs",
                "Subcommittee on Economic Growth, Tax, and Capital Access (Ranking Member)",
                "Subcommittee on Rural Development, Energy, and Supply Chains",
                "Subcommittee on Health",
                "Subcommittee on Technology Modernization"
              ],
              caucuses: [
                "New Democrat Coalition",
                "Congressional Labor Caucus",
                "House Pro-Choice Caucus",
                "House Gun Violence Prevention Task Force",
                "Congressional Ukraine Caucus",
                "Protect Social Security Caucus",
                "Congressional Equality Caucus",
                "Congressional Diabetes Caucus",
                "Fire Services Caucus",
                "Bipartisan Mental Health and Substance Use Disorder Task Force",
                "India and Indian Americans Caucus",
                "Congressional Dads Caucus",
                "Future Forum Caucus",
                "Ohio River Basin Congressional Caucus",
                "Voting Rights Caucus",
                "Congressional Nepal Caucus",
                "Bipartisan Congressional Pre-K and Child Care Caucus",
                "Abraham Accords Caucus",
                "Congressional Colorectal Cancer Caucus",
                "Congressional Arts Caucus",
                "Black Jewish Relations Caucus",
                "Congressional Epilepsy Caucus"
              ],
              
            votingResults: [
              {
                bill: "Affordable Childcare Act",
                vote: "Yes",
                date: "2023-06-12",
              },
              {
                bill: "Clean Energy Jobs Act",
                vote: "Yes",
                date: "2023-07-15",
              },
              {
                bill: "Tax Reform Act 2023",
                vote: "No",
                date: "2023-08-21",
              },
              {
                bill: "Healthcare Accessibility Bill",
                vote: "Yes",
                date: "2023-09-10",
              },
            ],
            articles: [
              {
                title: "Greg Landsman Advocates for Clean Energy in Ohio",
                url: "https://example.com/landsman-clean-energy",
              },
              {
                title: "Affordable Childcare Act Gains Support in Congress",
                url: "https://example.com/landsman-childcare-act",
              },
              {
                title: "Landsman Votes Against Controversial Tax Reform",
                url: "https://example.com/landsman-tax-reform",
              },
            ],
            values: "Economic growth, education reform, clean energy.",
            essay:
              "I am committed to building a brighter future for Ohio by focusing on economic opportunities, accessible education, and sustainable energy solutions.",
          },
          
        {
          id: 4,
          district: "2",
          name: "Brad Wenstrup",
          party: "Republican",
          position: "U.S. Representative",
          since: 2013,
          image: "/images/Brad_Wenstrup.jpg",
          imageAttribution:
  'By United States Congress - <a rel="nofollow" class="external free" href="https://commons.wikimedia.org/w/index.php?curid=39211167">https://commons.wikimedia.org/w/index.php?curid=39211167</a>, Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=39211167">Link</a>',

          address: "Cincinnati, OH",
          email: "brad.wenstrup@house.gov",
          website: "https://wenstrup.house.gov",
          votingResults: ["Elected 2012", "Re-elected multiple times"],
          military: {
            rank: "Colonel",
            branch: "Army Reserve",
            accolades: ["Bronze Star", "Soldier's Medal"],
          },
          values: "Veterans' Support, National Defense, Health Reform",
          education: [
            "University of Cincinnati (BA, Psychology)",
            "Scholl College of Podiatric Medicine (DPM)",
          ],
          committees: [
            "Committee on Ways & Means",
            "Subcommittee on Oversight",
            "Subcommittee on Worker & Family Support",
            "House Permanent Select Committee on Intelligence",
          ],
          caucuses: [
            "Republican Study Committee",
            "GOP Doctors Caucus",
            "Air Cargo Caucus",
          ],
          personal: {
            spouse: "Monica Wenstrup",
            children: 2,
            religion: "Roman Catholic",
          },
        },
        { id: 5, district: "3", name: "Joyce Beatty", party: "Democrat" },
        { id: 6, district: "4", name: "Jim Jordan", party: "Republican" },
        { id: 7, district: "5", name: "Bob Latta", party: "Republican" },
        { id: 8, district: "6", name: "Vacant", party: "N/A" },
        { id: 9, district: "7", name: "Max Miller", party: "Republican" },
        { id: 10, district: "8", name: "Warren Davidson", party: "Republican" },
        { id: 11, district: "9", name: "Marcy Kaptur", party: "Democrat" },
        { id: 12, district: "10", name: "Mike Turner", party: "Republican" },
        { id: 13, district: "11", name: "Shontel Brown", party: "Democrat" },
        { id: 14, district: "12", name: "Troy Balderson", party: "Republican" },
        { id: 15, district: "13", name: "Emilia Sykes", party: "Democrat" },
        { id: 16, district: "14", name: "David Joyce", party: "Republican" },
        { id: 17, district: "15", name: "Mike Carey", party: "Republican" },
      ],
    },
    state: {
      governor: {
        id: 18,
        name: "Mike DeWine",
        party: "Republican",
        position: "Governor",
        since: 2019,
        image: "/images/Mike_Dewine.jpg",
        imageAttribution:
          'By Vivien McClain Photography - <a href="https://governor.ohio.gov/wps/portal/gov/governor/administration/governor" rel="nofollow" class="external free">https://governor.ohio.gov/wps/portal/gov/governor/administration/governor</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=80448877">Link</a>',
        address: "77 Governor Dr, Columbus, OH",
        email: "governor.dewine@ohio.gov",
        website: "https://www.governor.ohio.gov",
        votingResults: ["Elected 2018", "Re-elected 2022"],
        laws: ["Education Reform Act"],
        values: "Leadership, Safety, Education",
        religion: "Catholic",
        articles: [
          {
            title: "DeWine's Leadership During COVID",
            url: "https://example.com",
          },
        ],
        essay: "I pledge to ensure the safety and prosperity of Ohioans.",
      },
      lieutenantGovernor: {
        id: 19,
        name: "Jon Husted",
        party: "Republican",
        position: "Lieutenant Governor",
        since: 2019,
      },
      attorneyGeneral: {
        id: 20,
        name: "Dave Yost",
        party: "Republican",
        position: "Attorney General",
        since: 2019,
      },
      secretaryOfState: {
        id: 21,
        name: "Frank LaRose",
        party: "Republican",
        position: "Secretary of State",
        since: 2019,
      },
      treasurer: {
        id: 22,
        name: "Robert Sprague",
        party: "Republican",
        position: "State Treasurer",
        since: 2019,
      },
      auditor: {
        id: 23,
        name: "Keith Faber",
        party: "Republican",
        position: "State Auditor",
        since: 2019,
      },
    },
  };
  
  export default politicians;
  