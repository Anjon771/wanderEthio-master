// src/data/destinationsData.js
// Authoritative Ethiopian destination data with authentic imagery and verified travel logistics

// Lalibela
import LalibelaMain from '../assets/images/Lalibela/lalibela2.jpg';
import BeteGiyorgis from '../assets/images/Lalibela/beteGiyorgis.jpg';
import LalibelaRock1 from '../assets/images/Lalibela/rochHewnChurch1.jpg';
import LalibelaRock3 from '../assets/images/Lalibela/rochHewnChurch3.jpg';
import LalibelaMuseum from '../assets/images/Lalibela/museum.jpg';
import LalibelaMarket from '../assets/images/Lalibela/market.jpg';
import LalibelaHotel1 from '../assets/images/Lalibela/hotel1.jpg';
import LalibelaHotel2 from '../assets/images/Lalibela/hotel2.jpg';
import LalibelaRestaurant1 from '../assets/images/Lalibela/restaurant1.jpg';
import LalibelaRestaurant2 from '../assets/images/Lalibela/restaurant2.jpg';

// Gondar
import GondarMain from '../assets/images/Gondar/castles.jpg';
import GondarCity from '../assets/images/Gondar/gondar1.jpg';
import FasilidesBath from '../assets/images/Gondar/fasilidesBath.jpg';
import SlassieChurch from '../assets/images/Gondar/slassie.jpg';
import KuskuamChurch from '../assets/images/Gondar/kuskuamMariam.jpg';
import GondarHotel1 from '../assets/images/Gondar/hotel1.jpg';
import GondarHotel2 from '../assets/images/Gondar/hotel2.jpg';
import GondarRestaurant1 from '../assets/images/Gondar/restaurant1.jpg';

// Simien Mountains
import SemenMain from '../assets/images/semen/semen5.jpg';
import Semen1 from '../assets/images/semen/semen1.jpg';
import Semen2 from '../assets/images/semen/semen2.jpg';
import SemenTrek from '../assets/images/semen/trekkingSemen.jpg';
import SemenHotel from '../assets/images/semen/hotelSemen.jpg';

// Omo Valley
import OmoMain from '../assets/images/omo/omo6.jpg';
import Omo1 from '../assets/images/omo/omo1.jpg';
import Omo5 from '../assets/images/omo/omo5.jpg';
import Omo10 from '../assets/images/omo/omo10.jpg';

// Axum
import AxumMain from '../assets/images/Axum/axum1.jpg';
import AxumStele from '../assets/images/Axum/stele.jpg';
import AxumStMary from '../assets/images/Axum/churchOfStMary.jpg';
import AxumMuseum from '../assets/images/Axum/archaeologicalMuseum.jpg';
import AxumHotel1 from '../assets/images/Axum/hotel1.jpg';
import AxumRestaurant1 from '../assets/images/Axum/restaurant1.jpg';

// Harar
import HararMain from '../assets/images/Harar/harar4.jpg';
import Harar1 from '../assets/images/Harar/Harar.jpg';
import Harar3 from '../assets/images/Harar/harar3.jpg';
import HararGate from '../assets/images/Harar/hahar1.jpg';

// Bale Mountains
import BaleMain from '../assets/images/Bale/bale1.jpg';
import Bale2 from '../assets/images/Bale/bale2.jpg';
import BaleWolf from '../assets/images/Bale/accommodation1.jpg';

// Bahir Dar & Lake Tana
import BahirdarMain from '../assets/images/Bahirdar/bahirdar1.jpg';
import BlueNileFalls from '../assets/images/BlueNile/The-Blue-Nile-Falls.jpg';
import LakeTana from '../assets/images/Bahirdar/lakaTana.jpg';
import Monastery from '../assets/images/Bahirdar/monastery.jpg';
import BahirdarHotel1 from '../assets/images/Bahirdar/hotel1.jpg';

// Awash National Park
import AwashMain from '../assets/images/Awash/awash2.jpg';
import AwashFalls from '../assets/images/Awash/awashFalls.jpg';
import AwashPark from '../assets/images/Awash/awashNationalPark.jpg';
import AwashHotel1 from '../assets/images/Awash/hotel1.jpg';

// Addis Ababa
import AddisMain from '../assets/images/AddisAbaba/addisAbabaCity.jpg';
import AddisNationalMuseum from '../assets/images/AddisAbaba/nationalMuseum.jpg';
import AddisEntoto from '../assets/images/AddisAbaba/entoto.jpg';
import AddisTrinity from '../assets/images/AddisAbaba/holyTrinityCathedral.jpg';
import AddisMeskel from '../assets/images/AddisAbaba/meskelSquare.jpg';
import AddisHotelHilton from '../assets/images/AddisAbaba/hiltonAddisAbaba.jpg';

// Debre Damo
import DebreDamoMain from '../assets/images/DebreDamo/debredamo1.jpg';
import DebreDamoRope from '../assets/images/DebreDamo/mountain.jpg';

// Debre Libanos
import DebreLibanosMain from '../assets/images/debreLibanos/monastery.jpg';
import DebreLibanosBridge from '../assets/images/debreLibanos/portugueseBridge.jpg';
import DebreLibanosGorge from '../assets/images/debreLibanos/debre-libanos.jpg';

// Danakil
import DanakilMain from '../assets/images/Denakil/denakil2.jpg';
import Danakil1 from '../assets/images/Denakil/denakil1.jpg';

