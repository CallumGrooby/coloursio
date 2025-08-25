import React from "react";

export const HowItWorks = () => {
  return (
    <div className="docs-container">
      <h1 className="header">How it works</h1>

      <p className="content">
        Color Shift has a few main sections: the Playground, the ColorContrast
        tool, and this docs section.
      </p>

      <h3 className="sub-header">Playground</h3>

      <p className="content">
        The Playground is where you build and test your palette. You can change
        Colors, pick fonts, and see how everything looks in real time. It’s set
        up to look like a typical landing page, with sections like a hero,
        about, pricing, testimonials, footer, and a call to action. This way you
        can see how your palette works across a full layout, not just a single
        block.It gives you a much better sense of how your choices will work
        once you're actually designing something.
        <br />
        It features common features that you might find on a mordern day landing
        page;
      </p>

      <ul className="list-disc px-8 content">
        <li>Hero Section with all to action</li>
        <li>About Us</li>
        <li>Pricing</li>
        <li>Testimonials</li>
        <li>Final Call To Action</li>
        <li>Footer</li>
      </ul>

      <h2 className="sub-header">ColorContrast</h2>
      <p className="content">
        This is where you can test if your Colors are accessible. It checks if
        your text has enough contrast against the background using standard
        accessibility rules. That’s super helpful when you’re trying to use
        lighter shades or muted Colors and want to make sure everything is still
        readable.
        <br />
        You don't need to calculate anything yourself. Just plug in your Colors
        and see the results.
      </p>
    </div>
  );
};
