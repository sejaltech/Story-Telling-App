const storyContainer = document.querySelector(".story-container");

const scaryStoryBtn = document.querySelector("#scary-btn");
const funnyStoryBtn = document.querySelector("#funny-btn");
const adventureStoryBtn = document.querySelector("#adventure-btn");

const resultParagraph = document.querySelector("#result");

const storyObj = {
    scary: {
        story: "In the dark woods, a group of friends stumbled upon an old, abandoned cabin hidden behind tall trees. The air was cold and silent. As they stepped inside, the wooden floor creaked loudly. Suddenly, the door slammed shut on its own. They realized they had awakened something evil that had been sleeping there for centuries, watching them from the shadows.",
        borderColor: "#ee4b2b"
    },
    funny: {
        story: "During a camping trip, Mark decided to prove he was a master chef by cooking dinner over an open fire. He added too much spice, burned the food completely, and even managed to singe his eyebrows. His friends couldn’t stop laughing as they ordered pizza instead, teasing Mark for the rest of the trip.",
        borderColor: "#f1be32"
    },
    adventure: {
        story: "Lost deep in the Amazon rain forest, Sarah and Jake discovered an ancient temple covered in vines. Inside, they faced deadly traps, strange creatures, and dark tunnels. Using old maps and hidden clues, they slowly uncovered the secrets of a forgotten civilization, realizing this adventure would change their lives forever.",
        borderColor: "#acd157"
    }
};

function displayStory(genre) {
    if (storyObj[genre]) {
        resultParagraph.textContent = storyObj[genre].story;
        storyContainer.style.borderColor = storyObj[genre].borderColor;
    }
}

scaryStoryBtn.addEventListener("click", () => {
    displayStory("scary");
});

funnyStoryBtn.addEventListener("click", () => {
    displayStory("funny");
});

adventureStoryBtn.addEventListener("click", () => {
    displayStory("adventure");
});