export const destinationsData = {
  lalibela: {
    id: 'lalibela',
    slug: 'lalibela',
    route: '/destination/lalibela',
    name: 'Lalibela',
    amharicName: 'ላሊበላ',
    tagline: 'The New Jerusalem — Eleven Monolithic 12th-Century Rock-Hewn Masterpieces',
    circuit: 'Northern Historic Circuit',
    unesco: 'UNESCO World Heritage Site (1978)',
    elevation: '2,630 m (8,630 ft)',
    coordinates: "12°02'N 39°02'E",
    bestSeason: 'October to March (Dry & Festival Season)',
    recommendedDays: '3 – 4 Days',
    basePriceETB: 15530,
    heroImage: LalibelaMain,
    galleryImages: [
      { path: BeteGiyorgis, title: 'Bete Giyorgis (Church of St. George)', desc: 'The crown jewel of Lalibela, carved in the shape of a cruciform cross directly into volcanic tuff.' },
      { path: LalibelaRock1, title: 'Northern Group Monoliths', desc: 'Connected by an underground labyrinth of narrow trenches and sacred ceremonial tunnels.' },
      { path: LalibelaRock3, title: 'Rock Carvings & Pillars', desc: 'Intricate bas-relief crosses, Greek key friezes, and centuries-old ceremonial Ge’ez inscriptions.' },
      { path: LalibelaMuseum, title: 'Lalibela Ecclesiastical Museum', desc: 'Housing gold crowns, ancient parchment manuscripts, and ceremonial processional crosses.' },
      { path: LalibelaMarket, title: 'Saturday Highland Market', desc: 'Lively mountain market where regional farmers barter spices, teff grain, honey, and sheep.' }
    ],
    overview: `Perched high in the Lasta Mountains of northern Ethiopia, Lalibela is one of the world's most astonishing architectural and spiritual achievements. Known as the "New Jerusalem", this medieval holy city was conceived in the late 12th century by King Gebre Mesqel Lalibela when Muslim conquests halted Christian pilgrimages to Jerusalem.
    
    Rather than constructing churches from stone blocks, Lalibela's architects carved eleven monumental basilicas directly downward into solid volcanic basalt. These monolithic and semi-monolithic sanctuaries feature interior colonnades, barrel vaults, drainage trenches, and subterranean tunnels carved with surgical precision.
    
    Today, Lalibela remains a vibrant living center of Ethiopian Orthodox worship, where white-robed pilgrims gather in the predawn mist to chant ancient Ge’ez hymns to the rhythm of sistra and silver Kebero drums.`,
    highlights: [
      {
        title: 'Bete Giyorgis (St. George)',
        image: BeteGiyorgis,
        desc: 'Isolated on a sloping rock terrace, this 12-meter-deep cruciform monolith was the final church carved in Lalibela, dedicated to Ethiopia’s patron saint.',
        tip: 'Best visited at golden hour when the red volcanic rock glows in the late afternoon sun.'
      },
      {
        title: 'Bete Medhane Alem',
        image: LalibelaRock1,
        desc: 'The largest monolithic rock-hewn church in the world, framed by 36 external columns and home to the sacred 7-kilogram gold Lalibela Cross.',
        tip: 'Remove shoes before entering; modest attire covering shoulders and knees is strictly observed.'
      },
      {
        title: 'Subterranean Labyrinth of Tunnels',
        image: LalibelaRock3,
        desc: 'Trek through the symbolic "Hell to Heaven" pitch-black tunnel connecting the northern and eastern church clusters.',
        tip: 'Bring a small headlamp or pocket flashlight for the dark passage.'
      },
      {
        title: 'Yemrehana Krestos Cave Church',
        image: LalibelaMuseum,
        desc: 'Located 40km outside town inside a natural basalt cavern, this exquisite Aksumite wood-and-stone built church predates Lalibela’s rock monoliths.',
        tip: 'Easily combined with an afternoon drive through the high Lasta mountain pass.'
      }
    ],
    hotels: [
      { name: 'Mountain View Hotel', type: 'Panoramic Boutique', price: '$$$', desc: 'Eagle-nest architecture offering private balconies with 360-degree views across the Lasta mountain valleys.' },
      { name: 'Maribela Hotel', type: 'Luxury Eco-Lodge', price: '$$$', desc: 'Warm stone fireplaces, organic garden gastronomy, and prime sunset viewing terraces.' },
      { name: 'Roha Hotel', type: 'Traditional Lodge', price: '$$', desc: 'Serene courtyard gardens with lush bougainvillea, traditional coffee lounge, and friendly local service.' }
    ],
    restaurants: [
      { name: 'Ben Abeba Restaurant', cuisine: 'Afro-Scottish Fusion & Ethiopian', desc: 'Whimsical futuristic open-air pavilion built on a cliff ridge with breathtaking sunset views, shepherd’s pie, and hot injera.' },
      { name: 'Kana Restaurant & Bar', cuisine: 'Authentic Ethiopian', desc: 'Cozy spot in town serving tender lamb tibs, freshly pressed avocado juices, and aromatic tej honey wine.' }
    ],
    logistics: {
      climate: 'Pleasant daytime temperatures (20°C–24°C) with brisk mountain nights (8°C–12°C). Light jacket recommended year-round.',
      clothing: 'Modest white or light-colored attire covering shoulders and legs. Slip-on shoes with thick socks for walking on stone church rugs.',
      currency: 'Ethiopian Birr (ETB). Commercial Bank of Ethiopia and Dashen Bank ATMs are active in town. Cash preferred for market transactions.',
      transport: 'Daily scheduled 50-minute domestic flights from Addis Ababa and Gondar via Ethiopian Airlines to Lalibela Airport (LLI).'
    },
    faqs: [
      { q: 'Is Lalibela safe for international travelers?', a: 'Yes. Lalibela is peaceful and warmly hospitable. Travelers explore freely with licensed guides and local scouts.' },
      { q: 'Can visitors attend Orthodox church liturgies?', a: 'Yes! Visitors are welcome to observe early morning services (around 6:00 AM) and witness sacred chanting and incense blessings.' },
      { q: 'What is the entrance fee for the rock churches?', a: 'The official church ticket covers all eleven churches for four consecutive days and includes access to the ecclesiastical museum.' }
    ]
  },

  gondar: {
    id: 'gondar',
    slug: 'gondar',
    route: '/destination/gondar',
    name: 'Gondar',
    amharicName: 'ጎንደር',
    tagline: 'The Camelot of Africa — 17th-Century Royal Castles & Painted Cherub Ceilings',
    circuit: 'Northern Historic Circuit',
    unesco: 'UNESCO World Heritage Site (1979)',
    elevation: '2,133 m (7,000 ft)',
    coordinates: "12°36'N 37°28'E",
    bestSeason: 'September to March (Timkat Festival in January)',
    recommendedDays: '2 – 3 Days',
    basePriceETB: 12335,
    heroImage: GondarMain,
    galleryImages: [
      { path: GondarMain, title: 'Fasil Ghebbi Royal Enclosure', desc: 'The magnificent stone castle of Emperor Fasilides, blending Portuguese, Moorish, and Aksumite architectural influences.' },
      { path: FasilidesBath, title: 'Fasilides Bathing Pavilion', desc: 'Sunken stone pool surrounded by ancient banyan roots, the historic epicenter of the Timkat (Epiphany) celebration.' },
      { path: SlassieChurch, title: 'Debre Berhan Selassie', desc: 'Famous for its wooden ceiling adorned with over one hundred winged Ethiopian cherub angels.' },
      { path: KuskuamChurch, title: 'Kuskuam Royal Compound', desc: 'Palace and church ruins built by Empress Mentewab overlooking the Gondar valley.' },
      { path: GondarCity, title: 'Piazza & Art Deco Architecture', desc: 'Italian colonial-era rounded facades and vibrant highland coffee culture in central Gondar.' }
    ],
    overview: `Known across the world as the "Camelot of Africa," Gondar was chosen by Emperor Fasilides in 1636 as the first permanent capital of the Ethiopian Empire after centuries of mobile nomadic royal encampments.
    
    Inside the fortified 70,000-square-meter royal enclosure of Fasil Ghebbi rise towering stone castles, battlements, banquet halls, libraries, and royal stables constructed by successive emperors.
    
    Beyond its castles, Gondar houses Debre Berhan Selassie, arguably Ethiopia's most celebrated church, whose interior walls are blanketed in vivid seventeenth-century religious frescoes and whose beamed ceiling features dozens of wide-eyed cherub faces. In January, tens of thousands gather at Fasilides' Bath for Timkat, commemorating the baptism of Christ in the river Jordan.`,
    highlights: [
      {
        title: 'Fasilides Castle & Royal Compound',
        image: GondarMain,
        desc: 'Explore the 32-meter-tall three-story castle of Emperor Fasilides with four domed battlements and sweeping valley vistas.',
        tip: 'Hire an official local heritage guide at the main gate for rich historical narratives.'
      },
      {
        title: 'Debre Berhan Selassie (Mountain of the Enlightened Trinity)',
        image: SlassieChurch,
        desc: 'Miraculously saved from destruction by a swarm of bees during a Mahdist invasion, this church contains Ethiopia’s most iconic sacred iconography.',
        tip: 'Look directly up at the ceiling to photograph the iconic cherub faces gazing down.'
      },
      {
        title: 'Fasilides’ Bath (Timkat Pool)',
        image: FasilidesBath,
        desc: 'A serene two-story stone pavilion set within a massive rectangular stone moat shaded by massive fig and ficus tree roots.',
        tip: 'During Timkat (January 19), the pool is filled with water for the sacred blessing ceremony.'
      },
      {
        title: 'Empress Mentewab’s Kuskuam Complex',
        image: KuskuamChurch,
        desc: 'Perched on the hill of Debre Tsehay, this peaceful complex retains the atmospheric skeleton of the Empress’s castle and burial crypt.',
        tip: 'Offers exceptional sunset views over the city of Gondar.'
      }
    ],
    hotels: [
      { name: 'Goha Hotel', type: 'Panoramic Hilltop Resort', price: '$$$', desc: 'Perched high on a ridge with a swimming pool and unparalleled bird’s-eye views over the castles of Gondar.' },
      { name: 'Mayleko Lodge', type: 'Luxury Eco-Boutique', price: '$$$', desc: 'Situated between Gondar airport and the historic quarter, featuring thatched bungalows and serene gardens.' },
      { name: 'Taye Belay Hotel', type: 'Central Business & Heritage', price: '$$', desc: 'Steps from the Fasil Ghebbi royal gates with comfortable rooms and an excellent rooftop restaurant.' }
    ],
    restaurants: [
      { name: 'Four Sisters Restaurant', cuisine: 'Gondarine Traditional & Buffet', desc: 'Celebrated cultural dining venue with nightly Azmari folk musicians, honey tej, and fresh shiro.' },
      { name: 'Master Chef Restaurant', cuisine: 'Ethiopian & International', desc: 'Relaxed garden terrace known for spicy lamb derek tibs and Italian espresso.' }
    ],
    logistics: {
      climate: 'Moderate highland weather (22°C–26°C day, 12°C–14°C night). Clean air with low humidity.',
      clothing: 'Comfortable footwear for walking along stone flagstones. Respectful clothing for church interiors.',
      currency: 'ETB widely used; cards accepted at major hotels like Goha and Taye Belay.',
      transport: 'Gondar Airport (GDQ) connects daily to Addis Ababa (1h) and Lalibela (30m).'
    },
    faqs: [
      { q: 'Is Gondar the best gateway for trekking the Simien Mountains?', a: 'Yes! Gondar is the primary staging ground for all Simien Mountains National Park expeditions, just 2 hours by paved road to park headquarters at Debark.' },
      { q: 'When is the best time to experience Timkat in Gondar?', a: 'Timkat takes place every year on January 19 (January 20 in leap years). Booking hotels 4–6 months in advance is essential for this peak festival.' }
    ]
  },

  semenMountains: {
    id: 'semenMountains',
    slug: 'semenMountains',
    route: '/destination/semenMountains',
    name: 'Simien Mountains',
    amharicName: 'ስሜን ተራሮች',
    tagline: 'The Roof of Africa — Towering Afro-Alpine Precipices & Endemic Gelada Herds',
    circuit: 'Northern Alpine & Wilderness Circuit',
    unesco: 'UNESCO World Heritage Site (1978)',
    elevation: 'Up to 4,550 m (Ras Dejen)',
    coordinates: "13°11'N 38°22'E",
    bestSeason: 'October to April (Post-Rain Wildflowers & Crisp Clear Vistas)',
    recommendedDays: '3 – 6 Days Trekking',
    basePriceETB: 10822,
    heroImage: SemenMain,
    galleryImages: [
      { path: SemenMain, title: 'Dramatic Escarpment Precipice', desc: 'Sheer vertical drops of up to 1,500 meters plunging into the lowlands below.' },
      { path: Semen1, title: 'Gelada Baboon Troop', desc: 'The endemic grass-eating primate of Ethiopia, known as the "Bleeding Heart Monkey".' },
      { path: Semen2, title: 'Sankaber to Geech Ridge', desc: 'High alpine trail through giant heather, lobelia, and cascading mountain gorges.' },
      { path: SemenTrek, title: 'Highland Trekking Expedition', desc: 'Multi-day wilderness camping under crystal-clear starlit African skies.' },
      { path: SemenHotel, title: 'Limalimo Eco-Lodge', desc: 'Sustainable luxury lodge perched right on the edge of the UNESCO national park.' }
    ],
    overview: `Described by Homer as the "Chess pieces of the Gods," the Simien Mountains National Park is one of Africa’s most dramatic alpine landscapes. Massive prehistoric volcanic eruptions forged this plateau, which has been carved by millennia of erosion into razor-sharp pinnacles, jagged ridges, and canyon drops falling over 1,500 meters into the abyss.
    
    The park is the sovereign sanctuary of three of Ethiopia’s most celebrated endemic mammals: the vegetarian Gelada Baboon with its crimson heart-shaped chest patch, the magnificent Walia Ibex with its curved ribbed horns, and the critically endangered Ethiopian Red Wolf.
    
    Hikers can ascend Ras Dejen (4,550m), the highest peak in Ethiopia and fourth highest in Africa, accompanied by local scouts, mountain guides, and pack mules carrying high-altitude gear.`,
    highlights: [
      {
        title: 'Imet Gogo Escarpment Viewpoint (3,926m)',
        image: SemenMain,
        desc: 'Considered by mountaineers to be the single most dramatic panoramic view on the African continent, looking across endless jagged rock towers.',
        tip: 'Arrive before 9:00 AM for crystal-clear visibility before mountain thermals create afternoon mist.'
      },
      {
        title: 'Close Encounters with Gelada Baboons',
        image: Semen1,
        desc: 'Sit quietly within a troop of hundreds of gentle wild Geladas as they groom and forage on the open alpine plateau.',
        tip: 'Geladas are completely habituated to human presence and peaceful, making for world-class wildlife photography.'
      },
      {
        title: 'Jinbar Waterfall (500m Drop)',
        image: Semen2,
        desc: 'A spectacular ribbon of water plunging 500 meters down a sheer basalt chasm into the Geech abyss.',
        tip: 'Watch for bearded vultures (lammergeiers) soaring on updrafts below you.'
      },
      {
        title: 'Ras Dejen Summit Trek (4,550m)',
        image: SemenTrek,
        desc: 'A non-technical summit climb rewarding trekkers with 360-degree vistas stretching north into Eritrea and west to Sudan.',
        tip: 'Requires adequate acclimatization; 5–7 day round-trip itinerary from Debark.'
      }
    ],
    hotels: [
      { name: 'Limalimo Lodge', type: 'Luxury Sustainable Boutique', price: '$$$$', desc: 'World-renowned eco-lodge perched directly over the Simien escarpment with floor-to-ceiling glass windows and farm-to-table dining.' },
      { name: 'Simien Lodge (Buyit Ras)', type: 'Highest Lodge in Africa (3,260m)', price: '$$$', desc: 'Heated tukul bungalows, warm fiberglass insulation, and the highest bar in Africa.' },
      { name: 'Wilderness Mountain Camps', type: 'Alpine Expedition Tents', price: '$$', desc: 'Sankaber, Geech, and Chennek designated campsites with dedicated camp cooks, campfires, and four-season sleeping gear.' }
    ],
    restaurants: [
      { name: 'Limalimo Restaurant', cuisine: 'Organic Afro-European', desc: 'Fresh mountain trout, homemade sourdough, organic salads, and fine Ethiopian Rift Valley wines.' },
      { name: 'Buyit Ras Panoramic Bar', cuisine: 'Hearty Trekker Fare', desc: 'Steaming lentil soups, beef goulash, and warming Ethiopian honey wine after a long day on the trail.' }
    ],
    logistics: {
      climate: 'Warm daytime sun (16°C–20°C) dropping rapidly at night below freezing (0°C to -4°C) at high camps. Thermal base layers and windbreakers required.',
      clothing: 'Sturdy hiking boots, warm fleece, down jacket, rain shell, wool beanie, and polarized sunglasses for high-altitude UV.',
      currency: 'Bring adequate cash in ETB from Gondar. There are no ATMs past Debark.',
      transport: 'Drive 2 hours from Gondar to Debark park headquarters, then proceed into the park by 4WD vehicle.'
    },
    faqs: [
      { q: 'Do I need prior mountain climbing experience?', a: 'No! The Simien trekking trails are hiking and walking paths. Only Ras Dejen summit requires a brief, easy scramble at the very top.' },
      { q: 'Is an armed park scout mandatory?', a: 'Yes. Ethiopian Wildlife Conservation Authority (EWCA) regulations require an authorized local scout to accompany all groups for safety and trail navigation.' }
    ]
  },

  omo: {
    id: 'omo',
    slug: 'omo',
    route: '/destination/omo',
    name: 'Omo Valley',
    amharicName: 'ኦሞ ሸለቆ',
    tagline: 'Ancestral Cradle — Ancient Tribal Traditions, Body Art & Rituals',
    circuit: 'Southern Cultural Circuit',
    unesco: 'UNESCO World Heritage Site (Lower Valley of the Omo, 1980)',
    elevation: '400 m – 900 m (Tropical Savanna)',
    coordinates: "4°48'N 35°58'E",
    bestSeason: 'June to September & December to March',
    recommendedDays: '4 – 7 Days',
    basePriceETB: 18650,
    heroImage: OmoMain,
    galleryImages: [
      { path: OmoMain, title: 'Hamar Bull Jumping Ceremony', desc: 'The ancestral rite of passage where young men leap across cattle to enter adulthood.' },
      { path: Omo1, title: 'Mursi Clay Lip Plates', desc: 'Renowned body adornment and clay lip plates symbolizing social maturity and pride.' },
      { path: Omo5, title: 'Karo Painted Body Art', desc: 'Exquisite chalk, ochre, and charcoal body painting inspired by guinea fowl plumage.' },
      { path: Omo10, title: 'Weekly Tribal Markets in Key Afer', desc: 'Banna, Hamar, and Tsemai tribes gathering to trade livestock, honey, and hand-carved stools.' }
    ],
    overview: `Tucked into the remote southwestern frontier of Ethiopia along the borders with Kenya and South Sudan, the Lower Valley of the Omo is one of the most culturally diverse and ethnographically significant regions on Earth.
    
    Here, more than a dozen distinct indigenous ethnic groups—including the Hamar, Mursi, Karo, Dassanech, Banna, and Nyangatom—maintain ancestral lifestyles, body painting traditions, cattle-herding practices, and age-old rituals virtually untouched by globalization.
    
    Wander Ethio practices strictly ethical, community-centered tourism: we partner with local tribal facilitators, ensure fair community compensation, and facilitate meaningful cultural exchange rather than intrusive tourism.`,
    highlights: [
      {
        title: 'Hamar Bull Jumping Rite of Passage',
        image: OmoMain,
        desc: 'Witness the unforgettable celebration where a young initiate runs naked across the backs of fifteen castrated bulls to earn the right to marry.',
        tip: 'Ceremonies are seasonal and non-scheduled; our facilitators track local village announcements.'
      },
      {
        title: 'Mursi Village in Mago National Park',
        image: Omo1,
        desc: 'Meet the pastoralist Mursi people, celebrated for their clay lip plates, intricate scarification patterns, and fierce warrior stick fighting (Donga).',
        tip: 'Always ask permission before taking photographs; our guides handle community photography fees respectfully.'
      },
      {
        title: 'Karo Overlook at Kolcho Village',
        image: Omo5,
        desc: 'Kolcho village sits dramatically on a high red bluff overlooking a horseshoe bend of the emerald Omo River.',
        tip: 'The Karo are master body painters who utilize natural white chalk, yellow sulfur, and red iron ore.'
      },
      {
        title: 'Key Afer & Dimeka Tribal Markets',
        image: Omo10,
        desc: 'Vibrant weekly multi-tribal gatherings where thousands converge in traditional leather dress, beads, and ochre-braided hair.',
        tip: 'Thursdays at Key Afer and Saturdays at Dimeka are the prime market days.'
      }
    ],
    hotels: [
      { name: 'Buska Lodge (Turmi)', type: 'Safari Eco-Lodge', price: '$$$', desc: 'Thatched cottages set along the banks of the Keske River with green gardens and evening Hamar cultural dance performances.' },
      { name: 'Paradise Lodge (Arba Minch)', type: 'Cliffside Resort', price: '$$$', desc: 'Perched high above Lakes Chamo and Abaya with swimming pool and private bamboo bungalows.' },
      { name: 'Eco-Omo Safari Lodge (Jinka)', type: 'Riverbank Tented Camp', price: '$$$', desc: 'Luxury safari tents surrounded by tropical acacia trees along the Neri River.' }
    ],
    restaurants: [
      { name: 'Buska Lodge Dining Room', cuisine: 'Ethiopian & Continental', desc: 'Fresh local fruit platters, grilled Nile perch, and hearty lentil stews.' },
      { name: 'Tourist Hotel (Turmi)', cuisine: 'Authentic Local Fare', desc: 'Lively meeting spot for guides and travelers serving ice-cold St. George beer and tender goat tibs.' }
    ],
    logistics: {
      climate: 'Warm tropical savanna (28°C–34°C). Light breathable clothing, wide-brim hat, and high-SPF sunscreen recommended.',
      clothing: 'Lightweight cotton shirts, long trousers for bush walks, and comfortable closed-toe walking shoes.',
      currency: 'Cash is essential in small denominations (10, 50, 100 ETB notes). ATMs only in Arba Minch and Jinka.',
      transport: 'Fly to Jinka Airport (BCO) or Arba Minch from Addis Ababa, then proceed via private 4WD Toyota Land Cruiser.'
    },
    faqs: [
      { q: 'How does Wander Ethio ensure respectful and ethical cultural visits?', a: 'We employ village-born facilitators who speak local dialects, ensure fair village entrance compensation, and follow strict photography ethics.' },
      { q: 'Do I need malaria prophylaxis for the Omo Valley?', a: 'Yes. Because the Omo Valley is low-altitude tropical savanna, malaria medication and insect repellent are recommended by health professionals.' }
    ]
  },

  axum: {
    id: 'axum',
    slug: 'axum',
    route: '/destination/axum',
    name: 'Axum',
    amharicName: 'አክሱም',
    tagline: 'Cradle of Ancient Civilizations — Royal Stelae & The Ark of the Covenant',
    circuit: 'Northern Historic Circuit',
    unesco: 'UNESCO World Heritage Site (1980)',
    elevation: '2,130 m (6,990 ft)',
    coordinates: "14°07'N 38°43'E",
    bestSeason: 'October to April',
    recommendedDays: '2 Days',
    basePriceETB: 10003,
    heroImage: AxumMain,
    galleryImages: [
      { path: AxumMain, title: 'Northern Stelae Park', desc: 'Ancient 1,700-year-old monolithic granite obelisks marking royal Aksumite subterranean tombs.' },
      { path: AxumStele, title: 'The Great Obelisk of King Ezana', desc: 'Standing 24 meters high, carved with false doors and windows symbolizing a multistory palace.' },
      { path: AxumStMary, title: 'Church of Our Lady Mary of Zion', desc: 'The most sacred Orthodox sanctuary in Ethiopia, guardian of the Biblical Ark of the Covenant.' },
      { path: AxumMuseum, title: 'Aksum Archaeological Museum', desc: 'Coinage from King Endubis, ancient Sabaean inscriptions, and delicate Roman glassware.' }
    ],
    overview: `Dating back more than 3,000 years, Axum was the epicenter of the mighty Aksumite Empire, described by the 3rd-century Persian philosopher Mani as one of the four great powers of the world alongside Rome, Persia, and China.
    
    The city is renowned for its colossal granite stelae—the largest single stone blocks ever quarried, transported, and erected by humanity in the ancient world. The tallest fallen obelisk stood 33 meters high and weighed over 500 tons.
    
    According to Ethiopian history and the Kebra Nagast, King Solomon and the Queen of Sheba’s son, Emperor Menelik I, brought the sacred Ark of the Covenant from Jerusalem to Axum, where it has been guarded by consecrated monk guardians for millennia at the Church of St. Mary of Zion.`,
    highlights: [
      {
        title: 'The Royal Stelae Field & King Ezana’s Obelisk',
        image: AxumStele,
        desc: 'Marvel at the 24-meter upright obelisk of King Ezana and descend into the subterranean tombs of King Kaleb and Gebre Mesqel.',
        tip: 'Look closely at the base of the stelae to see sacrificial altar bowls carved into solid stone.'
      },
      {
        title: 'Church of Our Lady Mary of Zion & Chapel of the Ark',
        image: AxumStMary,
        desc: 'Visit the oldest Christian church site in sub-Saharan Africa (founded 4th century CE) and view the Chapel of the Tablet where the Ark is kept.',
        tip: 'Only the designated virgin guardian monk is permitted to enter the inner sanctum of the Ark.'
      },
      {
        title: 'Dungur Palace (Ruins of Queen of Sheba’s Palace)',
        image: AxumMain,
        desc: 'The sprawling stone foundations of a 50-room aristocratic mansion featuring stone courtyards, throne rooms, and royal baths.',
        tip: 'Located just 2 km west of the city center; ideal for afternoon exploration.'
      },
      {
        title: 'May Shum (Queen of Sheba’s Bath)',
        image: AxumMuseum,
        desc: 'A massive rock-cut reservoir where Queen Makeda is believed to have bathed, now used for annual Timkat Epiphany blessings.',
        tip: 'Surrounded by shaded eucalyptus trees with local women washing sacred fabrics.'
      }
    ],
    hotels: [
      { name: 'Sabean International Hotel', type: 'Central Boutique', price: '$$$', desc: 'Modern hotel located steps from the Stelae Park with excellent Wi-Fi and conference facilities.' },
      { name: 'Yared Zema International Hotel', type: 'Comfort & Heritage', price: '$$', desc: 'Spacious guestrooms with balconies overlooking the holy hills of Axum.' }
    ],
    restaurants: [
      { name: 'Abnet Restaurant', cuisine: 'Traditional Tigrayan & Injera', desc: 'Known for fiery kitfo, spicy shiro tagamino, and fresh cold draft beer.' }
    ],
    logistics: {
      climate: 'Dry, sunny climate (24°C–28°C day, 12°C–14°C night).',
      clothing: 'Comfortable sandals or slip-on shoes for visiting archaeological tombs and churches.',
      currency: 'ETB available at multiple bank branches near the main square.',
      transport: 'Axum Emperor Yohannes IV Airport (AXU) has daily scheduled flights to Addis Ababa and Gondar.'
    },
    faqs: [
      { q: 'Can visitors see the Ark of the Covenant?', a: 'No. The Ark is strictly secluded inside the Chapel of the Tablet, guarded continuously by a single lifelong monk guardian. Visitors view the chapel exterior and attend blessings in the adjacent cathedral.' }
    ]
  },

  harar: {
    id: 'harar',
    slug: 'harar',
    route: '/destination/harar',
    name: 'Harar Jugol',
    amharicName: 'ሐረር ጁጎል',
    tagline: 'The Walled Islamic Citadel — 82 Mosques, Coffee Alchemists & Wild Hyena Men',
    circuit: 'Eastern Historic & Cultural Circuit',
    unesco: 'UNESCO World Heritage Site (2006)',
    elevation: '1,885 m (6,184 ft)',
    coordinates: "9°19'N 42°07'E",
    bestSeason: 'Year-Round (Best October to March)',
    recommendedDays: '2 – 3 Days',
    basePriceETB: 8500,
    heroImage: HararMain,
    galleryImages: [
      { path: HararMain, title: 'Walled City of Harar Jugol', desc: 'Enclosed by four-meter-high defensive stone walls erected in the 16th century.' },
      { path: Harar1, title: 'Colorful Labyrinth Alleys', desc: 'Over 360 narrow cobbled alleys lined with vibrant whitewashed and indigo walls.' },
      { path: Harar3, title: 'Hyena Feeding Ritual', desc: 'Nightly tradition where generational "Hyena Men" feed wild spotted hyenas by hand.' },
      { path: HararGate, title: 'Harar Historic Gates', desc: 'The five historic gates guarding entry into the fourth holiest city of Islam.' }
    ],
    overview: `Steeped in coffee aromas, frankincense, and eastern spice routes, the fortified historic town of Harar Jugol is unlike any other place in Africa. Located on a hilltop plateau in eastern Ethiopia, it is regarded by scholars as the fourth holiest city of Islam, boasting 82 mosques—three dating from the 10th century—and 102 shrines packed into just one square kilometer.
    
    Inside its 16th-century walls, narrow cobbled alleyways wind past whitewashed houses, traditional Harari adare mansions, and bustling markets scented with freshly roasted Harar Longberry coffee beans and cardamoms.
    
    As twilight falls outside the city walls, visitors gather to witness one of the world's most extraordinary human-wildlife encounters: the "Hyena Men" of Harar calling wild spotted hyenas by name to feed them raw meat directly from their hands and wooden sticks.`,
    highlights: [
      {
        title: 'The Nightly Hyena Feeding Ceremony',
        image: Harar3,
        desc: 'Experience the ancient brotherhood between Hararis and wild hyenas just outside the historic gates under the African stars.',
        tip: 'Brave travelers can hold the wooden meat stick in their own mouth to feed a wild hyena under the guide’s supervision.'
      },
      {
        title: 'Arthur Rimbaud Cultural Centre',
        image: HararMain,
        desc: 'An exquisite two-story wooden townhouse with stained-glass windows celebrating the French poet who lived in Harar as a coffee trader.',
        tip: 'Exhibits fascinating 19th-century photographic archives of Old Harar.'
      },
      {
        title: 'Traditional Harari Adare House',
        image: Harar1,
        desc: 'Step inside a traditional home featuring five raised seating platforms (nedebas) and walls decorated with handwoven baskets and enameled bowls.',
        tip: 'Our guides arrange private home visits with Harari families for afternoon coffee ceremony.'
      },
      {
        title: 'Harar Longberry Coffee Roasteries',
        image: HararGate,
        desc: 'Harar is world-famous for its naturally sun-dried, winey, blueberry-noted Arabica coffee beans.',
        tip: 'Buy freshly roasted vacuum-sealed coffee directly from generational roasters inside the market.'
      }
    ],
    hotels: [
      { name: 'Grand Gato Hotel', type: 'Modern Comfort', price: '$$$', desc: 'Contemporary hotel with secure parking, good restaurant, and air-conditioned rooms near the Duke of Harar palace.' },
      { name: 'Traditional Harari Guesthouses', type: 'Heritage Homestay', price: '$$', desc: 'Stay inside centuries-old traditional homes in the heart of the walled city for an unforgettable cultural immersion.' }
    ],
    restaurants: [
      { name: 'Fresh Touch Restaurant', cuisine: 'Harari & Middle Eastern', desc: 'Famous for spiced lamb mutabak, fresh sambusas, and cold mango juices.' }
    ],
    logistics: {
      climate: 'Warm, dry, and sunny year-round (26°C–29°C day, 14°C–16°C night).',
      clothing: 'Light modest clothing covering shoulders and knees out of respect for Islamic tradition.',
      currency: 'ETB available at bank branches around Ras Makonnen square.',
      transport: 'Fly to Dire Dawa Airport (DIR) from Addis Ababa (50m), then take a scenic 1-hour drive up into Harar.'
    },
    faqs: [
      { q: 'Is the hyena feeding dangerous?', a: 'The tradition has continued for hundreds of years with no recorded tourist incidents. The hyenas are familiar with the calls and gentle during feeding.' }
    ]
  },

  bale: {
    id: 'bale',
    slug: 'bale',
    route: '/destination/bale',
    name: 'Bale Mountains',
    amharicName: 'ባሌ ተራሮች',
    tagline: 'Afro-Alpine Wilderness — Sanetti Plateau & The Endangered Ethiopian Wolf',
    circuit: 'Southern Wilderness & Wildlife Circuit',
    unesco: 'UNESCO World Heritage Site (2023)',
    elevation: '1,500 m – 4,377 m (Mount Tullu Dimtu)',
    coordinates: "6°50'N 39°45'E",
    bestSeason: 'November to April (Dry Season for Wolf Sightings)',
    recommendedDays: '3 – 5 Days',
    basePriceETB: 14430,
    heroImage: BaleMain,
    galleryImages: [
      { path: BaleMain, title: 'Sanetti Afro-Alpine Plateau', desc: 'The largest continuous area of altitude above 3,000 meters in all of Africa.' },
      { path: BaleWolf, title: 'Ethiopian Red Wolf Hunting', desc: 'The world’s rarest canid, stalking giant mole-rats across lichen-covered volcanic rocks.' },
      { path: Bale2, title: 'Lush Harenna Cloud Forest', desc: 'Dense tropical cloud forest home to wild coffee trees, colobus monkeys, and forest lions.' }
    ],
    overview: `Designated a UNESCO World Heritage Site in 2023, Bale Mountains National Park contains a staggering spectrum of ecological zones—from the high glacial Afro-alpine tundra of the Sanetti Plateau to the moss-draped tropical cloud canopy of the Harenna Forest.
    
    The park protects over half of the world’s surviving population of the critically endangered Ethiopian Red Wolf (Canis simensis). With an estimated fewer than 500 wolves remaining in the wild, the Sanetti Plateau offers the highest probability on Earth for spotting this magnificent hunter.
    
    Bale is also home to the endemic Mountain Nyala, Menelik’s Bushbuck, Bale Monkeys, and over 300 bird species—including sixteen strictly endemic to the Ethiopian highlands.`,
    highlights: [
      {
        title: 'Sanetti Plateau Wolf Safari (4,000m)',
        image: BaleWolf,
        desc: 'Drive the highest all-weather motorable road in Africa across a surreal moonscape of giant lobelia plants and glacial tarns in search of hunting red wolves.',
        tip: 'Early morning (7:00–9:30 AM) is prime hunting time for wolves tracking giant mole-rats.'
      },
      {
        title: 'Harenna Cloud Forest Trekking',
        image: Bale2,
        desc: 'Descend 2,000 vertical meters through mist into an ancient forest of bamboo, wild forest coffee bushes, and waterfalls.',
        tip: 'Sample wild honey harvested from traditional tree hives by local Beekeepers.'
      },
      {
        title: 'Mount Tullu Dimtu Summit (4,377m)',
        image: BaleMain,
        desc: 'The second highest peak in Ethiopia, easily reachable by road with magnificent views across the south Ethiopian rift.',
        tip: 'Dress warmly in windproof layers; summit winds can be intense.'
      }
    ],
    hotels: [
      { name: 'Bale Mountain Lodge', type: 'Luxury Wilderness Lodge', price: '$$$$', desc: 'Eco-lodge set deep within the Harenna cloud forest featuring log-burning stoves and wild wildlife viewings from your bedroom.' },
      { name: 'Wabi Shebelle Hotel (Goba)', type: 'Standard Tourist Hotel', price: '$$', desc: 'Comfortable base in the town of Goba with hot showers and restaurant.' }
    ],
    restaurants: [
      { name: 'Bale Mountain Lodge Dining Room', cuisine: 'Gourmet Organic', desc: 'Fresh mountain stream trout, wild organic forest honey, and homemade breads.' }
    ],
    logistics: {
      climate: 'Cold highland plateau (8°C–14°C day, dropping below freezing -5°C at night). Rain jacket and down coat essential.',
      clothing: 'Layered thermal clothing, waterproof hiking boots, warm gloves, and binoculars for birdwatching.',
      currency: 'ETB available at banks in Robe and Goba.',
      transport: 'Fly from Addis Ababa to Robe Airport (GOB) via Ethiopian Airlines (45m) or take a scenic 7-hour 4WD drive.'
    },
    faqs: [
      { q: 'What is the likelihood of seeing an Ethiopian Wolf in Bale?', a: 'Over 90%! The Sanetti Plateau has the densest wolf population in existence, and sightings on our 3-day expeditions are virtually guaranteed.' }
    ]
  },

  bahirdar: {
    id: 'bahirdar',
    slug: 'bahirdar',
    route: '/destination/bahirdar',
    name: 'Bahir Dar & Lake Tana',
    amharicName: 'ባሕር ዳር እና ጣና ሐይቅ',
    tagline: 'Source of the Blue Nile — Palm-Fringed Boulevards & Island Monasteries',
    circuit: 'Northern Historic & Lakes Circuit',
    unesco: 'Lake Tana UNESCO Biosphere Reserve',
    elevation: '1,800 m (5,900 ft)',
    coordinates: "11°36'N 37°23'E",
    bestSeason: 'October to May (Falls at highest volume Sept-Nov)',
    recommendedDays: '2 – 3 Days',
    basePriceETB: 13593,
    heroImage: BahirdarMain,
    galleryImages: [
      { path: BahirdarMain, title: 'Palm Boulevards of Bahir Dar', desc: 'Ethiopia’s prettiest lakeside city, lined with royal palms and bougainvillea blossoms.' },
      { path: BlueNileFalls, title: 'Tis Issat (Blue Nile Falls)', desc: 'Known as the "Smoking Water", cascading 45 meters over sheer basalt rock.' },
      { path: LakeTana, title: 'Lake Tana Boat Excursion', desc: 'Navigating Africa’s highest lake and sacred island monasteries in traditional tankwa papyrus boats.' },
      { path: Monastery, title: 'Ura Kidane Mehret Monastery', desc: '14th-century circular monastery covered in masterwork religious paintings and gold crowns.' }
    ],
    overview: `Situated on the tranquil southern shore of Lake Tana—the largest lake in Ethiopia and the sacred source of the Blue Nile—Bahir Dar is a radiant, palm-fringed city renowned for its wide boulevards, vibrant cafe culture, and relaxed lakeside breeze.
    
    Lake Tana is a designated UNESCO Biosphere Reserve sheltering 37 islands, twenty of which house historic Ethiopian Orthodox Christian monasteries founded as early as the 14th century. Hidden amid dense coffee forests, sanctuaries like Ura Kidane Mehret preserve royal crowns of Ethiopian emperors and museum treasuries of ancient illuminated manuscripts.
    
    Thirty kilometers downstream, the mighty Blue Nile plunges over a 45-meter cliff face at Tis Issat ("Smoking Water"), throwing a perpetual rainbow mist into the tropical canopy below.`,
    highlights: [
      {
        title: 'Tis Issat (The Blue Nile Falls)',
        image: BlueNileFalls,
        desc: 'Hike across a 17th-century Portuguese stone bridge to view the thunderous curtain of the Blue Nile as it begins its 5,000km journey toward Egypt and the Mediterranean.',
        tip: 'Best photographed in the morning when sunlight catches the mist to create vivid double rainbows.'
      },
      {
        title: 'Ura Kidane Mehret & Zege Peninsula Monasteries',
        image: Monastery,
        desc: 'Cruise by private motorboat to the Zege Peninsula to tour circular thatched monasteries blanketed in vivid frescoes depicting Biblical tales and Ethiopian saints.',
        tip: 'Stroll along the shaded forest path to sample freshly roasted wild coffee prepared by local monks.'
      },
      {
        title: 'Source of the Blue Nile Boat Safari',
        image: LakeTana,
        desc: 'Explore the tranquil estuary where the Blue Nile flows out of Lake Tana, watching pods of wild hippos and pelicans.',
        tip: 'Late afternoon sunset boat cruises offer stunning reflections across the lake.'
      }
    ],
    hotels: [
      { name: 'Kuriftu Resort & Spa Lake Tana', type: 'Luxury Lakeside Resort', price: '$$$$', desc: 'Handcrafted stone and timber villas right on the water’s edge with infinity pool, spa, and lakeside wine dining.' },
      { name: 'Avanti Blue Nile Hotel', type: 'Modern Lakefront', price: '$$$', desc: 'Lush tropical gardens, swimming pool, and lake-view balconies.' },
      { name: 'Grand Resort & Spa', type: 'Contemporary Hotel', price: '$$$', desc: 'Steps from the boat jetties with modern amenities and scenic breakfast terrace.' }
    ],
    restaurants: [
      { name: 'Kuriftu Lakeview Restaurant', cuisine: 'Fresh Nile Perch & International', desc: 'Crispy fried fish cutlets fresh from Lake Tana, served with fresh herbs, injera, and chilled white wine.' }
    ],
    logistics: {
      climate: 'Pleasant subtropical lakeside weather (26°C–29°C day, 14°C–16°C night).',
      clothing: 'Light breathable clothes, insect repellent for evening lakeside walks, and hat for boat tours.',
      currency: 'ATMs widely available throughout central Bahir Dar.',
      transport: 'Bahir Dar Airport (BJR) connects daily to Addis Ababa (50m) and Lalibela (35m).'
    },
    faqs: [
      { q: 'Can women visit all the island monasteries on Lake Tana?', a: 'Women can visit monasteries on the Zege Peninsula (including Ura Kidane Mehret and Azwa Maryam) and Kebran Gabriel exterior. Some isolated island monasteries like Dega Estifanos are strictly monastic for men.' }
    ]
  },

  awash: {
    id: 'awash',
    slug: 'awash',
    route: '/destination/awash-NP',
    name: 'Awash National Park',
    amharicName: 'አዋሽ ብሔራዊ ፓርክ',
    tagline: 'Great Rift Valley Savanna — Acacia Wildlife, Awash Gorge & Filwoha Hot Springs',
    circuit: 'Rift Valley & Eastern Wildlife Circuit',
    unesco: 'Oldest National Park in Ethiopia (Established 1966)',
    elevation: '750 m – 2,007 m (Mount Fantale)',
    coordinates: "9°00'N 40°00'E",
    bestSeason: 'October to March (Excellent Game Viewing)',
    recommendedDays: '2 Days',
    basePriceETB: 8643,
    heroImage: AwashMain,
    galleryImages: [
      { path: AwashMain, title: 'Awash River Canyon & Falls', desc: 'The powerful Awash River tumbling over volcanic basalt rapids into a deep desert gorge.' },
      { path: AwashFalls, title: 'Awash Falls at Golden Hour', desc: 'Waterfalls framed by doum palms and troops of olive baboons.' },
      { path: AwashPark, title: 'Acacia Savanna Grasslands', desc: 'Home to herds of Beisa oryx, Soemmerring’s gazelles, and over 450 species of birds.' }
    ],
    overview: `Located in the lowlands of the Great Rift Valley just 225 kilometers east of Addis Ababa, Awash National Park is Ethiopia’s oldest wildlife sanctuary. Dominated by the slumbering volcanic caldera of Mount Fantale and split by the dramatic basalt gorge of the Awash River, the park offers an evocative East African savanna experience.
    
    Travelers can spot herds of regal Beisa Oryx with their long straight horns, Soemmerring’s Gazelles, Salt’s Dik-diks, Warthogs, and both Hamadryas and Olive baboons. At the northern end of the park lie the turquoise Filwoha Hot Springs, an oasis of natural thermal pools fringed by desert doum palms.`,
    highlights: [
      {
        title: 'Awash River Falls & Basalt Gorge',
        image: AwashFalls,
        desc: 'Stand on the viewing cliff directly above the roaring falls as crocodiles bask along the lower sandbanks.',
        tip: 'Enjoy an iced drink on the veranda of Awash Falls Lodge overlooking the cascade.'
      },
      {
        title: 'Filwoha Thermal Hot Springs Oasis',
        image: AwashMain,
        desc: 'A surreal turquoise natural pool heated by subterranean volcanic activity, surrounded by doum palms in the desert scrub.',
        tip: 'Look for troops of Hamadryas baboons drinking around the spring at dawn.'
      },
      {
        title: 'Mount Fantale Volcanic Crater Trek',
        image: AwashPark,
        desc: 'A dormant volcano with a massive 3.5km-wide oval caldera showing fresh lava flows and fumaroles.',
        tip: 'Best visited early in the morning before midday desert temperatures rise.'
      }
    ],
    hotels: [
      { name: 'Awash Falls Lodge', type: 'Scenic Riverside Eco-Lodge', price: '$$$', desc: 'Situated right inside the park directly overlooking the Awash waterfalls with open-air terrace dining.' },
      { name: 'Doho Lodge & Hot Springs', type: 'Thermal Spa Resort', price: '$$$', desc: 'Boutique cottages surrounding a natural thermal hot lake with private soaking tubs.' }
    ],
    restaurants: [
      { name: 'Awash Falls Lodge Veranda', cuisine: 'Ethiopian & Grilled Meats', desc: 'Grilled goat chops, roasted vegetable platters, and cold Bedele beer overlooking the river rapids.' }
    ],
    logistics: {
      climate: 'Warm semi-arid rift valley weather (30°C–34°C day, 18°C–20°C night).',
      clothing: 'Light khaki clothing, wide sun hat, insect repellent, and good walking shoes.',
      currency: 'Cash needed for park entry and scout fees; bring from Addis Ababa.',
      transport: 'Paved 3.5-hour highway drive from Addis Ababa via the modern Addis-Adama expressway.'
    },
    faqs: [
      { q: 'Is Awash National Park good for birdwatching?', a: 'Exceptional! Over 450 bird species have been recorded here, including the Kori Bustard (world’s heaviest flying bird), Carmine Bee-eater, and Abyssinian Roller.' }
    ]
  },

  addisAbaba: {
    id: 'addisAbaba',
    slug: 'addisAbaba',
    route: '/destination/Addis-Ababa',
    name: 'Addis Ababa',
    amharicName: 'አዲስ አበባ',
    tagline: 'The Diplomatic Capital of Africa — 3.2-Million-Year-Old Lucy, Mount Entoto & Merkato',
    circuit: 'Central Capital & Cultural Circuit',
    unesco: 'Headquarters of the African Union (AU) & UNECA',
    elevation: '2,355 m – 3,200 m (Mount Entoto)',
    coordinates: "9°01'N 38°45'E",
    bestSeason: 'Year-Round (Best October to May)',
    recommendedDays: '2 – 3 Days',
    basePriceETB: 8000,
    heroImage: AddisMain,
    galleryImages: [
      { path: AddisMain, title: 'Addis Ababa Skyline & Meskel Square', desc: 'The thriving political and diplomatic heartbeat of the African continent.' },
      { path: AddisNationalMuseum, title: 'National Museum of Ethiopia', desc: 'Home to the fossilized skeleton of "Lucy" (Dinknesh), dated to 3.2 million years old.' },
      { path: AddisTrinity, title: 'Holy Trinity Cathedral', desc: 'Imperial resting place of Emperor Haile Selassie and Empress Menen with grand stained glass.' },
      { path: AddisEntoto, title: 'Mount Entoto Eucalyptus Ridge', desc: 'Panoramic mountain park overlooking the metropolis from 3,200 meters elevation.' }
    ],
    overview: `Founded in 1886 by Emperor Menelik II and Empress Taytu, Addis Ababa ("New Flower" in Amharic) is the vibrant diplomatic capital of Africa and the fourth largest diplomatic city in the world, home to the African Union and the United Nations Economic Commission for Africa.
    
    Perched at an invigorating altitude of 2,355 meters at the base of Mount Entoto, Addis Ababa seamlessly marries ancient imperial traditions with a dynamic 21st-century renaissance of art galleries, jazz clubs, coffee roasteries, and culinary revolutions.
    
    At the National Museum, travelers stand face-to-face with humanity’s earliest origins through the fossilized skeleton of "Lucy" (Dinknesh, 3.2 million years old). Visitors can browse the sprawling open-air alleys of the Merkato—the largest open-air market in Africa—and sip world-famous espresso in historic cafe institutions founded in the 1930s.`,
    highlights: [
      {
        title: 'National Museum of Ethiopia & "Lucy"',
        image: AddisNationalMuseum,
        desc: 'View the famous hominid fossil Lucy (Australopithecus afarensis) and royal crowns of the Solomonic emperors.',
        tip: 'Head downstairs to the paleoanthropology gallery first before touring the royal floor.'
      },
      {
        title: 'Mount Entoto & Entoto Natural Park',
        image: AddisEntoto,
        desc: 'Ascend to 3,200m through aromatic eucalyptus groves to explore Menelik II’s historic palace and modern recreational trails.',
        tip: 'Enjoy a gourmet coffee or tea at the Kuriftu restaurant on Entoto ridge with panoramic city views.'
      },
      {
        title: 'Merkato Open-Air Market',
        image: AddisMain,
        desc: 'Explore Africa’s largest market, with dedicated sections for handwoven textiles, aromatic spices, brass coffee pots, and leatherwork.',
        tip: 'Always tour the Merkato with an experienced local guide to navigate the bustling passages comfortably.'
      },
      {
        title: 'Holy Trinity Cathedral (Kidist Selassie)',
        image: AddisTrinity,
        desc: 'The grand granite cathedral housing the ornate stone sarcophagus of Emperor Haile Selassie I and patriotic monuments to anti-fascist fighters.',
        tip: 'Admire the monumental stained-glass windows by Afewerk Tekle.'
      }
    ],
    hotels: [
      { name: 'Sheraton Addis, a Luxury Collection Hotel', type: 'Iconic Luxury 5-Star', price: '$$$$', desc: 'Opulent palace hotel featuring mineral swimming pools, singing fountains, and seven premier restaurants.' },
      { name: 'Hilton Addis Ababa', type: 'Classic Diplomatic Hotel', price: '$$$', desc: 'Historic geo-thermal outdoor swimming pool, tennis courts, and central location near ECA.' },
      { name: 'Hyatt Regency Addis Ababa', type: 'Modern Luxury', price: '$$$$', desc: 'Located on Meskel Square with sleek contemporary design and lively courtyard lounges.' }
    ],
    restaurants: [
      { name: 'Yod Abyssinia Traditional Restaurant', cuisine: 'Cultural Dinner & Live Dances', desc: 'Addis Ababa’s premier cultural feast featuring regional dances from across Ethiopia, honey tej, and fresh injera platters.' },
      { name: 'Tomoca Coffee (Piazza)', cuisine: 'Historic Italian-Style Coffee', desc: 'The oldest roastery in Addis Ababa, founded in 1953, renowned for legendary espresso and macchiatos.' }
    ],
    logistics: {
      climate: 'Perpetual spring-like weather (22°C–25°C day, 10°C–13°C night). Rainy season runs June to mid-September.',
      clothing: 'Smart casual for city dining; light jacket or sweater for cool mountain evenings.',
      currency: 'ATMs on every block; all major international credit cards accepted across hotels and upscale restaurants.',
      transport: 'Bole International Airport (ADD) is the premier African aviation hub connecting to over 130 global cities.'
    },
    faqs: [
      { q: 'Is Addis Ababa safe for walking and exploration?', a: 'Yes. Addis Ababa is widely recognized as one of Africa’s safest capital cities. Standard city precautions against pickpocketing in crowded markets like Merkato are recommended.' }
    ]
  },

  debreDamo: {
    id: 'debreDamo',
    slug: 'debreDamo',
    route: '/destination/debre-damo',
    name: 'Debre Damo',
    amharicName: 'ደብረ ዳሞ',
    tagline: 'The 6th-Century Clifftop Sanctuary — Scaled Exclusively by Plaited Leather Rope',
    circuit: 'Tigray Monastic & Architectural Circuit',
    unesco: 'Ancient Aksumite Monastic Monument',
    elevation: '2,211 m (Clifftop Amba)',
    coordinates: "14°22'N 39°17'E",
    bestSeason: 'October to April',
    recommendedDays: '1 – 2 Days',
    basePriceETB: 6500,
    heroImage: DebreDamoMain,
    galleryImages: [
      { path: DebreDamoMain, title: 'The Sheer Flat-Topped Amba', desc: 'Isolated limestone cliff rising 15 meters vertically above the rugged northern mountain ridge.' },
      { path: DebreDamoRope, title: 'The Leather Rope Ascent', desc: 'Visitors climb a 15-meter vertical cliff face secured by a plaited ox-hide safety rope hauled by monks.' }
    ],
    overview: `Perched atop a sheer, flat-topped mountain mesa (amba) in northern Tigray, Debre Damo is one of the most remote and ancient functioning monasteries in the Christian world. Founded in the 6th century CE by Abuna Aregawi, one of the Nine Saints who came from Syria to spread Christianity across the Aksumite Empire, the monastery is accessible only by scaling a 15-meter sheer vertical rock cliff.
    
    Visitors are hoisted and supported by a thick leather rope made of plaited ox-hide, pulled by welcoming monks who have lived atop the amba for generations.
    
    Atop the mesa stands Ethiopia's oldest intact standing church building, built in pure Aksumite architecture with alternating layers of timber beams and dressed stone, carved wooden ceiling panels, and sacred 1,400-year-old manuscript treasuries. Note: By ancient monastic rule, only male travelers and male animals are permitted to ascend Debre Damo.`,
    highlights: [
      {
        title: 'The Thrilling Leather Rope Climb',
        image: DebreDamoRope,
        desc: 'Climb the 15-meter sheer rock face while strapped securely into an ox-hide harness pulled by supportive monks from above.',
        tip: 'Wear sturdy shoes with good grip; the monks ensure full safety with a secondary backup rope.'
      },
      {
        title: 'The 6th-Century Aksumite Church of Abuna Aregawi',
        image: DebreDamoMain,
        desc: 'Admire the oldest surviving church structure in Ethiopia, constructed with projecting wooden "monkey heads" and geometric beam ceilings.',
        tip: 'Study the ceiling coffered carvings depicting lions, elephants, snakes, and geometric crosses.'
      }
    ],
    hotels: [
      { name: 'Gheralta Lodge (Hawzen)', type: 'Boutique Stone Lodge', price: '$$$', desc: 'World-renowned eco-lodge situated 1.5 hours away, built from local sandstone overlooking the Gheralta rock pinnacles.' }
    ],
    restaurants: [
      { name: 'Gheralta Lodge Restaurant', cuisine: 'Italian-Ethiopian Gastronomy', desc: 'Handmade gnocchi, local goat ragu, freshly baked bread, and fine espresso.' }
    ],
    logistics: {
      climate: 'Sunny and arid (25°C–28°C day, 12°C–14°C night).',
      clothing: 'Comfortable athletic clothing for the rope climb. Modest church cover.',
      currency: 'Bring cash in ETB for donations to the monastic community.',
      transport: '2-hour drive from Axum or Adigrat along the scenic northern mountain road.'
    },
    faqs: [
      { q: 'Who is allowed to visit Debre Damo?', a: 'By ancient monastic decree established in the 6th century, only men (and male domestic animals) are permitted to scale the cliff and enter the monastery. Women can visit nearby rock churches in the Gheralta cluster such as Abuna Yemata Guh and Maryam Korkor.' }
    ]
  },

  debreLibanos: {
    id: 'debreLibanos',
    slug: 'debreLibanos',
    route: '/destination/debre-libanos',
    name: 'Debre Libanos',
    amharicName: 'ደብረ ሊባኖስ',
    tagline: '13th-Century Monastic Fortress, Jemma River Gorge & The Portuguese Bridge',
    circuit: 'Central Highlands & Monastic Circuit',
    unesco: 'Historic National Monastic Sanctuary',
    elevation: '2,400 m (Highland Cliff)',
    coordinates: "9°43'N 38°51'E",
    bestSeason: 'Year-Round (Spectacular waterfalls July to October)',
    recommendedDays: 'Day Trip or Overnight',
    basePriceETB: 5000,
    heroImage: DebreLibanosMain,
    galleryImages: [
      { path: DebreLibanosMain, title: 'Debre Libanos Monastery', desc: 'Founded in 1284 by Saint Tekle Haymanot, long the spiritual headquarters of the Ethiopian Church.' },
      { path: DebreLibanosBridge, title: 'The Portuguese Bridge', desc: 'Historic 16th-century arched stone bridge spanning a roaring gorge with Gelada baboons below.' },
      { path: DebreLibanosGorge, title: 'Spectacular Jemma River Canyon', desc: 'A dizzying 1,000-meter drop into the Blue Nile river tributary valley.' }
    ],
    overview: `Located just 105 kilometers north of Addis Ababa on the edge of the breathtaking Jemma River Gorge, Debre Libanos is one of Ethiopia’s most revered spiritual sanctuaries. Founded in 1284 by the ascetic saint Abuna Tekle Haymanot, the monastery served for centuries as the residence of the Ichege—the supreme administrative abbot of the entire Ethiopian Orthodox Church.
    
    The modern cathedral, built under Emperor Haile Selassie, features magnificent stained-glass windows by master artist Afewerk Tekle and a cave sanctuary where Saint Tekle Haymanot prayed standing on one leg for 29 years until his other leg fell off.
    
    A short walk along the canyon rim leads to the "Portuguese Bridge," an arched stone bridge built in the 16th century spanning a roaring waterfall, with resident troops of Gelada baboons lounging on the cliffs below.`,
    highlights: [
      {
        title: 'The Portuguese Bridge & Waterfall',
        image: DebreLibanosBridge,
        desc: 'Cross the picturesque 16th-century stone arch bridge spanning a 60-meter waterfall plunging into the Jemma canyon.',
        tip: 'Look down onto the grassy ledges to spot troops of wild Gelada baboons playing peacefully.'
      },
      {
        title: 'Cathedral of Saint Tekle Haymanot',
        image: DebreLibanosMain,
        desc: 'Tour the grand mid-century cathedral adorned with stained glass, imperial tombs, and religious museums.',
        tip: 'Visit the sacred spring cave above the monastery where pilgrims gather for holy healing water (Tsebel).'
      },
      {
        title: 'Jemma Valley Overlook',
        image: DebreLibanosGorge,
        desc: 'Gaze out across the 1,000-meter canyon drop as Verreaux’s eagles, lammergeiers, and lanner falcons glide on canyon updrafts.',
        tip: 'A favorite stop for birdwatchers and nature photographers.'
      }
    ],
    hotels: [
      { name: 'Ethio-German Park Hotel', type: 'Scenic Canyon Lodge', price: '$$', desc: 'Tukuls situated directly on the cliff edge overlooking the Portuguese Bridge with outdoor beer garden and warm hospitality.' }
    ],
    restaurants: [
      { name: 'Ethio-German Restaurant', cuisine: 'German-Ethiopian', desc: 'Fresh local trout, goulash, warm bread, and cold draft beer on the canyon veranda.' }
    ],
    logistics: {
      climate: 'Crisp highland air (20°C–23°C day, 10°C–12°C night).',
      clothing: 'Light fleece, walking shoes for rocky gorge trails, and scarf/shawl for cathedral entry.',
      currency: 'Cash needed for monastery entry and bridge tickets.',
      transport: 'Easy 2-hour scenic drive along the paved Gojjam road from Addis Ababa.'
    },
    faqs: [
      { q: 'Is Debre Libanos suitable as a day trip from Addis Ababa?', a: 'Yes! It is one of the most popular and scenic single-day excursions from the capital, easily combined with a visit to the Portuguese Bridge and a cliffside lunch.' }
    ]
  }
};
