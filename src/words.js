export function getRandomWord(){
    const wordsCount = words.length;
    let randomWordsIndex = Math.floor(Math.random() * wordsCount);
    let randomWord = (words[randomWordsIndex]).toLowerCase();
    return randomWord;
}


export const getWordsArray = () => words;
const words = [
    "Able", "Also", "Area", "Back", "Ball", "Band", "Bank", "Base", "Bath", "Bear",
    "Beat", "Been", "Belt", "Best", "Bill", "Bird", "Bite", "Blue", "Boat", "Body",
    "Bold", "Book", "Boom", "Born", "Both", "Bowl", "Burn", "Call", "Calm", "Came",
    "Camp", "Card", "Care", "Case", "Cash", "Cast", "City", "Clip", "Club", "Coat",
    "Cold", "Come", "Cool", "Cook", "Cost", "Coup", "Crow", "Dark", "Data", "Date",
    "Dead", "Deal", "Dear", "Deep", "Desk", "Didn", "Diet", "Dish", "Dive", "Doer",
    "Does", "Done", "Door", "Down", "Draw", "Drop", "Duel", "Dull", "Dust", "Each",
    "Earn", "Easy", "Edge", "Edit", "Else", "Even", "Ever", "Face", "Fact", "Fail",
    "Fair", "Fall", "Farm", "Fast", "Fate", "Fear", "Feel", "Feet", "Fell", "Felt",
    "File", "Fill", "Find", "Fine", "Fire", "Firm", "Fish", "Five", "Flat", "Flow",
    "Gain", "Game", "Gasp", "Gate", "Gave", "Gear", "Gems", "Gift", "Girl", "Give",
    "Glad", "Glen", "Goal", "Goes", "Gold", "Golf", "Gone", "Good", "Grab", "Gray",
    "Grew", "Grey", "Grid", "Grip", "Grow", "Gulf", "Hair", "Half", "Hall", "Hand",
    "Hang", "Hard", "Harm", "Hate", "Have", "Hawk", "Head", "Heal", "Hear", "Heat",        
    "Help", "Here", "Hero", "Hide", "High", "Hill", "Hint", "Hire", "Hold", "Hole",
    "Home", "Hope", "Horn", "Hour", "Huge", "Hunt", "Hurt", "Idea", "Idle", "Into",
    "Iron", "Item", "Jail", "Join", "Jump", "Just", "Keep", "Kept", "Kick", "Kill",
    "Kind", "King", "Kiss", "Knee", "Knew", "Know", "Lack", "Lady", "Lake", "Lamp",
    "Land", "Last", "Late", "Lead", "Left", "Lend", "Less", "Life", "Lift", "Like",
    "Line", "Link", "List", "Live", "Load", "Loan", "Lock", "Long", "Look", "Lord",
    "Made", "Mail", "Main", "Make", "Male", "Mall", "Many", "Mark", "Mass", "Mate",
    "Math", "Meal", "Mean", "Meat", "Meet", "Melt", "Menu", "Mere", "Mess", "Mice",
    "Mile", "Milk", "Mill", "Mind", "Mine", "Miss", "Mode", "Mood", "Moon", "More",
    "Most", "Move", "Much", "Must", "Name", "Nail", "Near", "Neck", "Need", "Nest",
    "News", "Next", "Nice", "Nick", "Nine", "None", "Nose", "Note", "Okay", "Once",
    "Only", "Open", "Oven", "Over", "Pack", "Page", "Paid", "Pain", "Pair", "Palm",
    "Park", "Part", "Pass", "Past", "Path", "Peak", "Pick", "Pile", "Pill", "Pipe",
    "Plan", "Play", "Plot", "Plug", "Plus", "Pole", "Pool", "Poor", "Port", "Post",
    "Pull", "Punk", "Pure", "Push", "Quit", "Race", "Rack", "Rain", "Raise", "Rank",
    "Rate", "Read", "Real", "Rest", "Rice", "Rich", "Ride", "Ring", "Rise", "Risk",
    "Road", "Roar", "Rock", "Role", "Roll", "Roof", "Room", "Root", "Rope", "Rose",
    "Rude", "Rule", "Rush", "Rust", "Safe", "Said", "Sail", "Salt", "Same", "Sand",
    "Save", "Scan", "Seat", "Seek", "Seem", "Seen", "Sell", "Send", "Shot", "Shop",
    "Show", "Shut", "Side", "Sign", "Silk", "Sing", "Sink", "Slam", "Slip", "Slow",
    "Snow", "Soft", "Soil", "Sold", "Solo", "Some", "Song", "Soon", "Sort", "Soul",
    "Spin", "Spot", "Stay", "Stem", "Step", "Stop", "Such", "Suck", "Suit", "Sure",
    "Swap", "Swim", "Tail", "Take", "Talk", "Tall", "Tank", "Tape", "Task", "Team",
    "Tear", "Tell", "Tend", "Term", "Test", "Than", "That", "Them", "Then", "They",
    "Thin", "This", "Thru", "Tide", "Tied", "Ties", "Time", "Tiny", "Tire", "Told",
    "Toll", "Tone", "Tool", "Tour", "Town", "Trap", "Tree", "Trip", "True", "Tuck",
    "Ugly", "Unit", "Undo", "Upon", "User", "Uses", "Urge", "Utah", "Uped", "Ulna",
    "Vain", "Vape", "Vast", "Vault", "Veil", "Vein", "Vent", "Verb", "Very", "Vest",
    "View", "Vine", "Visa", "Vote", "Void", "Vole", "Vary", "Vibe", "Vine", "Vets",
    "Wade", "Wage", "Wait", "Wake", "Walk", "Wall", "Wand", "Want", "Warm", "Warn",
    "Warp", "Wash", "Wave", "Wear", "Weep", "Well", "Went", "West", "What", "When",
    "Whip", "Whit", "Whoo", "Wide", "Wife", "Wild", "Will", "Wind", "Wine", "Wing",
    "Wink", "Wins", "Wish", "With", "Woke", "Wolf", "Wood", "Wool", "Word", "Wore",
    "Work", "Worm", "Wrap", "Wren", "Yard", "Yarn", "Yeah", "Year", "Yell", "Yelp",
    "Yoke", "Your", "Yawn", "Yogi", "Yule", "Zero", "Zest", "Zinc", "Zing", "Zone",
    "Zoom", "Zany", "Zips", "Zulu", "Zeal", "Zine", "Ziti", "Zaps", "Zeds", "Zags"
  ];
  