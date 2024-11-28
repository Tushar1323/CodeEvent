import React from 'react'
import ContestDetails from './Block'
import './CSS/Block.css'
const data = [
    {
        status: "Upcoming",
        Date: "01 Dec 2024 07:00PM",
        length: "01:30",
        platform: "GFG",
        name: "GFG Weekly-183 [Rated Contest]",
        gotoLink: "https://practice.geeksforgeeks.org/contest/gfg-weekly-183-rated-contest"
    },
    {
        status: "Upcoming",
        Date: "08 Dec 2024 07:00PM",
        length: "01:30",
        platform: "GFG",
        name: "GFG Weekly-184 [Rated Contest]",
        gotoLink: "https://practice.geeksforgeeks.org/contest/gfg-weekly-184-rated-contest"
    },
    {
        status: "Upcoming",
        Date: "08 Dec 2024 07:00PM",
        length: "01:30",
        platform: "GFG",
        name: "Job-A-Thon Exclusive:Hubstream India Private Limited",
        gotoLink: "https://practice.geeksforgeeks.org/contest/job-a-thon-exclusive-hiring-challenge-for-hubstream-4606"
    },
    {
        status: "Upcoming",
        Date: "01 Dec 2024 08:00AM",
        length: "01:30",
        platform: "Leetcode",
        name: "Weekly Contest 426",
        gotoLink: "https://practice.geeksforgeeks.org/contest/job-a-thon-exclusive-hiring-challenge-for-hubstream-4606"
    },
    {
        status: "Upcoming",
        Date: "07 Dec 2024 08:00PM",
        length: "01:30",
        platform: "Leetcode",
        name: "Biweekly Contest 145",
        gotoLink: "https://leetcode.com/contest/biweekly-contest-145/"
    },
    {
        status: "Upcoming",
        Date: "04 Dec 2024 Wed 20:00",
        length: "02:00",
        platform: "CodeChef",
        name: "Starters 163",
        gotoLink: "https://www.codechef.com/START163"
    },
    {
        status: "Upcoming",
        Date: "11 Dec 2024 Wed 20:00",
        length: "02:00",
        platform: "CodeChef",
        name: "Starters 164",
        gotoLink: "https://www.codechef.com/START164"
    },
    {
        status: "Upcoming",
        Date: "Nov/30/2024 20:05UTC+5.5",
        length: "03:00",
        platform: "CodeForeces",
        name: "Rayan Programming Contest 2024 - Selection (Codeforces Round 989, Div. 1 + Div. 2)",
        gotoLink: "https://codeforces.com/contests"
    },
    {
        status: "Upcoming",
        Date: "Dec/01/2024 10:35UTC+5.5",
        length: "05:00",
        platform: "CodeForeces",
        name: "2024-2025 ICPC Asia Jakarta Regional Contest (Unrated, Online Mirror, ICPC Rules, Teams Preferred)",
        gotoLink: "https://codeforces.com/contests"
    },
    {
        status: "Upcoming",
        Date: "Dec/02/2024 20:05UTC+5.5",
        length: "02:00",
        platform: "CodeForeces",
        name: "Educational Codeforces Round 172 (Rated for Div. 2)",
        gotoLink: "https://codeforces.com/contests"
    },
    {
        status: "Upcoming",
        Date: "Dec/03/2024 11:35UTC+5.",
        length: "02:00",
        platform: "CodeForeces",
        name: "Codeforces Round 990 (Div. 1)",
        gotoLink: "https://codeforces.com/contests"
    },
    {
        status: "Upcoming",
        Date: "Dec/03/2024 11:35UTC+5.5",
        length: "02:00",
        platform: "CodeForeces",
        name: "Codeforces Round 990 (Div. 2)",
        gotoLink: "https://codeforces.com/contests"
    },
    {
        status: "Upcoming",
        Date: "Dec/15/2024 20:05UTC+5.5",
        length: "02:15",
        platform: "CodeForeces",
        name: "Codeforces Round (Div. 2)",
        gotoLink: "https://codeforces.com/contests"
    },
    {
        status: "Upcoming",
        Date: "Dec/20/2024 20:05UTC+5.5",
        length: "03:00",
        platform: "CodeForeces",
        name: "Codeforces Global Round 28",
        gotoLink: "https://codeforces.com/contests"
    },
    {
        status: "Upcoming",
        Date: "Nov/30/2024 20:05UTC+5.5",
        length: "02:00",
        platform: "CodeForeces",
        name: "Codeforces Round (Div. 2)",
        gotoLink: "https://codeforces.com/contests"
    },
    {
        status: "Upcoming",
        Date: "Dec/22/2024 20:05UTC+5.",
        length: "02:00",
        platform: "CodeForeces",
        name: "Educational Codeforces Round 173 (Rated for Div. 2)",
        gotoLink: "https://codeforces.com/contests"
    },
    {
        status: "Upcoming",
        Date: "Dec 06, 2024, 06:00 PM IST",
        length: "02:00",
        platform: "hackerEarth",
        name: "CODE THE CHANGE CHALLENGE",
        gotoLink: "https://www.hackerearth.com/challenges/new/competitive/metlife-test/"
    },
    {
        status: "Upcoming",
        Date: "Dec 20, 2024, 06:00 PM IST",
        length: "01:30",
        platform: "hackerEarth",
        name: "Fractal Azure Hiring Challenge 2024",
        gotoLink: "https://assessment.hackerearth.com/challenges/new/hiring/fractal-azure-hiring-challenge/"
    },
    {
        status: "Upcoming",
        Date: "Dec 21, 2024, 06:00 PM IST",
        length: "01:30",
        platform: "hackerEarth",
        name: "CRACK<A>CAREER",
        gotoLink: "https://www.hackerearth.com/challenges/new/competitive/crack-a-career-heycoach/"
    },
    {
        status: "Upcoming",
        Date: "Dec 21, 2024, 06:00 PM IST",
        length: "01:30",
        platform: "hackerEarth",
        name: "CRACK<A>CAREER",
        gotoLink: "https://www.hackerearth.com/challenges/new/competitive/crack-a-career-heycoach/"
    },
    {
        status: "Upcoming",
        Date: "Dec 20, 2024, 06:00 PM IST",
        length: "00:30",
        platform: "hackerEarth",
        name: "Global Scholar Challenge",
        gotoLink: "https://www.hackerearth.com/challenges/new/competitive/global-scholar-challenge/"
    },
    {
        status: "Upcoming",
        Date: "Dec 06, 2024, 06:00 PM IST",
        length: "01:30",
        platform: "hackerEarth",
        name: "Plivo Build-a-Thon",
        gotoLink: "https://assessment.hackerearth.com/challenges/new/hiring/plivo-build-a-thon/"
    },
    {
        status: "Upcoming",
        Date: "Nov 29, 2024, 06:00 PM IST",
        length: "01:30",
        platform: "hackerEarth",
        name: "Fractal Data Science Hiring Challenge",
        gotoLink: "https://assessment.hackerearth.com/challenges/new/hiring/fractal-hiring-challenge/"
    },

]


