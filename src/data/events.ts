export interface Event {
  code: string;
  position: number;
  title: string;
  subtitle: string;
  description: string;
  teamSize: string;
  venue: string;
  coordinators: {
    name: string;
    phone: string;
  }[];
  registerLink: string;
}

export const events: Event[] = [
  {
    code: "E01",
    position: 1,
    title: "Grand Prix of Code",
    subtitle: "A Competitive Coding Challenge",
    description:
      "A high-energy, battle-royale-style coding competition where teams of 3-4 compete through multiple elimination rounds. All teams begin together in Round 1 (The Drop), solving basic coding, with the weakest and slowest teams eliminated. Round 2 (The Shrinking Zone) increases time pressure and focuses on logic-heavy and moderate algorithmic problems like sorting, searching, and classic LeetCode-style challenges, allowing only the top half to advance. In the Final Showdown, remaining teams face advanced problem-solving under extreme time constraints, with teams eliminated one by one as others finish correct solutions-crowning the last team standing as the winner and the second-last as runner-up.",
    teamSize: "2-3 members",
    venue: "Natural Language processing Laboratory, INT Block 1st Floor",
    coordinators: [
      { name: "Naveen", phone: "+91 9360314286" },
      { name: "Rahul", phone: "+91 9342341945" },
    ],
    registerLink: "https://forms.gle/a4qS4rVqWXjGPKpz6",
  },
  {
    code: "E02",
    position: 2,
    title: "Final Lap Escape",
    subtitle: "Tech Puzzle Escape Challenge",
    description: `**Round 1: Cinematic Clue Identification**
A set of ten cinematic clues will be displayed one by one on the projector. Teams must identify the clues and write down their answers within the given time. Teams are not allowed to interact with other teams during the round. The two teams with the least number of correct answers will be eliminated.

**Round 2: Technical Crossword and Dumb Charades**
Each team must nominate one member for this round. The nominated member will solve a technical crossword. The nominated member must memorize the answers. The remaining two members of the team will be seated separately. The nominated member will act out the technical terms (Dumb Charades format) for the remaining two members to guess.
The top four teams will proceed to the final round.

**Round 3: Technical Clue Hunt and Code Decoding**
Three clues will be hidden, where each clue leads to the next. The final clue will contain a code snippet or an encoded output. Teams must decode the snippet to obtain a password. The password must be entered in the system provided to reveal the final output. Only one team will be allowed at a time for this round. Each team will be given a maximum time limit of ten minutes. If the time exceeds, the team will be eliminated. If the decoded output is incorrect, the team will be eliminated.
The winner will be finalized based on the least time taken to complete the final decoding successfully.`,
    teamSize: "3 members",
    venue: "5th Block Classroom 501",
    coordinators: [
      { name: "Hemanath", phone: "+91 9360823431" },
      { name: "Sachin", phone: "+91 7603855619" },
    ],
    registerLink:
      "https://docs.google.com/forms/d/1996xTndjfdsVX5S7GSTarGK8IQEh2k8Qf9ssUn8cD9A/edit?pli=1",
  },
  {
    code: "E03",
    position: 3,
    title: "Fuel the Link",
    subtitle: "Visual Connection Challenge",
    description:
      "This event is conducted for a maximum duration of two hours in the afternoon session and involves teams of 2-3 participants competing through multiple rounds of increasing difficulty. In each round, teams are presented with 2-4 images or visual clues that represent technical ideas, functions, or references. By logically connecting all the clues, teams must identify a single technical term, concept, or technology within a strict time limit of 30-60 seconds. Scoring is based on correctness and speed, with bonus points for the fastest valid responses. After each question, the correct connection is revealed with a brief technical explanation, and audience participation is allowed once teams have submitted their answers.",
    teamSize: "2-3 members",
    venue: "Network and Cybersecurity Laboratory, CS Block Ground Floor Lab",
    coordinators: [
      { name: "Devasena", phone: "+91 9003433722" },
      { name: "Stefan", phone: "+91 8925117972" },
    ],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfXr6Rt-QfGwC0sGAxp1chXfjokR0QZld1ZRNlxFHKs4j0xKw/viewform?usp=publish-editor",
  },
  {
    code: "E04",
    position: 4,
    title: "The Podium Pitch",
    subtitle: "Poster Presentation Event",
    description:
      "The poster presentation event provides participants with an opportunity to present their technical ideas and solutions for a given problem statement through a well-structured poster. Participants are required to clearly explain the problem, their proposed approach, methodology, and expected outcomes using visual and technical content. Evaluation is based on clarity of concept, technical depth, innovation, and the effectiveness of the poster in communicating the solution.",
    teamSize: "2-3 members",
    venue: "5th Block Classrom No. 503",
    coordinators: [
      { name: "John", phone: "+91 6380759764" },
      { name: "Sanjana", phone: "+91 9176638977" },
    ],
    registerLink: "https://forms.gle/7XzSmhZKHBVPPvVz9",
  },
  {
    code: "E05",
    position: 5,
    title: "Capture the Flag",
    subtitle: "Cybersecurity Challenge",
    description:
      "The Capture the Flag (CTF) event consists of a series of cybersecurity challenges where participants analyze problems, identify vulnerabilities, and solve puzzles to uncover hidden flags. Each challenge represents a real-world scenario involving cryptography, web applications, forensics, or networking. Participants earn points for every flag they capture, with increasing difficulty levels testing their analytical thinking, technical skills, and ability to apply cybersecurity concepts under time constraints.",
    teamSize: "2 members",
    venue: "Marine Block 1st Floor Laboratory",
    coordinators: [
      { name: "Dhanesh", phone: "+91 6369454641" },
      { name: "Balaji", phone: "+91 9363626783" },
    ],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSc6NJxdajzUNPNBaTZVayW6ysFvJ6PHH4ccOv2FPVNTQkvZuw/viewform",
  },
  {
    code: "E06",
    position: 6,
    title: "Code to the Upside-Down",
    subtitle: "Board Game Challenge",
    description:
      "Code to the Upside Down begins with teams of one to three participants assembling on the board, with multiple teams playing at the same time. The game starts as teams take turns rolling the dice, and each roll moves the team forward by the corresponding number of tiles. Once a team lands on a tile, they must answer the technical question placed on that tile, which may be based on programming basics, logical reasoning, computer science fundamentals, or current technology trends. If the team answers correctly, they remain on that tile and wait for their next turn. If the answer is incorrect, the team moves back to its previous position. At this point, the question is opened to all other teams, and the first team to buzz in gets a chance to answer; a correct buzzer answer allows that team to move two steps forward. If a team rolls a five, they immediately receive an extra turn. This sequence continues as teams progress across the board, moving deeper into the Upside Down with every roll, until one team reaches the final tile and successfully escapes, winning the game.",
    teamSize: "2-3 members",
    venue: "Modern Computing Laboratory, INT Block, 2nd Floor",
    coordinators: [
      { name: "Smirithi", phone: "+91 9444189802" },
      { name: "Varshini", phone: "+91 9444684230" },
    ],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeOqQ01I5Uru28o3dC6Bz5IIDb3YkDQMg002Jak_N1Jknm1pA/viewform",
  },
];
