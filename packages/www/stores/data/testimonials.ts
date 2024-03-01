export interface Testimonial {
    name: string;
    role: string;
    content: string;
    avatar: string;
}

// https://twitter.com/cosmology_tech/status/1657499189641871361
// @cosmonaut_joon:
// Shoutout to @pyramation and the legends at @cosmology_tech who consistently set the bar sky-high regarding Web3 DX with ground-breaking work in the DX sector in the Cosmos space.
// A true inspiration 🙌

export const TestimonialsData: Testimonial[] = [
    {
        name: "Greg Osuri",
        role: "Akash Network",
        content: "Telescope makes building Web3 web apps super simple.",
        avatar: "/testimonials/osuri.jpg",
    },
    {
        name: "Ping Pub",
        role: "The core author of Ping Explorer",
        content: "Telescope is Awesome.",
        avatar: "/testimonials/ping.jpg",
    },
    {
        name: "Pupmos",
        role: "$PUPMOS",
        content: "tink u 4 ur contribushon. it makez a big differenze",
        avatar: "/testimonials/pupmos.png",
    },
    {
        name: "Larry Engineer",
        role: "https://larry.engineer",
        content: "We use your code in our projects. Appreciate your works.",
        avatar: "/testimonials/larry.jpg",
    },
    {
        name: "Kevin Garrison",
        role: "Oni Validator",
        content: `I am so beyond impressed with this team and their code contributions over the last many months. 100% one of my favorite teams in the space.`,
        avatar: "/testimonials/kevin.jpg",
    },
    {
        name: "Daniel Farina",
        role: "Osmosis Labs",
        content: `The best frontend libraries for the Interweb!`,
        avatar: "/testimonials/farina.jpg",
    },
    {
        name: "atmon3r",
        role: "Developer at Bitcanna",
        content: `Cosmology is a team of devs who will change the game in the cosmos ecosystem!`,
        avatar: "/testimonials/atmon3r.jpg",
    },
    {
        name: "Mike Purvis",
        role: "Starrybot, Croncats",
        content: `What you're doing for developer experience cannot be overstated.`,
        avatar: "/testimonials/mike.jpg",
    },
    {
        name: "Tom Beynon",
        role: "ECO Stake 🌱",
        content:
            // `This is everything I ever wanted.`,
            `Telescope is everything I ever wanted.`,
        avatar: "/testimonials/ecostake.jpg",
    },
    {
        name: "Jacob Gadikian",
        role: "Notional",
        content:
            "At long last, one UI will be able to serve many chains and developers will be able to compose between chains",
        // content:
        // 'Telescope is going to allow developers in Cosmos to access information from any chain smoothly and present it in a gorgeous UI.',
        avatar: "/testimonials/gadikian.jpg",
    },
    {
        name: "Jon Ator",
        role: "Osmosis Labs",
        content:
            "Create Cosmos App let me spin up a fully functional interchain frontend faster than I could get to the bottom of my first cup of coffee",
        avatar: "/testimonials/jonator.jpg",
    },
    {
        name: "Rex St. John",
        role: "Saga",
        content:
            "Telescope represents a completely new user experience for how end developers interact with a universe of web3-based decentralized services",
        avatar: "/testimonials/rex.jpg",
    }
];
