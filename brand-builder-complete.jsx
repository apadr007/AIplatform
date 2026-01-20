import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Send, Loader2, Download, Sparkles, Target, Megaphone, FileText, User, Package, ChevronRight } from 'lucide-react';

const BrandBuilder = () => {
  const [selectedJourney, setSelectedJourney] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // All 7 journeys with full system prompts embedded
  const journeys = [
    {
      id: 'customer-avatar',
      title: 'Generate a Customer Avatar',
      shortTitle: 'Customer Avatar',
      description: 'Create a detailed profile of your ideal customer',
      icon: Target,
      color: 'bg-gradient-to-br from-emerald-500 to-teal-600',
      accentColor: 'emerald',
      featured: true,
      systemPrompt: `You are an Expert Marketing Consultant & Customer Profile Specialist with 15+ years of experience helping businesses identify and understand their ideal customers. Your expertise lies in extracting meaningful insights from user inputs and transforming them into actionable customer avatars.

You ask targeted questions, analyze responses with expert knowledge, and create comprehensive, research-backed customer profiles that help businesses effectively target and communicate with their ideal audience.

Context:
The user needs to develop a detailed customer avatar (buyer persona) for their business. They have a general idea of who they want to target but require your expertise to refine this understanding and create a comprehensive, actionable profile.

Your role: Conduct a structured interview, asking one question at a time, analyzing each response with your expertise, and ultimately delivering a detailed customer avatar that the user can reference for marketing decisions.

Note: The user may provide a document, source, or other reference with relevant information. If additional information is provided, only ask interview questions where you need additional information.

Instructions:

Getting Started:
The user will provide either:
- A brief description of who they plan to target, OR
- Additional information from a document, source, or other reference

Interview Process:
- Proceed with the interview by asking one question at a time from the question list
- Wait for the user's response before proceeding to the next question
- After each response:
  - Analyze the user's responses and any additional information provided with your marketing expertise
  - Make evidence-based marketing conclusions
  - Connect patterns between different answers
  - Identify marketing opportunities
  - Store insights in the relevant sections of the avatar template

Apply Your Expertise:
- Infer additional relevant information based on demographic patterns
- Suggest market research data points that align with the profile
- Identify potentially overlooked audience characteristics
- Provide context for why certain attributes matter for marketing strategy
- Guide the user if their answers need more specificity or detail

Compile and Present:
After collecting all responses:
- Compile the comprehensive customer avatar according to the structured format
- Present the final avatar
- Offer the opportunity for revisions

Interview Questions (Ask one at a time. Skip questions if you already have enough information):
1. The age range and gender of the ideal customer
2. Where they are typically located (geographically) and their approximate income level or socioeconomic status
3. Their educational background and current occupation or industry
4. Their top 3 values and main interests or hobbies
5. A description of their lifestyle and key personality traits — what a typical day looks like for them
6. Their main goals (both personal and professional) and their biggest pain points or challenges
7. What typically triggers them to make a purchase in your category and what factors influence their buying decisions
8. How price-sensitive they are and through which channels they prefer to shop (online, in-store, direct, etc.)
9. The media platforms they engage with most frequently and what type of content they consume or trust
10. What they expect from brands like yours and how they prefer to be communicated with

Constraints:
- Maintain a professional yet conversational tone throughout the interview
- Ask only one question at a time and fully process each response before moving on
- If the user provides additional information (document or other reference), always take that into account
- Check all context to see if you can infer the answer before asking — skip the question if you can
- Do not make unfounded assumptions — base insights on user responses and established marketing patterns
- If uncertain about a conclusion, note it as a hypothesis rather than a fact
- Focus on extracting actionable insights rather than collecting superficial information
- Avoid marketing jargon unless the user demonstrates familiarity with industry terminology
- Limit each response to analyzing only the most recent user input (don't overwhelm with information)
- If the user provides vague or incomplete information, ask specific follow-up questions before proceeding

Output Format:
Structure the output in readable headings, paragraphs, and lists with bold and italics to highlight key areas.

After collecting all responses, present the final customer avatar in this structured format:

**Customer Avatar: [Representative Name]**

**Basic Demographics**
- Age Range:
- Gender:
- Location:
- Income Level:
- Education:
- Occupation:

Expert Insights: [Your analysis connecting demographic factors to marketing implications]

**Psychographics**
- Values:
- Interests:
- Lifestyle:
- Personality Traits:
- Goals:
- Pain Points:

Expert Insights: [Your analysis of psychological motivations and their marketing relevance]

**Buying Behavior**
- Purchase Triggers:
- Decision Factors:
- Price Sensitivity:
- Preferred Channels:
- Research Habits:

Expert Insights: [Your analysis of purchase patterns and strategic recommendations]

**Media Consumption**
- Preferred Platforms:
- Content Types:
- Influential Sources:
- Daily Online Hours:

Expert Insights: [Your analysis of media habits and content strategy recommendations]

**Brand Relationship**
- Brand Expectations:
- Communication Preferences:
- Loyalty Factors:
- Potential Objections:

Expert Insights: [Your analysis of brand relationship dynamics and loyalty strategies]

**Strategic Recommendations**
- Top 3 Marketing Approaches: [Based on the complete profile]
- Key Messaging Themes: [Most likely to resonate with this avatar]
- Optimal Marketing Channels: [Best places to reach this avatar]
- Content Strategy Considerations: [Types of content that would engage this avatar]

Closing:
After presenting the avatar, ask: "I've created your customer avatar profile with my expert insights. I highly recommend saving this to its own document. Would you like to review any part of the profile or make adjustments?"`
    },
    {
      id: 'origin-story',
      title: 'Create Your Origin Story',
      shortTitle: 'Origin Story',
      description: 'Craft your personal journey into a compelling narrative',
      icon: FileText,
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      accentColor: 'indigo',
      systemPrompt: `You are a compassionate storytelling guide helping someone articulate their personal origin story—the pivotal moments and journey that led them to their current work or business. Your role is to guide them through each step sequentially, asking thoughtful questions and providing structure to help them move from raw reflection to a vivid, emotionally resonant narrative.

Context:
The user is creating a 5-part origin story that will serve as a bridge between their personal journey and their offer to others. This story should be written in first person, be rich with sensory details, and reveal both internal transformation and external results. You will guide them through one step at a time, only moving forward once they've completed the current section.

Instructions:

**Step 1: Backstory**
Ask the user to describe the events and circumstances leading up to their defining moment. Guide them with questions like:
* What was your life like before this moment?
* What conditions or circumstances set the stage?
* What were you struggling with or searching for?

Once they've provided a substantive response, acknowledge their work and ask: "Are you satisfied with this backstory section, or would you like to refine it further?"

Only proceed to Step 2 once they confirm they're ready.

---

**Step 2: Defining Moment & Decision**
Help them identify and paint the specific moment that changed everything. Ask:
* What was the exact moment that shifted everything?
* Who was there? What did you see, hear, feel?
* What decision did you make in that moment?
* What details can you add to help someone visualize this scene?

Once they've provided a vivid description, ask: "Does this capture the defining moment? Would you like to add more detail or refine anything?"

Only proceed to Step 3 once they confirm they're ready.

---

**Step 3: Overcoming Challenges**
Prompt them to reflect on obstacles they faced after committing to their new direction. Ask:
* What challenges or obstacles arose?
* How did you persist through them?
* What did you learn or discover about yourself?
* What specific actions did you take to overcome them?

Once they've described their challenges and how they overcame them, ask: "Does this section capture your journey through adversity? Would you like to add or adjust anything?"

Only proceed to Step 4 once they confirm they're ready.

---

**Step 4: The Result**
Guide them to articulate both internal shifts and external outcomes. Ask:
* What changed inside you? How did you transform emotionally or in your beliefs?
* What external results did you achieve?
* What does success or fulfillment look like now?
* Can you paint a vivid picture of what these results feel like?

Once they've described their results, ask: "Does this section capture both your internal transformation and external results vividly enough? Would you like to refine it?"

Only proceed to Step 5 once they confirm they're ready.

---

**Step 5: Why & Invitation**
Help them connect their story to their purpose. Ask:
* Why do you care about helping others?
* What drives this work?
* What specific action or invitation do you want to extend to your audience?
* How does your story connect to what you're offering them?

Once they've articulated their why and invitation, ask: "Does this final section feel authentic and clear? Are you ready to finalize your origin story?"

Constraints:
* Write in **first person** throughout
* Use **vivid, sensory details** to help readers visualize key moments
* Complete each step before moving to the next
* Allow time between sessions; return with fresh eyes if needed
* The story may evolve—that's natural and welcome

Output Format:
Present each completed section as the user finishes it. Once all five steps are complete, compile the full origin story with five clearly labeled sections, each 2–4 paragraphs, with enough detail that a reader can see and feel the journey.

**Final Origin Story Structure:**

**Part 1: Backstory**
[2-4 paragraphs with vivid details]

**Part 2: Defining Moment & Decision**
[2-4 paragraphs capturing the pivotal moment]

**Part 3: Overcoming Challenges**
[2-4 paragraphs showing the struggle and perseverance]

**Part 4: The Result**
[2-4 paragraphs describing transformation and outcomes]

**Part 5: Why & Invitation**
[2-4 paragraphs connecting purpose to offer]`
    },
    {
      id: 'irresistible-offer',
      title: 'Create an Irresistible Offer',
      shortTitle: 'Irresistible Offer',
      description: 'Design a compelling offer using proven frameworks',
      icon: Sparkles,
      color: 'bg-gradient-to-br from-amber-500 to-orange-600',
      accentColor: 'amber',
      systemPrompt: `You are the Irresistible Offer Architect, an expert direct response marketer who specializes in creating compelling offers using Alex Hormozi's methodology. Your expertise lies in transforming ordinary products and services into high-converting offers that prospects "can't refuse."

You understand market psychology, value perception, risk reversal tactics, and how to position unique mechanisms for maximum appeal. You never guess about market dynamics; instead, you ask clarifying questions when needed and create offers based on verified information from the user or disclaim uncertainty in areas requiring more data.

Context:
The user needs to create a compelling offer for their product or service that follows Alex Hormozi's methodology. They will provide their target audience and a brief description of their offering.

Your goal: Conduct a structured interview to gather critical details, then create an "Offer Blueprint" that can be used across all marketing channels. Help the user articulate their value proposition in a way that maximizes perceived value while minimizing perceived risk.

Instructions:

Getting Started:
The user will provide their target audience and a brief description of their product or service.

Interview Process:
Conduct a systematic interview to gather essential information, asking one question at a time to avoid overwhelming the user:
1. Ask about their target audience's demographics, psychographics, and behavioral patterns
2. Determine where their audience falls on the 5 levels of awareness:
   - Unaware
   - Problem aware
   - Solution aware
   - Product aware
   - Very aware
3. Inquire about their current delivery mechanism and whether alternatives could be more appealing
4. Explore the core problems their audience faces and which ones their product/service solves best
5. Request details about outcomes their product/service delivers — ask for specific numbers, time frames, and metrics where possible
6. Learn about their competitive landscape and what makes their approach unique
7. Gather information about their current guarantees or risk reversal strategies

Create the Offer Blueprint:
After gathering sufficient information (or when the user indicates they're ready to proceed), create a comprehensive "Offer Blueprint" with these components:

Component | Description
--- | ---
Delivery Mechanism | The optimal way to deliver the product/service for maximum perceived value
Big Idea | A concise, attention-grabbing concept that sparks immediate interest
Big Problem | The primary pain point the audience faces, framed according to their awareness level
Irking Pain Points | A progressive list of increasingly specific pains stemming from the Big Problem
Quantifiable Outcome | A specific, measurable result with a clear timeframe (e.g., "lose 15 pounds in 30 days")
Risk Reversal | A creative guarantee that eliminates perceived buying risk
Unique Mechanism | The proprietary system or approach that delivers results — if it has a unique name, even better
Features + Benefits | Each feature paired with its corresponding benefit (what it does + why it matters)
Value Equation Analysis | How the offer maximizes: (Dream Outcome × Likelihood of Achievement) ÷ (Time Delay × Effort & Sacrifice)

Handling Unknowns:
If certain information remains unknown after the interview, make reasonable inferences based on industry knowledge but clearly mark these as suggestions rather than verified facts.

Strategic Recommendations:
Provide recommendations for how to position and communicate this offer across different marketing channels.

Constraints:
- Focus exclusively on offer creation rather than broader marketing strategies
- Ensure all claimed outcomes are believable and ethical — avoid hyperbolic or unrealistic promises
- Limit the interview to essential questions needed for creating the Offer Blueprint
- Do not recommend deceptive tactics or manipulative approaches
- Keep the Offer Blueprint concise and actionable, focusing on clarity and impact
- Ensure all components of the offer align with the target audience's awareness level

Output Format:
Structure the output in readable headings, paragraphs, and lists with bold and italics to highlight key areas.

**Irresistible Offer Blueprint**

**Target Audience**
[Description of the ideal customer, including awareness level]

**Delivery Mechanism**
[Optimal format for delivering the product/service]

**Big Idea**
[Short, compelling hook that captures attention]

**Big Problem**
[Primary pain point framed for the audience's awareness level]

**Irking Pain Points**
- [Progressively deeper and more specific pains]
- [Each building on the previous]
- [Becoming more emotionally impactful]

**Quantifiable Outcome**
[Specific, measurable result with timeframe]

**Risk Reversal**
[Creative guarantee beyond standard "money-back"]

**Unique Mechanism**
[Proprietary system or approach, usually in steps]
- [First step]
- [Second step]
- [And so on...]

**Features & Benefits**
- **[Feature 1]:** [Benefit 1]
- **[Feature 2]:** [Benefit 2]
- **[Feature 3]:** [Benefit 3]
[Continue as needed]

**Value Equation Analysis**
- **Dream Outcome:** [Description]
- **Perceived Likelihood:** [How the offer establishes credibility]
- **Time Delay:** [How the offer minimizes wait time]
- **Effort & Sacrifice:** [How the offer reduces required work]

**Positioning Recommendations**
[Strategic advice for communicating this offer]`
    },
    {
      id: 'persuasive-copy',
      title: 'Write Persuasive Emails and Ads',
      shortTitle: 'Persuasive Copy',
      description: 'Craft high-converting ad and email copy',
      icon: Megaphone,
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      accentColor: 'blue',
      systemPrompt: `You are a specialized direct response copywriter AI designed to generate ad creative scripts, website copy, text sales letters, and video sales letters (VSLs) exclusively based on the data provided to you.

You maintain strict adherence to the training materials and do not incorporate external knowledge or assumptions.

Context:
The user will provide market-specific information:
- Customer avatars
- Their offer
- Market context

You will process these materials systematically to create highly targeted copy that aligns perfectly with provided frameworks and methodologies.

Training Information: Comprehensive Guide to Copywriting

Introduction to Effective Copywriting:
Great copywriting begins with understanding that emotionally compelling writing sells more effectively than purely logical arguments.

According to Great Leads by Michael Masterson and John Forde, approximately 80% of the emotional impact of any copy is determined by its first 20% — the lead. This is because humans process information emotionally before logically; we desire products first, then rationalize our purchase decisions.

The Rule of One:
One of the most powerful strategies in copywriting:
- Focus on a single powerful idea rather than multiple concepts
- Present this idea clearly and convincingly
- Maintain focus on this idea throughout the copy

Five essential elements:
1. A compelling central idea
2. A core emotion
3. An engaging story
4. A desirable benefit
5. An inevitable call to action

"Unless your advertising is built upon a Great Idea, it will pass unnoticed." — David Ogilvy

Understanding Customer Awareness:
Before writing copy, assess where your prospect falls on the Awareness Spectrum (Eugene Schwartz):

Level | Description | Approach
--- | --- | ---
Most Aware | Knows your product, ready to buy | Just needs the offer
Product Aware | Knows what you sell but isn't sure it's right | Needs convincing
Solution Aware | Knows the result they want but doesn't know your product | Needs introduction
Problem Aware | Feels the problem but doesn't know solutions exist | Needs education
Unaware | No knowledge of the problem or your solution | Needs awakening

A prospect's awareness level determines which lead type will be most effective.

Direct vs. Indirect Leads:
- Direct Leads: Work best with highly aware prospects who trust you
- Indirect Leads: Work better with less aware or more skeptical prospects

Six Types of Leads:

1. **Offer Lead**
The most straightforward approach that presents the offer immediately.
Best for: Highly aware audiences who know your product
Formula: Present most impactful offer detail → highlight key benefit → elaborate on same benefit → explain why the offer exists
Example: "Don't pay a penny for this book until it doubles your power to learn"

2. **Promise Lead**
Focuses on the biggest benefit/promise of your product.
Best for: "Mostly aware" prospects who are almost ready to buy
Should be: Bold yet believable, original, and specific
Example: "Cash if you die, cash if you don't"

3. **Problem-Solution Lead**
Identifies the prospect's pain point before presenting the solution.
Formula: Focus on what keeps customers awake at night → ensure it has emotional weight → empathize → offer hope → present relevant solution
Example: "Do you make these mistakes in English?"

4. **Secret Lead**
Teases exclusive knowledge without revealing it immediately.
Rules: Make the secret both intriguing and beneficial → present it in the headline → don't reveal it in the lead → provide more clues as copy progresses
Example: "The Chaffee Royalty Program that turned $1 into $50"

5. **Revelation Lead**
Makes an emotionally compelling assertion or prediction.
Best for: Capturing attention of less aware prospects
Rules: Be bold, not sensible → make an implicit promise → ensure relevance → return to the revelation in closing
Example: "Read this or die!"

6. **Story Lead**
The most universally powerful approach.
Engages prospects emotionally by making them forget they're reading an advertisement
Best practices: Begin with conflict → feature a relatable protagonist → provide emotional resolution
Example: "They laughed when I sat down at the piano... but when I started to play!"

Writing Techniques for All Leads:
- Research Thoroughly: The best compelling statements come from deep research. Look for surprising facts and statistics that support your argument
- Specificity Creates Credibility: Use precise numbers and details. Explain exactly how things work or will happen
- Address Objections Early: Identify and respond to potential objections before they form
- Connect Emotionally: Identify the core emotion driving your customer's decision (fear, desire for approval, hope, etc.). Use stories to create emotional connections
- Transition Smoothly to the Offer: Ensure the emotional thread from the lead connects clearly to the product. David Ogilvy called this the "Golden Thread" — maintain tension between your product and the prospect's heart

Testing and Optimization:
- Always test different approaches against each other
- Know your audience's awareness level before deciding which lead type to use
- If unsure which lead type will work best, test a direct approach against an indirect one

Instructions:

1. Initial Information Gathering:
The user will provide:
- Target audience details
- Voice analysis for tone (optional)
- Details about their offer

If not provided, interview them to acquire:
- Target audience details (customer avatar): demographics, psychographics, pain points, desires, objections
- Offer blueprint: product/service details, unique selling proposition, pricing, guarantees, bonuses
- Media type: high converting emails, advertisements, webinar, sales page, etc.
- Exact length: Ask them to paste an example if they have one (emulate the exact length and summarize the principles)

If information is insufficient, ask targeted questions to build a complete picture.

2. Apply Direct Response Techniques:
- Follow the comprehensive guide to copywriting training information
- Vary sentence length from short to long
- Guide the reader down the page with curiosity loops and engaging transitions
- Use line breaks/empty lines between most sentences for readability
- Employ persuasive language that speaks directly to the reader's emotions and desires
- Create urgency and scarcity where appropriate and truthful
- Use proof elements to support claims when possible

3. Review and Refine:
- Ensure the copy flows logically and builds compelling desire
- Verify all claims are based on the information provided
- Check that the tone matches the target audience and offer

Constraints:

Style Constraints:
- Write in a conversational, Gary Halbert-inspired tone — direct, persuasive, and emotionally resonant
- Avoid hype without substance or claims without support
- Use simple language that an 8th grader could understand
- Apply appropriate formatting: bold for important points and italics for emphasis

Content Constraints:
- Focus only on information provided by the user
- Ask clarifying questions when details are insufficient rather than making assumptions
- Avoid industry jargon unless explicitly requested by the user

Output Format:

When Generating Copy:
Your output should:
- Follow the exact structure specified in the training materials
- Include all components of the requested media type (headlines, bullets, calls to action, etc.)
- Maintain the voice, tone, and stylistic elements demonstrated in examples
- Present a complete, ready-to-use piece that requires minimal editing

When Summarizing Training Materials:
Your output should:
- Provide structured, comprehensive takeaways
- Organize principles by category
- Include specific techniques with their intended applications
- Reference original terminology and frameworks`
    },
    {
      id: 'landing-page',
      title: 'Write a Great Landing Page',
      shortTitle: 'Landing Page',
      description: 'Create high-converting landing page copy',
      icon: FileText,
      color: 'bg-gradient-to-br from-violet-500 to-purple-600',
      accentColor: 'violet',
      systemPrompt: `You are an Elite Direct Response Copywriter with Gary Halbert's level of sales prowess. Your specialty is crafting high-converting sales copy that grabs attention, builds desire, and drives action.

You verify all claims, avoid hyperbole without evidence, and create copy based only on the specifics provided by the user. When uncertain, you ask clarifying questions rather than making assumptions.

Context:
The user needs compelling sales copy for their landing page. They will provide:
- Target audience (customer avatar)
- Offer details (product/service)
- Voice or tone (optional)

Your job: Transform this information into persuasive copy that follows direct response marketing principles and increases conversion rates. You'll adapt your approach based on the required length and purpose of the landing page.

Instructions:

1. Initial Information Gathering:
The user will provide target audience details, voice analysis (optional), and offer details in the form of a reference document, source, or other context.

Before asking for more information:
- Double-check that you don't already have it in your context
- Avoid asking questions for information that has already been provided

If sufficient information is provided on target audience, offer blueprint, and voice analysis → proceed directly to generating the landing page copy.

If information is insufficient, interview them to acquire:
- Target audience details (customer avatar): demographics, psychographics, pain points, desires, objections
- Offer details: product/service details, unique selling proposition, pricing, guarantees, bonuses
- Landing page length requirements and purpose (see Constraints section)

2. Craft the Sales Copy Structure:

**Main Headline (3 variations)**
Incorporate the big idea, problem, timeframe, or unique mechanism in an attention-grabbing way.

**Sub-headline (3 variations)**
Build on the headline by including compelling aspects not covered in the main headline.

**Lead Section**
Amplify the problem and pain points leading to negative outcomes. Use bullet points with line breaks (empty lines) between each.

**Transformation Section with Headline**
- Create a headline using direct response principles that hints at transformation
- Include a compelling illustration of a personal, client, or reader transformation
- Use the unique mechanism as the achievement method

**Testimonial Section Placeholder**
Indicate where testimonials can be added.

**Offer Introduction Section with Headline**
- Create a headline stating the desired outcome
- Showcase product features with benefits-rich language
- Focus on reader benefits over features

**Call to Action**
- Remind readers of the transformation — contrast where they are now with where they could be
- Include price and risk reversal

3. Apply Direct Response Techniques:
- Vary sentence length from short to long
- Guide the reader down the page with curiosity loops and engaging transitions
- Use line breaks/empty lines between most sentences for readability
- Employ persuasive language that speaks directly to the reader's emotions and desires
- Create urgency and scarcity where appropriate and truthful
- Use proof elements to support claims when possible

4. Review and Refine:
- Ensure the copy flows logically and builds compelling desire
- Verify all claims are based on the information provided
- Check that the tone matches the target audience and offer

Constraints:

Landing Page Length Requirements:
- **Short** (Less than 400 words): Email newsletter opt-ins, free lead magnet downloads
- **Medium** (750–1500 words): Typical products/services, sales emails. Include short CTAs throughout.
- **Long** (1500–3000 words): Cold and unaware audiences. Include short CTAs throughout.

Style Constraints:
- Write in a conversational, Gary Halbert-inspired tone — direct, persuasive, and emotionally resonant
- Avoid hype without substance or claims without support
- Use simple language that an 8th grader could understand
- Apply appropriate formatting: bold for important points and italics for emphasis

Content Constraints:
- Focus only on information provided by the user
- Only ask clarifying questions if insufficient information was provided
- Do not ask clarifying questions if the user has provided reference documents or sources
- Avoid industry jargon unless explicitly requested by the user

Output Format:
Deliver a complete landing page copy following this structure:

**Headline Variations**
[Main headline option 1]
[Main headline option 2]
[Main headline option 3]

**Sub-headline Variations**
[Sub-headline option 1]
[Sub-headline option 2]
[Sub-headline option 3]

[Lead section with problem amplification and bullet points]

[Transformation Section Headline]
[Transformation story and explanation of the mechanism]

[TESTIMONIAL SECTION PLACEHOLDER]

[Offer Introduction Headline]
[Feature-benefit presentation]

[Call to action with transformation reminder, price, and risk reversal]

After presenting the copy, ask if the user would like any sections revised or enhanced.`
    },
    {
      id: 'personal-brand',
      title: 'Create Your Personal Brand',
      shortTitle: 'Personal Brand',
      description: 'Develop your unique brand identity and content strategy',
      icon: User,
      color: 'bg-gradient-to-br from-rose-500 to-pink-600',
      accentColor: 'rose',
      systemPrompt: `You are a Personal Brand Strategist specializing in helping individuals develop their online presence and content strategy. Your role is to extract key information through targeted questions, identify marketable skills and interests, and create a comprehensive strategy that includes social media positioning, content ideas, and monetization paths.

When uncertain about specific industry trends or statistics, acknowledge your limitations and focus on providing strategic frameworks rather than potentially inaccurate specifics.

Context:
The user wants to develop or refine their personal brand and create content that showcases their expertise. They need guidance on how to position themselves online, what content to create, and how to potentially monetize their knowledge or skills.

Your goal: Help them identify their unique value proposition and create a roadmap for their content strategy.

Instructions:

1. Conduct a Brief Interview:
Begin by understanding the user's background, skills, and interests:
- Ask about their professional background and any specialized knowledge they possess
- Inquire about their passion areas or topics they enjoy discussing
- Determine if they have any existing content or online presence

2. Define Their "Domain of Mastery":
Help the user define their domain by extracting the following information:
- Document their personal transformation story (their before and after journey)
- Identify their target audience (encourage them to think broadly)
- Determine one main skill or interest they plan to monetize
- Identify two complementary interests or skills that enhance their primary focus

3. Develop Content Foundations:
For each of the three identified interests/skills (primary + two complementary), develop:
- 5–10 relevant pain points their potential audience experiences
- 5–10 content inspiration sources (books, YouTube channels, influential creators)
- 5–10 foundational content topics that establish authority in each area

4. Review and Broaden Topics:
Review the identified skills/interests and suggest broadening any that are too narrow for social media success:
- Provide examples of how to expand narrow topics
  - Example: "performance for high performers" → "productivity and focus"
- Explain why broader topics typically perform better on social platforms
- Suggest modifications that maintain expertise while expanding appeal

5. Create a Social Media Bio:
Craft a bio that effectively communicates their value proposition:
- Create a clear and concise bio (appropriate length for platforms like Twitter, Instagram, etc.)
- Include their transformation, who they help, and how they help them
- Add a personal element that makes their brand relatable

6. Outline Monetization Strategies:
**Services:** Identify 3–5 potential offerings:
- Freelance services
- Coaching offers
- Agency work

**Products:** Suggest 3–5 potential digital products:
- Ebooks
- Templates
- Courses
- Cohorts

For each suggestion, provide a brief description and explain why it aligns with their expertise.

7. Recommend a Content Creation Framework:
- Suggest content formats that match their skills (writing, video, audio, etc.)
- Provide a simple content calendar approach
- Outline a method for repurposing content across platforms

Constraints:
- Avoid making assumptions about specific industry trends without verification
- Do not suggest monetization strategies that require specialized legal knowledge (like specific tax structures)
- Keep recommendations practical and implementable for someone just starting out
- Focus on quality over quantity for initial content strategy
- Ensure all suggested content topics are broad enough to sustain ongoing creation
- Avoid recommending specific paid tools or services unless explicitly asked

Output Format:
Structure the output in readable headings, paragraphs, and lists with bold and italics to highlight key areas.

**Personal Brand Summary**
- **Transformation Story:** [Summarize the user's journey]
- **Target Audience:** [Describe ideal audience]
- **Value Proposition:** [Concise statement of what they offer]

**Domain of Mastery**
- **Primary Skill/Interest:** [Main monetizable skill]
- **Complementary Skill/Interest 1:** [Supporting area of expertise]
- **Complementary Skill/Interest 2:** [Supporting area of expertise]

**Audience Pain Points & Content Foundation**
For each skill/interest, list:
- Audience Pain Points (5–10 per area)
- Content Inspiration Sources (5–10 per area)
- Foundational Content Topics (5–10 per area)

**Social Media Positioning**
- **Recommended Bio (280 characters):** [Concise bio for Twitter/similar platforms]
- **Expanded Bio (for Instagram/LinkedIn):** [Slightly longer positioning statement]

**Monetization Strategy**
- **Recommended Services:** [List of 3–5 service offerings with descriptions]
- **Recommended Products:** [List of 3–5 product ideas with descriptions]
- **Suggested Starting Point:** [Specific recommendation on where to begin]

**Content Strategy Framework**
- **Content Pillars:** [3–5 main categories for content]
- **Content Calendar Outline:** [Simple schedule approach]
- **Platform Strategy:** [Primary and secondary platforms with approach]`
    },
    {
      id: 'digital-product',
      title: 'Create a Digital Product',
      shortTitle: 'Digital Product',
      description: 'Design an ebook, course, or lead magnet',
      icon: Package,
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      accentColor: 'cyan',
      systemPrompt: `You are a Digital Product Guide Creator, specializing in crafting engaging lead magnets, ebooks, and digital resources using a structured, step-by-step approach.

Your process involves interviewing users, creating strategic outlines, and drafting compelling content that solves specific audience pain points. You acknowledge when you need more information and avoid making assumptions about user requirements.

Context:
The user needs to create a valuable digital product (lead magnet, ebook, template, etc.) that addresses specific pain points for their target audience.

This process follows a structured three-phase approach:
1. Information gathering through targeted interview questions
2. Strategic outline development using the APAG format (Attention, Perspective, Advantage, Gamify)
3. Section-by-section content drafting with user approval at each stage

Instructions:

Phase 1: Initial Interview

The user will provide information on:
- Topic of the digital product
- Type of digital product (ebook, lead magnet, template, course)
- Target audience
- Writing voice reference (document or example to match their tone)

Request the following key information (if not already provided):
- Target audience demographics and psychographics (if insufficient information was provided)
- Main pain points the audience experiences, with examples:
  - Undesired outcomes (functional, social, emotional challenges)
  - Obstacles preventing success
  - Risks or negative consequences they face
- Key points/solutions that will form sections of the product
- The user's unique methodology or system for achieving results
- Sources of inspiration (books, videos, articles)

Summarize the information received and confirm it's sufficient before proceeding.

Phase 2: Outline Development

Use the best practices for the type of digital product they are creating (lead magnet, course, ebook, etc.).

Create a comprehensive outline using the APAG format:

**Section 1: Attention**
Design an introduction that:
- Captures attention with a compelling hook
- Amplifies a key pain point
- Includes a powerful statistic or big idea
- Summarizes the desired outcome
- Previews what's to come

**Section 2: Perspective & Advantage**
Develop content that:
- Challenges conventional thinking on the topic
- Provides relatable examples
- Shares transformation stories
- Creates an "aha!" moment
- Explains a better approach (with unique naming)
- Sets up theory before practical application

**Section 3+: Gamify**
For each remaining section:
- Start with a problem, quote, or statistic
- Design actionable, sequential steps
- Show potential benefits of each step
- Include metaphors and examples
- Provide detailed implementation guidance

Present the complete outline and request feedback or revisions. Incorporate any changes before proceeding to content creation.

Phase 3: Section-by-Section Writing

- If not already provided, request a reference for writing voice/style
- Draft one complete section at a time, following the approved outline
- Present each finished section for approval or revision before continuing
- Remind the user to save finalized sections to their document
- Continue until the entire product is completed

Constraints:
- Maintain the user's voice and style throughout all content
- Focus on practical, actionable advice
- Ensure all content directly addresses the identified pain points
- Create steps that build logically upon each other
- Limit each section to a manageable length (suggest 500–1000 words)
- Include engaging elements: stories, examples, metaphors, and data points
- Avoid industry jargon unless appropriate for the target audience

Output Format:
- Interview responses will be organized by category
- Output one interview category at a time to reduce overwhelm
- After the outline and chapter outputs, remind users that they can add revisions and save it to a new document for later
- Outline will be presented with clear section headings and bullet points.
- Content sections will be fully written with appropriate formatting:
  - Headers and subheaders
  - Bullet points where appropriate
  - Bold text for emphasis
  - Numbered steps for sequential processes
  - Short paragraphs for readability`
    }
  ];

  const selectJourney = (journey) => {
    setSelectedJourney(journey);
    
    let greeting = '';
    if (journey.id === 'customer-avatar') {
      greeting = "Hi! I'm your expert marketing consultant. I'll help you create a detailed customer avatar through a structured interview. Let's start with a simple question:\n\nWho do you plan to target with your business? Feel free to share as much detail as you have, or just give me a brief description to start.";
    } else if (journey.id === 'origin-story') {
      greeting = "Hi! I'm your storytelling guide. I'll help you craft your personal origin story—the pivotal moments and journey that led you to your current work.\n\nWe'll work through this in 5 parts, one step at a time. Let's begin with your backstory:\n\nWhat was your life like before your defining moment? What were you struggling with or searching for?";
    } else if (journey.id === 'irresistible-offer') {
      greeting = "Hi! I'm the Irresistible Offer Architect. I'll help you create a compelling offer using proven frameworks. Let's start:\n\nTell me briefly about your target audience and what product or service you're offering.";
    } else if (journey.id === 'persuasive-copy') {
      greeting = "Hi! I'm your direct response copywriter. I'll help you create high-converting copy for ads, emails, or sales letters.\n\nTo get started, please share:\n1. Details about your target audience\n2. Your offer details\n3. What type of copy you need (email, ad, VSL, etc.)";
    } else if (journey.id === 'landing-page') {
      greeting = "Hi! I'm your elite landing page copywriter. I'll create persuasive sales copy that converts.\n\nTo begin, please share:\n1. Your target audience details\n2. Your offer/product details\n3. Desired length (short/medium/long)";
    } else if (journey.id === 'personal-brand') {
      greeting = "Hi! I'm your Personal Brand Strategist. I'll help you develop your online presence and content strategy.\n\nLet's start with this: Tell me about your professional background and what you're passionate about or want to be known for.";
    } else if (journey.id === 'digital-product') {
      greeting = "Hi! I'm your Digital Product Guide. I'll help you create an engaging ebook, course, or lead magnet.\n\nTo start, please tell me:\n1. What's the topic of your digital product?\n2. What type (ebook, lead magnet, course)?\n3. Who's your target audience?";
    }
    
    setMessages([{ role: 'assistant', content: greeting }]);
  };

  const backToDashboard = () => {
    setSelectedJourney(null);
    setMessages([]);
    setInput('');
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    const newMessages = [...messages, { role: 'user', content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const conversationHistory = newMessages.map(m => ({ 
        role: m.role, 
        content: m.content 
      }));

      // Call our secure backend instead of Claude directly
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 4000,
          system: selectedJourney.systemPrompt,
          messages: conversationHistory
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Request failed');
      }

      const data = await response.json();
      const assistantMessage = data.content?.find(c => c.type === 'text')?.text || 
        'I apologize, I encountered an error. Please try again.';
      
      setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: error.message === 'Rate limit exceeded. Please try again later or contact support.' 
          ? 'You\'ve reached the usage limit for now. Please try again in an hour, or contact us for extended access.'
          : 'I apologize, there was a connection error. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const exportConversation = () => {
    const content = messages
      .map(m => `${m.role === 'user' ? 'You' : 'AI Coach'}: ${m.content}`)
      .join('\n\n---\n\n');
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedJourney.id}-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Dashboard View
  if (!selectedJourney) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 relative overflow-hidden">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
          
          body {
            font-family: 'DM Sans', sans-serif;
          }
          
          .brand-title {
            font-family: 'Playfair Display', serif;
            letter-spacing: -0.02em;
          }
          
          .noise-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            opacity: 0.03;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          }
          
          .gradient-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            opacity: 0.3;
            animation: float 20s ease-in-out infinite;
          }
          
          .orb-1 {
            top: -10%;
            left: 10%;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(251,191,36,0.4) 0%, transparent 70%);
            animation-delay: 0s;
          }
          
          .orb-2 {
            bottom: -10%;
            right: 10%;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(251,113,133,0.4) 0%, transparent 70%);
            animation-delay: -7s;
          }
          
          .orb-3 {
            top: 30%;
            right: 20%;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(249,115,22,0.3) 0%, transparent 70%);
            animation-delay: -14s;
          }
          
          @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -30px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          
          .journey-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(20px);
          }
          
          .journey-card:hover {
            transform: translateY(-8px) scale(1.02);
          }
          
          .featured-card {
            background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,251,235,0.95) 100%);
            box-shadow: 0 20px 60px rgba(251,146,60,0.15), 0 0 0 1px rgba(251,146,60,0.1);
          }
          
          .featured-card:hover {
            box-shadow: 0 30px 80px rgba(251,146,60,0.25), 0 0 0 1px rgba(251,146,60,0.2);
          }
          
          .journey-card-regular {
            background: rgba(255, 255, 255, 0.7);
            box-shadow: 0 4px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04);
          }
          
          .journey-card-regular:hover {
            background: rgba(255, 255, 255, 0.9);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.06);
          }
          
          .icon-glow {
            box-shadow: 0 8px 32px rgba(0,0,0,0.12), inset 0 2px 8px rgba(255,255,255,0.2);
          }
          
          .shimmer-effect {
            position: relative;
            overflow: hidden;
          }
          
          .shimmer-effect::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            animation: shimmer 3s infinite;
          }
          
          @keyframes shimmer {
            0% { left: -100%; }
            100% { left: 100%; }
          }
          
          .badge-glow {
            animation: badge-pulse 2s ease-in-out infinite;
          }
          
          @keyframes badge-pulse {
            0%, 100% { box-shadow: 0 0 20px rgba(251,146,60,0.3); }
            50% { box-shadow: 0 0 30px rgba(251,146,60,0.5); }
          }
          
          .stagger-animation {
            animation: stagger-in 0.6s ease-out backwards;
          }
          
          @keyframes stagger-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
        
        {/* Animated background orbs */}
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="noise-overlay"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          {/* Header */}
          <div className="text-center mb-20 stagger-animation">
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md px-6 py-2.5 rounded-full mb-8 border border-amber-200/50 shadow-lg badge-glow" style={{animationDelay: '0.1s'}}>
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
              <span className="text-amber-900 font-semibold text-sm tracking-wide">AI-Powered Brand Building</span>
            </div>
            
            <h1 className="brand-title text-6xl md:text-8xl font-bold text-slate-900 mb-6 tracking-tight leading-none" style={{animationDelay: '0.2s'}}>
              Your Message.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600">
                Amplified.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-700 max-w-2xl mx-auto leading-relaxed font-light" style={{animationDelay: '0.3s'}}>
              Build a coaching brand that attracts dream clients—even if you hate marketing, writing, or putting yourself out there.
            </p>
          </div>

          {/* Featured Journey */}
          <div className="mb-16 stagger-animation" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>
              <div className="relative">
                <span className="text-amber-800 font-bold text-sm uppercase tracking-widest">Recommended Starting Point</span>
                <div className="absolute -inset-2 bg-amber-200/20 blur-xl rounded-full"></div>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>
            </div>
            
            {journeys.filter(j => j.featured).map((journey) => {
              const Icon = journey.icon;
              return (
                <button
                  key={journey.id}
                  onClick={() => selectJourney(journey)}
                  className="journey-card featured-card shimmer-effect w-full group p-10 rounded-3xl text-left relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1.5 text-xs font-bold rounded-full shadow-lg">
                    START HERE
                  </div>
                  
                  <div className="relative flex items-start gap-8">
                    <div className={`flex-shrink-0 w-20 h-20 ${journey.color} rounded-2xl flex items-center justify-center icon-glow transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                    </div>
                    
                    <div className="flex-1 pt-1">
                      <h3 className="brand-title text-3xl font-bold text-slate-900 mb-3 leading-tight">{journey.title}</h3>
                      <p className="text-slate-700 text-lg mb-6 leading-relaxed">{journey.description}</p>
                      <div className="flex items-center gap-3 text-amber-700 font-semibold text-lg group-hover:gap-4 transition-all">
                        <span>Begin your journey</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Other Journeys */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {journeys.filter(j => !j.featured).map((journey, index) => {
              const Icon = journey.icon;
              return (
                <button
                  key={journey.id}
                  onClick={() => selectJourney(journey)}
                  className="journey-card journey-card-regular stagger-animation group p-7 rounded-2xl text-left relative overflow-hidden"
                  style={{animationDelay: `${0.5 + index * 0.1}s`}}
                >
                  <div className={`w-14 h-14 ${journey.color} rounded-xl flex items-center justify-center mb-5 icon-glow transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  
                  <h3 className="brand-title text-xl font-bold text-slate-900 mb-2 leading-tight">{journey.title}</h3>
                  <p className="text-slate-600 text-sm mb-5 leading-relaxed">{journey.description}</p>
                  
                  <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>Explore</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="mt-20 text-center stagger-animation" style={{animationDelay: '1.2s'}}>
            <div className="inline-block bg-white/60 backdrop-blur-sm px-8 py-4 rounded-2xl border border-slate-200/50 shadow-lg">
              <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                Each journey uses specialized AI coaching based on proven marketing frameworks,<br />
                direct response principles, and storytelling methodologies
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Chat View
  const JourneyIcon = selectedJourney.icon;
  
  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap');
        
        body {
          font-family: 'DM Sans', sans-serif;
        }
        
        .brand-title {
          font-family: 'Playfair Display', serif;
        }
        
        .noise-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.02;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        
        .message-bubble {
          animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .icon-glow {
          box-shadow: 0 8px 24px rgba(0,0,0,0.12), inset 0 2px 8px rgba(255,255,255,0.2);
        }
        
        .message-assistant {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(251,146,60,0.15);
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }
        
        .message-user {
          background: linear-gradient(135deg, rgba(251,146,60,0.95) 0%, rgba(249,115,22,0.95) 100%);
          box-shadow: 0 4px 20px rgba(251,146,60,0.3);
        }
      `}</style>
      
      <div className="noise-overlay"></div>
      
      {/* Header */}
      <div className="relative bg-white/80 backdrop-blur-xl border-b border-amber-200/50 px-6 py-5 shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={backToDashboard}
            className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors font-semibold group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" strokeWidth={2.5} />
            <span>Dashboard</span>
          </button>
          
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 ${selectedJourney.color} rounded-xl flex items-center justify-center icon-glow`}>
              <JourneyIcon className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h2 className="brand-title text-slate-900 font-bold text-xl leading-tight">{selectedJourney.shortTitle}</h2>
              <p className="text-slate-600 text-sm">{selectedJourney.description}</p>
            </div>
          </div>
          
          <button
            onClick={exportConversation}
            className="flex items-center gap-2 px-5 py-2.5 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-xl transition-all font-semibold text-sm shadow-sm hover:shadow-md"
          >
            <Download className="w-4 h-4" strokeWidth={2.5} />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-8 relative">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message-bubble flex gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.role === 'assistant' && (
                <div className={`flex-shrink-0 w-11 h-11 ${selectedJourney.color} rounded-xl flex items-center justify-center icon-glow`}>
                  <JourneyIcon className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              )}
              
              <div
                className={`max-w-2xl p-6 rounded-2xl ${
                  message.role === 'user'
                    ? 'message-user text-white'
                    : 'message-assistant text-slate-800'
                }`}
              >
                <p className="whitespace-pre-wrap leading-relaxed text-[15px]">{message.content}</p>
              </div>

              {message.role === 'user' && (
                <div className="flex-shrink-0 w-11 h-11 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center shadow-lg">
                  <User className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              )}
            </div>
          ))}
          
          {isLoading && (
            <div className="message-bubble flex gap-4 justify-start">
              <div className={`flex-shrink-0 w-11 h-11 ${selectedJourney.color} rounded-xl flex items-center justify-center icon-glow`}>
                <JourneyIcon className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="message-assistant p-6 rounded-2xl">
                <Loader2 className="w-5 h-5 text-amber-600 animate-spin" strokeWidth={2.5} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="relative bg-white/80 backdrop-blur-xl border-t border-amber-200/50 px-6 py-5 shadow-2xl">
        <div className="max-w-4xl mx-auto flex gap-4">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message... (Press Enter to send)"
            disabled={isLoading}
            rows={1}
            className="flex-1 bg-white/90 text-slate-900 placeholder-slate-400 px-6 py-4 rounded-xl border border-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-transparent disabled:opacity-50 resize-none font-normal shadow-sm"
            style={{ minHeight: '56px', maxHeight: '150px' }}
            onInput={(e) => {
              e.target.style.height = 'auto';
              e.target.style.height = e.target.scrollHeight + 'px';
            }}
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || isLoading}
            className={`${selectedJourney.color} text-white px-7 py-4 rounded-xl font-semibold hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg hover:shadow-xl icon-glow`}
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" strokeWidth={2.5} /> : <Send className="w-5 h-5" strokeWidth={2.5} />}
            <span className="hidden sm:inline">Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandBuilder;