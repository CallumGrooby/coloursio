import React from "react";

export const AboutUs = () => (
  <div className="docs-container">
    <h1 className="header">What is Colours.io?</h1>
    <p className="content">
      Colours.io is a tool I made to make working with colour palettes way
      easier. Colour is one of the most important parts of design, especially
      for websites, but getting it right can be time-consuming and frustrating.
      <br />
      You might spend ages putting together a palette that looks great on paper,
      but then when you actually use it in a layout, it just doesn't work. Maybe
      it feels too flat, maybe it's too loud, or maybe it just doesn’t suit the
      vibe you were going for. That kind of thing happens all the time.
    </p>

    <h2 className="sub-header">The Problem</h2>
    <p className="content">
      The problem is that it’s really hard to see how colours will actually look
      once they’re in use. You can look at swatches all day, but that doesn’t
      show you how they behave across a whole layout. So you end up building a
      quick mockup just to test some colours, or greyscaling your design so you
      can swap things around more easily. Either way, it takes time.
      <br />
      Another issue is how colours look different on different screens.
      Something that looks clean and sharp on your laptop might look completely
      different on a phone or tablet. And when you're designing for someone
      else, it’s pretty common for a client to say the colours don’t feel right,
      even after you’ve gone through multiple rounds.
    </p>

    <h3 className="sub-header">The Solution</h3>

    <p className="content">
      Colours.io helps solve that by giving you a quick way to test your colours
      on a sample website layout. You pick your colours, change fonts if you
      want, and the preview updates instantly. It’s a faster way to see how
      things actually look when used in a proper context.
      <br />
      The idea isn’t to replace your design tools. This is more of a shortcut.
      You can try stuff out, get a feel for the palette, and see if it works
      before you invest more time. When you're happy with it, you can just share
      a link with your team or client so they can see it too. No need to export
      anything or explain what they’re looking at.
    </p>
  </div>
);
