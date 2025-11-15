---
layout: post
title: "Dream World is Live - Lessons from Building a Unity Shooter/Visual Novel Hybrid"
date: 2025-11-15
author: "Parker Allan"
tags: ["gamedev", "unity"]
excerpt: "Six months of blood, sweat, and AI: My journey building 'Dream World', a shooter/visual novel hybrid that taught me more about scale, creativity, and perseverance than any tutorial ever could."
icon: "fas fa-gamepad"
---

## Dream World is Finally Live!

After many months of development, I'm happy to announce that **Dream World** is now available! This isn't just another project release, it's something I spent many hours testing my creative ability with scripting, 3D art and music through some technologies new to me. Would i say I was successful? In some ways yes, while others not so much. I'll explain below.

## What is Dream World?

Dream World is a unique hybrid game that blends **shooter mechanics with visual novel storytelling**. Built in Unity, it's a short story that follows a protagonist navigating through surreal dreamscapes. The gameplay alternates between intense shootouts and at times dialogue, creating a rhythm that keeps players engaged through both action and depth. My goal was also to learn Unity game development, 3D modeling, and music production from scratch. I had made games before, but never in a large engine or capacity that had other players in mind. Even as I write this now, I've carried over a lot of the skill I've learned with 3D modeling in Blender into other projects that are somewhat far along (like my n64 projects, check them out!).

### Learning (and Learning to Just Start Doing Things)
I spent the first two weeks watching videos on Unity. Watching basic YouTube tutorial on unity 6, how to do little things, how to navigate the engine, C# scripting basics, etc. I did not feel like I was getting anywhere. It's easy to get stuck on mundane or elementary details and this was exactly what was happening - at this rate the game would take a decade by taking everything in little bite sized pieces. Eventually I just "went for it" and started working in-engine. Player movement, physics, collisions, 3rd person camera support, everything you would think you need with a player I started incorporating into a basic capsule object in a empty scene. When it came to scripting, GitHub copilot was incredibly helpful in figuring the tiny details, trying to reference Cinemachine API and nail down the parts of 3rd person camera that were annoying to figure out.

### Version Control Became Critical
With multiple scenes, multiple of weapons, and complex event driven actions, unity version control became my lifeline. I learned the hard way that frequent commits and meaningful branch names aren't just good practice—they're survival necessities. You will need to rollback changes every now and then, it is just the nature of working with elements of the game that can affect every scene.

### Learning 3D Modeling
I never had any exposure to 3D modeling before this, but this was a really fun discovery during this project. I was always fascinated with VR and the 3D models people made, the special effects and so on. Again, as I write this I am working on several high poly models I want to show off on my website using a model viewer at some point, so I invested a lot of time into this. I started small, I really recommend the tutorials by Crashsune on YouTube on how to model, UV wrap, and rig models low poly models. It’s by no means a definitive course, but it is a really good basis if you want to then progress into making higher poly models with shape keys or facial animations that other tutorials out there offer. I started with very basic geometry for my players and some of the later bosses in the game would have tri counts double what the protagonist had! I also got more into some advance rigging, the final boss had wings so flying animations seemed necessary. Animating was difficult at times but I eventually got used to navigating Blender's actions system and quickly editing keyframes.

## The AI Art Experiment: Where I Think Things Went Wrong.

To be completely transparent, the 2D character art in the dialogue for Dream World was entirely created using generative AI. At this stage in development being completely feature complete, I just wanted to put the game together. It wasn't my first choice as I wanted to get good at drawing character sprites, just didn’t feel like I had the time or $ to invest on a drawing tablet to make my own art. I had created some traditional pixel art using Krita on some very small 64x64 texture maps, but with the scope of the project, it demanded much more work than I could put out as one person. What was a reluctant compromise was major learning opportunity - do not cut corners if you can, it will only disappoint yourself.

### The Struggle
My first attempts with AI art were... not good at all. The generated images lacked the cohesion and style I envisioned, since they are anime characters they were really just imitating some one's style and that was painfully obvious when ChatGPT asked if I wanted to try a "Ghibli-style character". Characters looked inconsistent, colors and facial features would randomly change, and the overall aesthetic screamed "AI-generated" in the worst way. I was frustrated and considered just leaving out character sprites, though I couldn't as it would ruin the immersion.

### Creativity Catalysts
The upset with the AI art limitation made me more creative and ambitious in a way. I immediately got more motivated to teach myself traditional art and digital art in order to draw anime characters and environmental backdrops. I felt like there was no concession to be made, I had to learn and get better as an artist through the manual process.

### Quality vs. Quantity: Finding Balance
Early on, I tried to make everything perfect, it will never be perfect how many times you playtest or tweak things, at some point you have to put it out into the world for people to play, to like it, to hate it or to be indifferent about it. I've held on to this game since august 6th and here we are November 15th over 4 months later, it's well overdue. When something clicked it drove me crazy. I would lay my head down in my bed and immediately it would come to me. What was causing "that bug" or something I could try in a way I didn’t think of before. I'd immediately get back up to work again out of risk of forgetting this revelation. If you also do this, I suggest letting this trait go, it really will drive you crazy once you've lost enough sleep.

### The Importance of Playtesting
We always think we can predict what players would enjoy being that we are gamers. I was wrong. Playtesting revealed many issues with my control scheme or camera system, I still not entirely happy with the camera system, but it gave me an opportunity to fix many issue through multiple rounds of playtesting. Listen to your players, they see what you can't.

### Burnout is Real
Six months of intense development taught me about sustainable work habits. Taking breaks, maintaining work-life balance, and recognizing when to step away aren't signs of weakness even though they may feel like it in the moment. This is pretty much what everyone tells you if you've have a job with long hours, so it probably doesn't need much explanation.

## Final Thoughts

Dream World represents more than just a game. It's a milestone in me having a creative outlet, learning more about how my favorite media is made and getting more of my own work out there. By no means am I anti-AI I just think that generative AI is not nearly as advance as it is said to be. It gives me more respect for the manual process whether it is drawing, painting, or whatever, being able to conceptualize, rough draft it, and refine it from there. I guess out of my own habits I want to learn things fast, which comes with its own compromises in the end.

Anyways, thanks for reading, and here's to more ambitious projects ahead!

---
## Check It Out
Dream World is available here on itch.io: [https://nerix90.itch.io/dream-world](https://nerix90.itch.io/dream-world). 
Let me know your thoughts! Thanks
