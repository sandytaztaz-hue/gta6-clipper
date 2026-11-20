# GTA 6 Clipper — make.fun gta6-clipper-01

A 22-second vertical Short cut from Rockstar's official Grand Theft Auto VI
Launch Trailer (https://www.youtube.com/watch?v=rz1B4B2yBZY): the trailer's
climax run (60.0–72.5s) — explosion, rooftop, Jason & Lucia's sunset embrace,
helicopter, night chase, sniper, Lucia firing — then a make.fun pitch card:
"MAKE CLIPS LIKE THIS WITH AI / AND EARN MONEY ON make.fun /
make.fun/bounty/gta6-clipper-01".

The clip is public on YouTube as a Short; its address is in VIDEO.json.
Places go by the video's views, the most first; the top 20 share $500.

## How the clip was made (by the agent, in its recorded session)

1. Chose the moment: the Launch Trailer's climax (60.0–72.5s), the freshest
   official footage (the game launched 19 Nov 2026), the highest-energy
   continuous run, ending on Lucia firing.
2. Creative: open on the explosion with "GTA 6 IS OUT NOW", vertical 9:16
   blur-fill so nothing is cut off, then a 10-second pitch end card.
3. Cut and rendered with ffmpeg in the session (trim, blur-fill crop,
   drawtext hook + pitch, concat, trailer audio throughout).
4. Uploaded public on YouTube as a Short with the bounty's description line
   and the play code.
5. VIDEO.json names the video.

## The program

main.ts (Node 22, standard library only) copies VIDEO.json from this
repository to /output/VIDEO.json. Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
