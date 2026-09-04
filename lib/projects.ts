/**
 * Solstice Studio is a fictional practice built for portfolio purposes.
 * All projects, locations, and details below are invented — see
 * /docs/PROJECT_MEMORY.md for the disclosure note. Nothing here should be
 * presented as a real firm, client, or built work.
 */

export type Season = "winter" | "spring-fall" | "summer";

export interface Project {
  slug: string;
  name: string;
  location: string;
  year: string;
  category: "New Build" | "Renovation" | "Infill";
  size: string;
  summary: string;
  lightStory: string;
  narrative: string[];
  season: Season;
  swatch: string;
}

export const projects: Project[] = [
  {
    slug: "ridge-house",
    name: "Ridge House",
    location: "Hood River, Oregon",
    year: "2023",
    category: "New Build",
    size: "2,450 sq ft",
    summary:
      "A single-story home stepped along a west-facing ridge, oriented to hold afternoon light in the kitchen through winter, when the family is actually home to use it.",
    lightStory:
      "The client's brief was simple: mornings for coffee outside, evenings for cooking together. We ran a full winter light study before drawing a single wall — the kitchen and dining volume rotates twelve degrees off the site's natural grid specifically to catch the low winter sun between 3 and 6pm.",
    narrative: [
      "Hood River sits in a river gorge that funnels wind and compresses the usable building envelope on most lots. The client's site was no exception — a narrow bench cut into a west-facing slope, with a view worth protecting and a wind exposure worth respecting.",
      "Rather than centering the home on the view, we centered it on the sun's winter path across that view. A shallow-pitched roof steps down toward the ridge, letting low winter light travel deep into the main living space while a deeper eave on the upper volume keeps July's high sun off the same glass.",
      "The material palette — board-formed concrete at the base, vertical cedar above — was chosen to age into the basalt outcrops nearby rather than stand apart from them.",
    ],
    season: "winter",
    swatch: "linear-gradient(135deg, #DCD3BE, #B79E78)",
  },
  {
    slug: "cannery-row-house",
    name: "Cannery Row House",
    location: "Astoria, Oregon",
    year: "2022",
    category: "Infill",
    size: "1,680 sq ft",
    summary:
      "A narrow infill lot solved with a north-lit studio and a south-facing courtyard that carries stored heat into the living spaces after dark.",
    lightStory:
      "Astoria's lot is 32 feet wide with neighbors close on both sides — no east or west light to speak of. The whole design pivots on a single carved-out courtyard that pulls south light down through the section instead of across the street frontage.",
    narrative: [
      "The client, a printmaker, needed a working studio with unwavering, non-directional light — the north-facing clerestory above the studio does exactly that, all day, every season, with no direct sun to manage at all.",
      "Everything else in the house works around that constraint. A sunken courtyard cut into the center of the plan opens the living spaces to the south sky despite having no south-facing street wall, and its concrete floor stores enough afternoon heat to noticeably temper the evening.",
      "It's the smallest project in the practice's portfolio and, several of us would argue, the most disciplined.",
    ],
    season: "spring-fall",
    swatch: "linear-gradient(135deg, #D6CDB4, #9E8F6A)",
  },
  {
    slug: "fir-grove-residence",
    name: "Fir Grove Residence",
    location: "Bend, Oregon",
    year: "2024",
    category: "New Build",
    size: "3,100 sq ft",
    summary:
      "Skylight geometry calculated against the client's existing tree canopy rather than against it — the light arrives, the trees stay.",
    lightStory:
      "Most builders on this site wanted to clear the grove for solar access. We mapped the canopy gaps across a full year instead, and placed five skylights precisely where the sun already reaches the ground, unassisted, for at least four hours a day.",
    narrative: [
      "The client's non-negotiable was the existing stand of ponderosa pine on the lot — twelve mature trees, some over eighty years old. Conventional solar-access thinking would have called for removing several of them.",
      "We spent three site visits with a sun-path finder simply logging where light already broke through the canopy across the seasons, then let those five points become the roof's skylight geometry, adjusted only slightly for structural bay spacing.",
      "The result reads more like a forest clearing than a house with skylights — the canopy remains intact, and the interior light shifts, dapples, and moves with real trees instead of a fixed geometric pattern.",
    ],
    season: "summer",
    swatch: "linear-gradient(135deg, #E1D6BE, #A8925F)",
  },
  {
    slug: "lowland-farmhouse",
    name: "Lowland Farmhouse",
    location: "Willamette Valley, Oregon",
    year: "2021",
    category: "Renovation",
    size: "2,900 sq ft",
    summary:
      "A working farmhouse rebuilt around a long east-west spine so every bedroom gets direct morning sun before a full day in the fields.",
    lightStory:
      "The existing 1920s farmhouse ran north-south, which meant three of four bedrooms got almost no direct morning light. We kept the original frame where it was structurally sound and re-oriented the addition along the east-west axis the original builders should have used.",
    narrative: [
      "This was a renovation-and-addition project for a family that farms the surrounding hundred acres and is awake, and outside, well before sunrise most of the year. Morning light in the bedrooms wasn't an aesthetic preference — it was about not waking up in the dark for six months a year.",
      "We preserved the original farmhouse's kitchen and front rooms almost entirely, and built the new bedroom wing along a corrected east-west spine with a covered morning porch that catches direct sun year-round from roughly 6:30 to 9am.",
      "It's the project that, more than any other in the practice, tests the founding premise: that solar orientation is a livability question first, and an architectural one second.",
    ],
    season: "spring-fall",
    swatch: "linear-gradient(135deg, #DAD0B9, #93815C)",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
