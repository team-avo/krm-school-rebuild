import { pic } from "@/lib/photos";

export type EventItem = {
  id: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content: string[];
};

export const eventsData: EventItem[] = [
  {
    id: "district-level-yoga-competition",
    title: "District Level yoga competition",
    date: "November 25, 2017",
    image: pic("events/event-1.jpg"),
    excerpt:
      'We are very glad to share that our special school children won 1st place in "District level yoga competition" organised by Thiruvallur District yoga development association, Good shepherd nursery & primary school and SSR sports academy...',
    content: [
      'We are very glad to share that our special school children won 1st place in "District level yoga competition" organised by Thiruvallur District yoga development association, Good shepherd nursery & primary school and SSR sports academy.',
      "From 4 districts, 60 schools, 300 students participated. Following 9 children of our school L.Roweena Anjalo, P.Dakshinamoorthy, S.N.Akilan, Joshua Bevan Nathaniel, G.B.Arjun Adhithya, C.Madheshwaran, R.Sanjay, S.V.Nareenkumar, V.Vyshalini competed with normal children and all our children won first prize under different age categories. Special Chief Guest of this successful event is Dr. Thamizhisai Soundarrajan. Special guests are Sri.M.Chakravarti Naidu, Dr.N.Paul Gnanakumar, Dr.S.Sundarrajan, Sri.S.Francis, Sri.R.Subramani.",
      "We take this opportunity to thank all the organisers and coordinators who invited us for this competition and took extra care on our children and made us feel very proud for this success.",
    ],
  },
  {
    id: "national-youth-project-morena",
    title: "National Youth Project - Children's Festival in Morena, Madhyapradesh",
    date: "November 25, 2017",
    image: pic("events/event-2.jpg"),
    excerpt:
      "NYP is a National youth project movement launched in September 27, 1970 under the directorship of Dr.S.N.Subba Rao...",
    content: [
      'NYP is a National youth project movement launched in September 27, 1970 under the directorship of Dr.S.N.Subba Rao who is called as "Living spirit of Mahathma Gandhi" a fellow of Gandhi peace foundation. He inspires and lifts up the spirit of youth in the world for building a new society based on Love, Peace, Harmony and Social justice. NYP is organising so many camps for all young men and women from all parts of india. The youths could live together and be friendly to one another irrespective of caste, religion, language or status bringing forth living meaning to the spirit of "Unity in diversity". NYP is conducting about 10 camps per year.',
      'This year " National Youth project - Children\'s day festival" is happening at Mahathma Gandhi Seva Ashram, Madhyapradesh from November 25th to November 30th. We are very glad to receive the invitation to participate in this festival representing Tamilnadu for the 2nd year. From our school 9 students are going to give variety of performances in cultural events accompanied by 5 teachers and 1 supporter. We wish all of them to bring up a great success, gain valuable experience to live a life by way of meeting all other state people and build a strong relationship. Our students are learning new things and gaining good experience.',
      "We are happy to share that our student Sakthivel was nominated for the representative of Tamilnadu team. He was blessed by all Chief Guests in stage with special attention. Our students and teachers are enjoying this camp very much and getting along with other neighbouring states participants and actively participating in various cultural events.",
    ],
  },
  {
    id: "interschool-yoga-competition",
    title: "Interschool yoga competition",
    date: "November 20, 2017",
    image: pic("events/event-3.jpg"),
    excerpt:
      "Yoga is very important in everyone's life. It helps to develop focus and increase concentration, flexibility and muscle strength, develop coordination, controls stress and anxiety...",
    content: [
      "Yoga is very important in everyone's life. It helps to develop focus and increase concentration, flexibility and muscle strength, develop coordination, controls stress and anxiety. It increases their confidence and positive self image. It's an alternative therapy. Keeping this in mind we at KRM special school organized 1st year Interschool yoga competition for special children \u201CSattva Yogi 2017\u201D at Ranga Hall, Kaligi Ranganathan Montford Matriculation Higher secondary school from 10 am to 1 pm.",
      "\u201CVazhga Valamudan\u201D Shri.Vadivanantham, President of \u201CUlaga Samudhaya Sangam\u201D inaugurated and judged the competition. 70 students from 7 Special schools Balavihar, Sankalp, Vishwas special school, Anbalaya, Spastic society of tamilnadu, Ayanavaram branch, and their 2 branches participated in this interschool competition both in Solo as well as in Group performance. Participants and teachers accompanied them arrived at 8 a.m. We gave a traditional warm welcome to all of them and offered welcome drink with breakfast. All participants gave their best effort and performed well. In Group performance Balavihar won 1st place, Anbalaya school 2nd place, and 3rd place was shared by Sankalp school and Spastic society of tamilnadu. Under Solo performance below 12 years category 4 students, 12 to 17 years category - 5 students, above 17 years - 3 students won 1st, 2nd and 3rd places.",
      "All the winners are awarded with Medals & Certificates and Participants with participation certificates. Once the competition and prize distribution was over we provided them lunch. As a part of various fun activities to encourage all the children and make them learn about the importance of games we have organized for a \u201CGames Festival\u201D with more than 40 interesting brainstorming games and all the students and teachers enjoyed and played all the games.",
    ],
  },
];

export function getEvent(id: string): EventItem | undefined {
  return eventsData.find((e) => e.id === id);
}