const pastdata = [
    {
        status: "Past",
        Date: "24 Nov 2024 07:00PM",
        length: "01:30",
        platform: "GFG",
        name: "GFG Weekly-182 [Rated Contest]",
        gotoLink: "https://practice.geeksforgeeks.org/contest/gfg-weekly-182-rated-contest"
    },
    {
        status: "Past",
        Date: "17 Nov 2024 08:00PM",
        length: "02:30",
        platform: "GFG",
        name: "Job-A-Thon 39 Hiring Challenge",
        gotoLink: "https://practice.geeksforgeeks.org/contest/gfg-weekly-181-rated-contest"
    },
    {
        status: "Past",
        Date: "11 Nov 2024 07:00PM",
        length: "01:30",
        platform: "GFG",
        name: "Innovate X Coding Challenge",
        gotoLink: "https://practice.geeksforgeeks.org/contest/innovate-x-coding-challenge"
    },
    {
        status: "Past",
        Date: "10 Nov 2024 07:00PM",
        length: "01:30",
        platform: "GFG",
        name: "GFG Weekly-180 [Rated Contest]",
        gotoLink: "https://practice.geeksforgeeks.org/contest/gfg-weekly-180-rated-contest"
    },
    {
        status: "Past",
        Date: "3 Nov 2024 07:00PM",
        length: "01:30",
        platform: "GFG",
        name: "GFG Weekly-179 [Rated Contest]",
        gotoLink: "https://practice.geeksforgeeks.org/contest/gfg-weekly-179-rated-contest"
    },
    {
        status: "Past",
        Date: "24 Nov 2024 08:00AM",
        length: "01:30",
        platform: "Leetcode",
        name: "Weekly Contest 425",
        gotoLink: "https://leetcode.com/contest/weekly-contest-425/"
    },
    {
        status: "Past",
        Date: "23 Nov 2024 08:00AM",
        length: "01:30",
        platform: "Leetcode",
        name: "Biweekly Contest 144",
        gotoLink: "https://leetcode.com/contest/biweekly-contest-144/"
    },
    {
        status: "Past",
        Date: "17 Nov 2024 08:00AM",
        length: "01:30",
        platform: "Leetcode",
        name: "Weekly Contest 424",
        gotoLink: "https://leetcode.com/contest/weekly-contest-424/"
    },
    {
        status: "Past",
        Date: "10 Nov 2024 08:00AM",
        length: "01:30",
        platform: "Leetcode",
        name: "Weekly Contest 423",
        gotoLink: "https://leetcode.com/contest/weekly-contest-423/"
    },
    {
        status: "Past",
        Date: "9 Nov 2024 08:00AM",
        length: "01:30",
        platform: "Leetcode",
        name: "BiWeekly Contest 143",
        gotoLink: "https://leetcode.com/contest/biweekly-contest-143/"
    },
]

function Info() {
    return (
        <>
            <div>
                <h1 id="heading" style={{ color: "red", textAlign: "center" }}>Upcoming Coding Contests</h1>
                <div>
                    {data.map((contest, index) => (
                        <ContestDetails
                            key={index} // Using index as key since contest data may not have a unique ID
                            status={contest.status}
                            date={contest.Date}
                            length={contest.length}
                            platform={contest.platform}
                            name={contest.name}
                            gotoLink={contest.gotoLink}
                        />
                    ))}
                </div>
            </div>

            <div>
                <h1 id="heading" style={{ color: "green", textAlign: "center" }}>Past Coding Contests</h1>
                <div>
                    {pastdata.map((contest, index) => (
                        <ContestDetails
                            key={index} // Using index as key since contest data may not have a unique ID
                            status={contest.status}
                            date={contest.Date}
                            length={contest.length}
                            platform={contest.platform}
                            name={contest.name}
                            gotoLink={contest.gotoLink}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}


export default Info;