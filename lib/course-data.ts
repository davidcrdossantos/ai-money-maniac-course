export interface Lesson {
  id: number;
  title: string;
  description: string;
  duration: string;
  content: string;
  videoUrl?: string;
  resources?: { title: string; url: string }[];
}

export interface Module {
  id: number;
  title: string;
  description: string;
  outcome: string;
  icon: string;
  lessons: Lesson[];
}

export const courseModules: Module[] = [
  {
    id: 1,
    title: "Foundations of AI for Income",
    description: "The minimum you need to understand to use AI intelligently — not randomly.",
    outcome: "Students understand how AI systems work well enough to build things instead of just experimenting.",
    icon: "Brain",
    lessons: [
      {
        id: 1,
        title: "What AI Actually Is (May 2026 Edition)",
        description: "LLMs, generative AI, agents, and the current frontier models",
        duration: "15 min",
        content: `<h2>Welcome to the Foundation</h2>
<p>Before you can make money with AI, you need to understand what you're working with. This isn't a computer science lecture — it's the practical knowledge you need in May 2026.</p>

<h3>Where We Are Right Now</h3>
<p>In 2023, the question was "can AI write decent copy?" In 2026, the question is "how do I orchestrate AI agents to run my business?" That's how fast this moved.</p>

<h3>The Current Frontier Models</h3>
<ul>
<li><strong>Claude Sonnet 4.6 / Opus 4.7</strong> (Anthropic) — Best for coding, long documents, agentic work. 1M token context window. Powers Cursor and most serious developer workflows.</li>
<li><strong>GPT-5.4</strong> (OpenAI) — Strong all-rounder. Excellent Canvas editor for iterative writing. Best for creative work and multimodal tasks.</li>
<li><strong>Gemini 3.1 Pro</strong> (Google) — Leads some reasoning benchmarks. Deeply integrated with Google Workspace. Best if your clients live in Gmail/Docs/Sheets.</li>
<li><strong>Grok 4</strong> (xAI) — Leads SWE-bench coding scores at 75%. Live access to X/Twitter data. Best for real-time information.</li>
<li><strong>DeepSeek R2</strong> — Open-source, free reasoning model. Surprisingly capable and costs nothing.</li>
</ul>

<h3>The Agent Revolution</h3>
<p>The single biggest shift in 2025-2026 is agents. Instead of asking AI a question and getting an answer, agents can: plan, use tools, browse the web, write and run code, manage files, send emails, and complete multi-step tasks without your involvement. This is what makes AI an income generator, not just a productivity tool.</p>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6 mb-6">
<h4>📋 Day 1 Setup: Your AI Stack</h4>
<ol class="mt-2 space-y-2">
<li><strong>Step 1:</strong> Sign up at claude.ai (free tier is strong)</li>
<li><strong>Step 2:</strong> Sign up at chat.openai.com (free tier available)</li>
<li><strong>Step 3:</strong> Sign up at perplexity.ai (free — use this for all research)</li>
<li><strong>Step 4:</strong> Run the same prompt in all three: "Explain what has changed in AI in the last 6 months in plain English"</li>
<li><strong>Step 5:</strong> Note which output you found most useful — that is likely your primary tool</li>
</ol>
</div>

<div class="bg-green-900/30 p-4 rounded-lg mt-6">
<h4>💡 Key Insight for 2026</h4>
<p>All major AI subscriptions have converged at $20/month. The question is not which model is smartest — it is which fits your workflow. Most power users combine 2-3 tools, each for a specific job.</p>
</div>`
      },
      {
        id: 2,
        title: "Prompting Fundamentals",
        description: "Master structured prompting to get professional-grade outputs every time",
        duration: "20 min",
        content: `<h2>The Art of Prompting</h2>
<p>Your prompts determine your outputs. A vague prompt gives vague results. A structured prompt gives professional-grade content. This is the highest-leverage skill in your entire AI toolkit.</p>

<h3>The CRISP Framework</h3>
<ul>
<li><strong>C</strong>ontext: Set the scene and provide background</li>
<li><strong>R</strong>ole: Tell the AI who to be (expert, editor, analyst)</li>
<li><strong>I</strong>nstruction: Clear, specific directions</li>
<li><strong>S</strong>pecifics: Format, tone, length details</li>
<li><strong>P</strong>reference: Your style and constraints</li>
</ul>

<h3>Example Transformation</h3>
<div class="bg-red-900/30 p-4 rounded-lg mb-4">
<p><strong>Bad:</strong> "Write about marketing"</p>
</div>
<div class="bg-green-900/30 p-4 rounded-lg">
<p><strong>Good:</strong> "Act as a digital marketing expert with 10 years of B2B SaaS experience. Write a 500-word blog post about email marketing for small businesses in 2026. Include 3 actionable tips with specific tool recommendations. Conversational tone. Use headers and bullet points."</p>
</div>

<h3>Advanced Techniques</h3>
<ul>
<li><strong>Chain-of-thought:</strong> "Think through this step by step before answering" — dramatically improves complex reasoning</li>
<li><strong>Few-shot learning:</strong> "Here are 3 examples: [examples]. Now do the same for: [task]"</li>
<li><strong>Extended thinking:</strong> Claude and GPT-5.4 both have thinking mode for hard problems — enable it</li>
<li><strong>Persona stacking:</strong> "You are a copywriter trained under Eugene Schwartz who also understands SaaS pricing psychology..."</li>
</ul>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6 mb-6">
<h4>📋 Build a Prompt Library That Pays</h4>
<ol class="mt-2 space-y-2">
<li><strong>Step 1:</strong> Open Notion or Google Doc titled "My Prompt Library"</li>
<li><strong>Step 2:</strong> Create sections: Blog Posts | Cold Emails | Social Media | Research | Ad Copy</li>
<li><strong>Step 3:</strong> Write CRISP template with [PLACEHOLDERS] for each section</li>
<li><strong>Step 4:</strong> Test each template 3 times and refine</li>
<li><strong>Step 5:</strong> Once you have 50+ strong prompts, sell the pack on Gumroad for £15-50</li>
</ol>
</div>`
      },
      {
        id: 3,
        title: "The 2026 AI Tool Landscape",
        description: "A clear map of every major tool category and when to use each one",
        duration: "20 min",
        content: `<h2>The Tools That Matter in May 2026</h2>
<p>The AI ecosystem has matured into distinct layers. Understanding these layers means picking the right tool for each job instead of using one tool for everything.</p>

<h3>Foundation Models</h3>
<table class="w-full text-left mt-4">
<tr class="border-b border-gray-700"><th>Model</th><th>Best For</th><th>Price</th></tr>
<tr class="border-b border-gray-700"><td>Claude Sonnet 4.6</td><td>Coding, writing, long docs, agents</td><td>$20/mo or API</td></tr>
<tr class="border-b border-gray-700"><td>GPT-5.4</td><td>Creative work, Canvas editing, vision</td><td>$20/mo or API</td></tr>
<tr class="border-b border-gray-700"><td>Gemini 3.1 Pro</td><td>Google Workspace, 1M context, video/audio</td><td>$19.99/mo</td></tr>
<tr class="border-b border-gray-700"><td>Grok 4</td><td>Real-time data, coding benchmarks</td><td>$22/mo</td></tr>
<tr><td>DeepSeek R2</td><td>Free reasoning, budget-conscious work</td><td>Free</td></tr>
</table>

<h3>Research Tools</h3>
<ul>
<li><strong>Perplexity AI</strong> — The search engine for AI. Cites sources. New Deep Research generates actual deliverables (PowerPoints, spreadsheets). Comet browser now free on all platforms. Use this before any content project.</li>
<li><strong>NotebookLM</strong> (Google) — Upload your own sources and interrogate them. Brilliant for YouTube transcripts and PDFs. Does not hallucinate from the internet.</li>
<li><strong>ChatGPT Deep Research</strong> — Multi-source research that generates comprehensive reports. Slower but thorough.</li>
</ul>

<h3>Coding and Building Tools</h3>
<ul>
<li><strong>Claude Code</strong> — Terminal-based agentic coding. Reads entire codebases, runs commands, makes multi-file changes. Best for complex projects. Full module dedicated to this.</li>
<li><strong>Cursor</strong> — AI-first IDE. 8 parallel agents, excellent diff view. Best daily driver. $20/mo.</li>
<li><strong>Bolt.new / Lovable</strong> — Browser-based app builders. Describe your app in English, get working code in minutes.</li>
<li><strong>Replit</strong> — Cloud coding with instant deployment. Best for beginners.</li>
</ul>

<h3>Automation Tools</h3>
<ul>
<li><strong>Make</strong> — Visual workflow builder. Best for client automation work. Free tier available.</li>
<li><strong>n8n</strong> — Open-source, self-hostable. 422+ app connections, GDPR-friendly. AI Agent nodes for self-correcting workflows.</li>
<li><strong>Zapier</strong> — Simplest, 6,000+ integrations. Best entry point for beginners.</li>
</ul>

<div class="bg-green-900/30 p-4 rounded-lg mt-6">
<h4>💡 Minimum Viable Stack — Under £50/month</h4>
<p>Claude Pro ($20) + Perplexity free + Make free tier + Canva free = enough to generate thousands in revenue. Do not buy more tools until you have mastered what you have.</p>
</div>`
      },
      {
        id: 4,
        title: "Understanding Tokens, APIs and Costs",
        description: "How AI pricing works and how to build a profitable AI business",
        duration: "15 min",
        content: `<h2>The Economics of AI in 2026</h2>
<p>Consumer subscriptions have converged at $20/month. But when you build services or products, you work with APIs. Understanding costs separates profitable businesses from expensive hobbies.</p>

<h3>What Are Tokens?</h3>
<ul>
<li>1 token ≈ 4 characters or 3/4 of a word</li>
<li>1,000 tokens ≈ 750 words</li>
<li>Claude's context window: 1,000,000 tokens — entire codebases, entire books</li>
</ul>

<h3>API Pricing — May 2026</h3>
<table class="w-full text-left mt-4">
<tr class="border-b border-gray-700"><th>Model</th><th>Input / 1M tokens</th><th>Output / 1M tokens</th></tr>
<tr class="border-b border-gray-700"><td>Claude Sonnet 4.6</td><td>$3</td><td>$15</td></tr>
<tr class="border-b border-gray-700"><td>Claude Opus 4.7</td><td>$15</td><td>$75</td></tr>
<tr class="border-b border-gray-700"><td>GPT-5.4</td><td>$2.50</td><td>$15</td></tr>
<tr class="border-b border-gray-700"><td>Gemini 3.1 Pro</td><td>$2</td><td>$12</td></tr>
<tr><td>Grok 4.1 Fast</td><td>$0.20</td><td>$0.50</td></tr>
</table>

<h3>Real-World Cost Examples</h3>
<ul>
<li>1,000 blog posts at 1,500 words via Claude Sonnet: ~£45 total</li>
<li>Processing 100 customer support emails daily: ~£2-5/month</li>
<li>Typical Claude Code session building a feature: ~£0.50-5</li>
</ul>

<div class="bg-yellow-900/30 p-4 rounded-lg mt-4">
<h4>⚠️ The Golden Rule</h4>
<p>Price at 10-20x your actual API cost. A blog post costing 4p in API fees should sell for £80-200. Your margin covers time, expertise, tools, and business overhead — not just raw compute.</p>
</div>

<h3>Cost Optimisation Tips</h3>
<ul>
<li>Use Sonnet for most tasks, Opus only for the hardest reasoning problems</li>
<li>Use Grok Fast or Gemini Flash for high-volume simple tasks</li>
<li>Set max_tokens limits in API calls to prevent runaway costs</li>
<li>Batch similar requests rather than making individual calls</li>
</ul>`
      },
      {
        id: 5,
        title: "Choosing the Right Tool",
        description: "Decision frameworks for tool selection — and how to avoid the subscription trap",
        duration: "12 min",
        content: `<h2>Tool Selection in 2026</h2>
<p>With 20+ capable AI tools available, the biggest trap is accumulation. Most people paying £100+/month in AI subscriptions get 20% of the value they could from £30 of the right tools used well.</p>

<h3>The Decision Matrix</h3>
<table class="w-full text-left mt-4">
<tr class="border-b border-gray-700"><th>Task</th><th>Best Tool</th><th>Cost</th></tr>
<tr class="border-b border-gray-700"><td>Writing and analysis</td><td>Claude Pro</td><td>$20/mo</td></tr>
<tr class="border-b border-gray-700"><td>Research with sources</td><td>Perplexity</td><td>Free / $20</td></tr>
<tr class="border-b border-gray-700"><td>Code in an IDE</td><td>Cursor</td><td>$20/mo</td></tr>
<tr class="border-b border-gray-700"><td>Complex code / terminal</td><td>Claude Code</td><td>API cost</td></tr>
<tr class="border-b border-gray-700"><td>Images</td><td>Midjourney</td><td>$10/mo</td></tr>
<tr class="border-b border-gray-700"><td>Automation</td><td>Make or n8n</td><td>Free-$20</td></tr>
<tr class="border-b border-gray-700"><td>Quick app prototyping</td><td>Bolt.new</td><td>Free tier</td></tr>
<tr><td>Video creation</td><td>Runway / HeyGen</td><td>$15-22/mo</td></tr>
</table>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6 mb-6">
<h4>📋 The 20-Minute Toolstack Audit</h4>
<ol class="mt-2 space-y-2">
<li><strong>Step 1:</strong> List every AI tool you pay for or use regularly</li>
<li><strong>Step 2:</strong> For each: what single task does this do better than anything else I have?</li>
<li><strong>Step 3:</strong> If you cannot answer, cut it</li>
<li><strong>Step 4:</strong> Remove overlapping tools — keep the better one</li>
<li><strong>Step 5:</strong> Target under £60/month total to start</li>
<li><strong>Step 6:</strong> Tool freeze for 30 days — no new subscriptions until you master what you have</li>
</ol>
</div>

<h3>The Bundle Option</h3>
<p>Fello AI bundles Claude, GPT, Gemini, Grok, and DeepSeek for $9.99/month on Mac. Good for exploring before committing to one ecosystem.</p>`
      },
      {
        id: 6,
        title: "Ethics, Legal and Staying Safe",
        description: "The rules that protect your AI business and your clients",
        duration: "12 min",
        content: `<h2>Building an AI Business That Lasts</h2>

<h3>Copyright and Content Ownership</h3>
<ul>
<li><strong>AI-generated content:</strong> Generally not copyrightable on its own in the US and UK</li>
<li><strong>Content you significantly edit:</strong> May be copyrightable — the more creative input you add, the stronger the claim</li>
<li><strong>Client work:</strong> Assign copyright explicitly in your contracts</li>
</ul>

<h3>Disclosure</h3>
<ul>
<li>FTC in the US requires disclosure of AI-generated content in advertising</li>
<li>UK ASA has similar guidance — when in doubt, disclose</li>
<li>Ask clients upfront whether they need to know if AI is used — not after delivery</li>
</ul>

<h3>Data Privacy</h3>
<ul>
<li>Never paste client personal data into a public AI chat interface</li>
<li>For sensitive work, use API access with zero-data-retention agreements</li>
<li>n8n self-hosted is your best friend for GDPR-sensitive European clients</li>
<li>Claude for Enterprise and OpenAI Business both offer data-privacy agreements</li>
</ul>

<h3>Platform Terms of Service</h3>
<ul>
<li>Commercial use of AI outputs is generally allowed on all major platforms — but read the ToS</li>
<li>Midjourney commercial rights require a paid plan</li>
<li>Make and Zapier are explicitly sanctioned for automation; scraping tools are a grey area</li>
</ul>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6">
<h4>📋 Action Item</h4>
<p>Write a one-paragraph AI policy for your business. What tools you use, how client data is handled, your disclosure approach. Add it to your proposals. Transparency builds trust and protects you.</p>
</div>`
      }
    ]
  },
  {
    id: 2,
    title: "The AI Money Stack",
    description: "The practical ecosystem of tools used to generate income — fully updated for May 2026.",
    outcome: "Students assemble a money stack of tools they can combine to build products and services.",
    icon: "Layers",
    lessons: [
      {
        id: 1,
        title: "Text and Research Tools",
        description: "Claude, ChatGPT, Perplexity, and Gemini — when to use each and why",
        duration: "20 min",
        content: `<h2>Your Primary Content Engine</h2>
<p>Every major model is genuinely capable in 2026. The choice comes down to workflow fit, not raw quality.</p>

<h3>Claude — Best for Writing and Coding</h3>
<ul>
<li><strong>Best for:</strong> Blog posts, analysis, long documents, coding, nuanced tasks</li>
<li><strong>Pricing:</strong> Free tier, Pro $20/month, API pay-per-token</li>
<li><strong>Why:</strong> Produces the most natural prose. 1M token context window. Powers Cursor, Windsurf, and most professional coding workflows.</li>
</ul>

<h3>ChatGPT — Best for Creative Iteration</h3>
<ul>
<li><strong>Best for:</strong> Creative work, Canvas editing, DALL-E image generation, Deep Research</li>
<li><strong>Pricing:</strong> Free / $8 Go / $20 Plus / $100 Pro</li>
<li><strong>2026 strength:</strong> Deep Research now generates full deliverables — not just summaries. Canvas is the best editing environment for iterative writing.</li>
</ul>

<h3>Perplexity — Best for Research</h3>
<ul>
<li><strong>Rule:</strong> Always start content projects here before writing anything</li>
<li><strong>Pricing:</strong> Free tier is strong; Pro $20/month</li>
<li><strong>2026 strength:</strong> Pro Deep Research generates PowerPoints, spreadsheets, and full reports from a single prompt. Comet browser now free on all platforms.</li>
</ul>

<h3>Gemini — Best for Google Workspace Users</h3>
<ul>
<li><strong>Best for:</strong> Clients in Gmail / Docs / Sheets / Drive. 1M context. Native video and audio handling.</li>
<li><strong>Pricing:</strong> Free / AI Plus $7.99 / AI Pro $19.99 / AI Ultra $249.99</li>
</ul>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6 mb-6">
<h4>📋 Content Stack Setup in 15 Minutes</h4>
<ol class="mt-2 space-y-2">
<li><strong>Step 1:</strong> Create free accounts at claude.ai, chat.openai.com, and perplexity.ai</li>
<li><strong>Step 2:</strong> Pick one as your primary — Claude for writing-heavy work, ChatGPT if you want image generation included</li>
<li><strong>Step 3:</strong> Use Perplexity first for research — paste findings into your primary tool for writing</li>
<li><strong>Step 4:</strong> This combination covers 90% of professional content work</li>
</ol>
</div>`
      },
      {
        id: 2,
        title: "Image and Design Tools",
        description: "Creating visuals clients pay for with Midjourney, DALL-E, and Canva AI",
        duration: "22 min",
        content: `<h2>Visual Content at Scale</h2>
<p>Professional designers charge £500+ for brand assets. With AI you can create stunning visuals in minutes and sell that speed as a service.</p>

<h3>Midjourney — The Gold Standard</h3>
<ul>
<li><strong>Access:</strong> midjourney.com (web interface — no longer Discord-only)</li>
<li><strong>Pricing:</strong> Basic $10/mo, Standard $30/mo, Pro $60/mo</li>
<li><strong>Pro tip:</strong> Use --style raw for photographic results, --ar 16:9 for widescreen</li>
</ul>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6 mb-6">
<h4>📋 Create a Client Brand Visual Pack in 1 Hour</h4>
<ol class="mt-2 space-y-2">
<li><strong>Step 1:</strong> Get from client: brand colours (hex codes), industry, target audience, 3 brand adjectives</li>
<li><strong>Step 2:</strong> Go to midjourney.com and start a new image</li>
<li><strong>Step 3:</strong> Hero image: "Professional [industry] setting, clean modern aesthetic, [brand colour] accents, photorealistic, editorial photography --ar 16:9 --style raw"</li>
<li><strong>Step 4:</strong> Generate 4 options, upscale your favourite</li>
<li><strong>Step 5:</strong> Social squares: --ar 1:1. LinkedIn banners: --ar 8:1</li>
<li><strong>Step 6:</strong> Import into Canva, add logo and text overlay</li>
<li><strong>Step 7:</strong> Deliver 10-15 assets as a Brand Starter Pack — charge £300-800</li>
</ol>
</div>

<h3>DALL-E 3 / GPT Image 1</h3>
<p>Best when you need text rendered accurately in images, or are already working in ChatGPT. GPT Image 1 has significantly better instruction-following for complex scenes.</p>

<h3>Canva AI — The Bridge Tool</h3>
<ul>
<li><strong>Magic Resize:</strong> One design to every platform format automatically</li>
<li><strong>Background Remover:</strong> Clean product shots in one click</li>
<li><strong>Brand Kit:</strong> Lock in client colours and fonts for consistent output</li>
</ul>

<h3>What You Can Sell</h3>
<ul>
<li>Social media graphics packages: £200-500/month retainer</li>
<li>Product mockup sets for e-commerce: £50-200 per set</li>
<li>YouTube thumbnail packs: £100-300</li>
<li>Brand starter kits: £300-800</li>
</ul>`
      },
      {
        id: 3,
        title: "AI Video and Audio Tools",
        description: "Professional video and audio without a studio or equipment",
        duration: "20 min",
        content: `<h2>Video and Audio Without Equipment</h2>
<p>AI video and audio tools crossed a quality threshold in 2026 that makes them genuinely usable for professional client work.</p>

<h3>Video Generation</h3>
<ul>
<li><strong>Runway Gen-3:</strong> Best for cinematic b-roll and creative effects. Professionals choice. From $15/mo.</li>
<li><strong>Pika 2.0:</strong> Fast iterations, good for social content and quick turnarounds.</li>
<li><strong>Google Veo 3.1:</strong> Integrated into Gemini and Perplexity. Strong for realistic scenes.</li>
</ul>

<h3>AI Avatars and Presenters</h3>
<ul>
<li><strong>HeyGen:</strong> Best AI avatar platform. Custom avatar creation, excellent lip sync, 40+ languages. From $24/mo.</li>
<li><strong>Synthesia:</strong> 140+ AI avatars, great for corporate training content. From $22/mo.</li>
</ul>

<h3>AI Voice and Audio</h3>
<ul>
<li><strong>ElevenLabs:</strong> Market leader for voice cloning and AI narration. Clone your own voice in minutes. Critical for YouTube and training video workflows. Free tier available.</li>
<li><strong>Suno / Udio:</strong> AI music generation. Royalty-free background music in seconds.</li>
</ul>

<h3>The Complete Video Service Stack</h3>
<p>ElevenLabs + HeyGen + Canva + Runway = full professional video production capability for under £80/month.</p>

<h3>Revenue Opportunities</h3>
<ul>
<li>Explainer videos: £300-800 per video</li>
<li>Training video production: £500-2,000 per course</li>
<li>Social media video packages (30 shorts/month): £800-1,500/month retainer</li>
</ul>`
      },
      {
        id: 4,
        title: "AI Coding Tools",
        description: "Build software with Cursor, Claude Code, Bolt, and Replit — no experience required",
        duration: "22 min",
        content: `<h2>Code Without Being a Coder</h2>
<p>AI coding tools crossed a threshold in 2026. Non-developers can now build and deploy functional web apps and charge developer rates.</p>

<h3>Tier 1: No-Code App Builders</h3>
<ul>
<li><strong>Bolt.new:</strong> Describe your app in English, get working full-stack code. One-click deploy. Free tier available. Best starting point in 2026.</li>
<li><strong>Lovable:</strong> Similar to Bolt, strong for SaaS-style apps.</li>
<li><strong>Replit:</strong> Cloud-based, no installation. Build and deploy in one place. Best for total beginners.</li>
</ul>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6 mb-6">
<h4>📋 Build a Lead Magnet Tool on Replit (Under 1 Hour)</h4>
<ol class="mt-2 space-y-2">
<li><strong>Step 1:</strong> Go to replit.com and sign up free</li>
<li><strong>Step 2:</strong> Create Repl then HTML, CSS, JS then click the AI assistant</li>
<li><strong>Step 3:</strong> Type: "Build a business name generator. User enters industry and 3 keywords. Output 10 creative name suggestions with copy buttons. Professional dark theme."</li>
<li><strong>Step 4:</strong> Hit Run to preview. Click Deploy to get a public URL.</li>
<li><strong>Step 5:</strong> Share as a free lead magnet — collect emails before showing results</li>
</ol>
</div>

<h3>Tier 2: AI-Powered IDEs</h3>
<ul>
<li><strong>Cursor:</strong> Best AI IDE in 2026 ($500M ARR). VS Code rebuilt around AI. 8 parallel agents. $20/mo.</li>
<li><strong>Windsurf:</strong> Strong alternative with Cascade agentic mode. Free tier with unlimited completions.</li>
<li><strong>GitHub Copilot:</strong> Best for inline suggestions in your existing editor. 15M developers use it. $10/mo.</li>
</ul>

<h3>Tier 3: Terminal Agents</h3>
<ul>
<li><strong>Claude Code:</strong> Reads entire codebases, runs commands, makes multi-file changes, manages git. Full module dedicated to this.</li>
<li><strong>Codex CLI:</strong> OpenAI equivalent terminal agent. Free tier available.</li>
</ul>

<h3>What You Can Build and Sell</h3>
<ul>
<li>Custom chatbots: £500-2,500 setup</li>
<li>Internal tools for small businesses: £1,000-5,000</li>
<li>Micro-SaaS products: £10-100/month recurring</li>
<li>Automation scripts: £300-1,000</li>
</ul>`
      },
      {
        id: 5,
        title: "Automation Tools",
        description: "Make, n8n, and Zapier — systems that earn while you sleep",
        duration: "25 min",
        content: `<h2>The Glue That Holds Everything Together</h2>
<p>Automation tools turn individual AI capabilities into complete systems. Build once, run forever.</p>

<h3>Make — Best for Client Work</h3>
<ul>
<li><strong>Strengths:</strong> Complex logic, data manipulation, error handling, thousands of app connections</li>
<li><strong>Pricing:</strong> Free tier (1,000 ops/month), paid from $9/month</li>
</ul>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6 mb-6">
<h4>📋 Your First Make Automation in 30 Minutes</h4>
<ol class="mt-2 space-y-2">
<li><strong>Step 1:</strong> Go to make.com and create a free account</li>
<li><strong>Step 2:</strong> New scenario → add Gmail "Watch Emails" as trigger</li>
<li><strong>Step 3:</strong> Filter to watch emails with a specific label (e.g. "Leads")</li>
<li><strong>Step 4:</strong> Add OpenAI "Create a Completion" — prompt: "Summarise this email in 3 bullet points and classify as: sales lead, support request, or other: [email body]"</li>
<li><strong>Step 5:</strong> Add Google Sheets "Add a Row" — map email subject, sender, and AI summary</li>
<li><strong>Step 6:</strong> Run once to test, then schedule every 15 minutes</li>
</ol>
</div>

<h3>n8n — Best for Privacy and Scale</h3>
<ul>
<li><strong>Strengths:</strong> Self-hosted, no data leaves your server, 422+ app connectors, AI Agent nodes</li>
<li><strong>Pricing:</strong> Free self-hosted, Cloud from $20/month</li>
<li><strong>Pro tip:</strong> Self-hosting on a £5/month VPS replaces £200+/month in Zapier costs at scale</li>
</ul>

<h3>Zapier — Best for Beginners</h3>
<ul>
<li>6,000+ app integrations, most beginner-friendly</li>
<li>Free (100 tasks/month), paid from $19.99/month</li>
</ul>

<h3>Automation Ideas That Pay</h3>
<ul>
<li>AI content pipelines: research to write to schedule to post</li>
<li>Lead scoring and CRM enrichment</li>
<li>Customer onboarding email sequences</li>
<li>Review response automation for local businesses</li>
<li>Invoice processing and accounting data entry</li>
</ul>`
      },
      {
        id: 6,
        title: "Agent Frameworks and No-Code Builders",
        description: "OpenAI Agents, CrewAI, Bolt.new, and Bubble for building products fast",
        duration: "18 min",
        content: `<h2>Beyond Simple Automations</h2>
<p>Agent frameworks let you build AI systems that reason and take multi-step actions. No-code builders let you ship apps without writing code.</p>

<h3>Agent Frameworks</h3>
<ul>
<li><strong>OpenAI Assistants API:</strong> Official framework. Function calling, code interpreter, file search. Best for production customer-facing chatbots.</li>
<li><strong>CrewAI:</strong> Role-based multi-agent. Researcher plus Writer plus Editor agents working in sequence.</li>
<li><strong>n8n AI Agent nodes:</strong> Self-correcting agents within automation workflows. Easiest entry point for non-developers.</li>
</ul>

<h3>No-Code App Builders</h3>
<ul>
<li><strong>Bolt.new:</strong> Best starting point in 2026. Describe it, get code, deploy it.</li>
<li><strong>v0 by Vercel:</strong> Generate React UI components from text. Great for prototyping.</li>
<li><strong>Bubble:</strong> Full no-code platform with database and workflows. From $29/month.</li>
<li><strong>Softr:</strong> Turn Airtable or Google Sheets into web apps. Client portals in hours.</li>
</ul>

<h3>What You Can Build and Sell</h3>
<ul>
<li>Client portals via Softr: £500-1,500 setup</li>
<li>Custom chatbot agents via OpenAI API: £800-3,000</li>
<li>No-code tools for specific niches: £20-100/month SaaS</li>
</ul>`
      }
    ]
  },
  {
    id: 3,
    title: "Mastering Claude Code",
    description: "The complete guide to Claude Code — Anthropic's terminal agent that has changed how software gets built in 2026.",
    outcome: "Students can use Claude Code to build real projects and charge developer rates without a computer science degree.",
    icon: "Terminal",
    lessons: [
      {
        id: 1,
        title: "What Claude Code Is and Why It Matters",
        description: "The terminal agent that builds entire projects while you watch",
        duration: "15 min",
        content: `<h2>Claude Code: The Agent That Lives in Your Terminal</h2>
<p>Claude Code is Anthropic's agentic coding tool. Unlike Cursor or Copilot which assist you as you code, Claude Code <em>is</em> the developer. It reads your entire codebase, plans a solution, writes the code, runs the tests, fixes the errors, and commits the changes — while you watch or step away entirely.</p>

<p>This is not autocomplete. This is an AI that can own a task from start to finish.</p>

<h3>Why Claude Code Specifically?</h3>
<p>The terminal coding agent market in 2026 has three main players: Claude Code, Codex CLI (OpenAI), and Gemini CLI (Google). Claude Code is the most mature:</p>
<ul>
<li><strong>1M token context window</strong> — reads your entire codebase at once</li>
<li><strong>Full SKILL.md support</strong> — teach it custom workflows with plain text files</li>
<li><strong>Deep MCP integration</strong> — connect to databases, APIs, Slack, GitHub</li>
<li><strong>Sub-agent support</strong> — spawn specialised agents for security review, test writing, and more</li>
<li><strong>Powers the ecosystem</strong> — Cursor, Windsurf, and most coding IDEs use Claude under the hood</li>
</ul>

<h3>The 2026 Shift: Vibe Coding to Agentic Engineering</h3>
<p>In 2025 the question was "can AI write working code?" In 2026 it is "how do you orchestrate AI to ship production code?" The pattern that works is: <strong>research → plan → execute → review → ship</strong>, with you as oversight at each gate. Claude Code is built for this pattern.</p>

<div class="bg-yellow-900/30 p-4 rounded-lg mt-6">
<h4>⚠️ Honest Cost Note</h4>
<p>Claude Code costs money — you pay API rates. A typical session building a feature costs £0.50-5. A full app build: £10-50 in API costs. If you charge £2,000 for an app, £30 in API costs is irrelevant. Price your services accordingly.</p>
</div>`
      },
      {
        id: 2,
        title: "Installing and Setting Up Claude Code",
        description: "Get Claude Code running on your machine in under 10 minutes",
        duration: "15 min",
        content: `<h2>Installation</h2>
<p>Claude Code runs in your terminal. You need Node.js 18 or later.</p>

<h3>Step 1: Check Node.js</h3>
<pre class="bg-gray-800 p-4 rounded-lg">node --version</pre>
<p>If you see v18.x.x or higher, you are ready. If not, download from nodejs.org.</p>

<h3>Step 2: Install Claude Code</h3>
<pre class="bg-gray-800 p-4 rounded-lg">npm install -g @anthropic-ai/claude-code</pre>

<h3>Step 3: Authenticate</h3>
<pre class="bg-gray-800 p-4 rounded-lg">claude</pre>
<p>Claude Code opens a browser to authenticate with your Anthropic account. You need a Claude Pro subscription or API key.</p>

<h3>Step 4: Navigate to Your Project</h3>
<pre class="bg-gray-800 p-4 rounded-lg">cd ~/your-project-folder
claude</pre>

<h3>The CLAUDE.md File — Your Most Important Setup Step</h3>
<p>CLAUDE.md gives Claude Code persistent context about your project. Think of it as onboarding notes that it reads every single session. Create it in your project root:</p>
<pre class="bg-gray-800 p-4 rounded-lg overflow-x-auto"># Project: [Your App Name]

## Stack
- Next.js 14, TypeScript, Tailwind CSS
- Prisma + PostgreSQL (Neon)
- NextAuth, Stripe

## Conventions
- kebab-case for file names
- camelCase for variables
- Always add error handling to API routes
- Run npm run build before committing

## Key Files
- lib/course-data.ts — course content
- app/api/ — all API routes

## Do NOT touch without asking
- prisma/schema.prisma
- .env files</pre>

<div class="bg-green-900/30 p-4 rounded-lg mt-6">
<h4>💡 Keep CLAUDE.md Under 200 Lines</h4>
<p>Long CLAUDE.md files dilute instructions. Use .claude/rules/ for extended documentation and reference specific files from CLAUDE.md instead.</p>
</div>`
      },
      {
        id: 3,
        title: "Core Claude Code Workflows",
        description: "The patterns that actually work for building real things",
        duration: "25 min",
        content: `<h2>Working Effectively with Claude Code</h2>
<p>Claude Code works best when you treat it like a junior engineer with superhuman speed: give clear constraints, demand a plan, enforce tests, and review diffs before accepting.</p>

<h3>The Golden Rule: Plan Before Code</h3>
<p>Never say "build X." Always ask for a plan first:</p>
<pre class="bg-gray-800 p-4 rounded-lg overflow-x-auto">Before writing any code, make a detailed plan for:
[describe the feature]

Include:
- Files you will create or modify
- Key decisions and trade-offs
- Potential edge cases
- Testing approach

Do not write code yet — just the plan.</pre>

<h3>Giving Great Context</h3>
<ul>
<li><strong>Point to files:</strong> "Look at app/api/checkout/route.ts and make the same pattern for refunds"</li>
<li><strong>Describe current behaviour:</strong> "The button currently does X but should do Y"</li>
<li><strong>Paste errors:</strong> Copy the exact error and say "Fix this"</li>
<li><strong>Set constraints:</strong> "Do not modify the database schema. Keep all changes in the API layer."</li>
</ul>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6 mb-6">
<h4>📋 Build a New Feature Step by Step</h4>
<ol class="mt-2 space-y-2">
<li><strong>Step 1:</strong> Open terminal in your project folder, type <code>claude</code></li>
<li><strong>Step 2:</strong> Describe what you want with full context</li>
<li><strong>Step 3:</strong> Claude Code will explore your codebase and ask clarifying questions — answer them</li>
<li><strong>Step 4:</strong> "Before writing code, give me your implementation plan"</li>
<li><strong>Step 5:</strong> Review the plan. If something is wrong: "Change step 3 — use the existing User model instead of creating a new table"</li>
<li><strong>Step 6:</strong> "Implement this plan." Watch it write files, run commands, fix errors.</li>
<li><strong>Step 7:</strong> Review the diff: <code>git diff</code> or <code>git diff --stat</code></li>
<li><strong>Step 8:</strong> <code>git add . && git commit -m "description"</code></li>
</ol>
</div>

<h3>Useful Commands</h3>
<pre class="bg-gray-800 p-4 rounded-lg">claude              # Start interactive session
claude "fix the login bug"  # One-shot task
/plan               # Ask for a plan before coding
/clear              # Clear conversation context
/compact            # Summarise context to save tokens
/cost               # Show current session cost</pre>

<h3>When Things Go Wrong</h3>
<ul>
<li>Wrong direction: "Stop. That is not what I want. Let me be more specific: [clearer description]"</li>
<li>Looping on errors: "You have tried the same approach 3 times. Step back and think of a different approach."</li>
<li>Bad run: <code>git checkout .</code> to revert all changes and start fresh</li>
</ul>`
      },
      {
        id: 4,
        title: "Advanced Claude Code: Sub-agents, Skills and MCP",
        description: "The features that separate power users from beginners",
        duration: "20 min",
        content: `<h2>Going Deeper with Claude Code</h2>

<h3>Sub-agents</h3>
<p>Specialised Claude instances for specific tasks. Create at <code>.claude/agents/security-reviewer.md</code>:</p>
<pre class="bg-gray-800 p-4 rounded-lg overflow-x-auto">---
name: security-reviewer
description: Reviews code for security vulnerabilities
tools: Read, Grep, Glob, Bash
model: opus
---
You are a senior security engineer. Review code for:
- SQL injection, XSS, command injection
- Authentication and authorisation flaws
- Secrets or credentials in code

Provide specific line references and suggested fixes.</pre>
<p>Then say: "Use a subagent to review the new payment code for security issues."</p>

<h3>Skills (SKILL.md Files)</h3>
<p>Markdown files that teach Claude Code custom workflows. Example deployment skill:</p>
<pre class="bg-gray-800 p-4 rounded-lg overflow-x-auto"># Deploy to Production

## Pre-deploy checklist
1. Run npm run build — must succeed
2. Run npm run test — all tests pass
3. No .env changes staged

## Deploy steps
1. git push origin main
2. Vercel auto-deploys — monitor dashboard
3. Test the live URL manually</pre>

<h3>MCP Servers</h3>
<p>Give Claude Code access to external tools:</p>
<ul>
<li><strong>GitHub MCP:</strong> Read and create issues, PRs, check CI</li>
<li><strong>Postgres/Neon MCP:</strong> Query your database directly</li>
<li><strong>Slack MCP:</strong> Post updates and read channels</li>
</ul>
<p>Add MCPs: <code>claude mcp add [server-name]</code></p>

<div class="bg-green-900/30 p-4 rounded-lg mt-6">
<h4>💡 The Writer/Reviewer Pattern</h4>
<p>Have one Claude session write the code. Start a fresh session and say "Review this code for bugs and improvements." Fresh context catches things the original session missed — it is not biased toward code it just wrote.</p>
</div>`
      },
      {
        id: 5,
        title: "Claude Code vs Cursor vs Codex: Choosing Your Stack",
        description: "Honest comparison of the three major coding agents",
        duration: "18 min",
        content: `<h2>The Right Tool for the Right Job</h2>
<p>Claude Code, Cursor, and Codex CLI are complementary tools — most serious developers use 2-3 of them.</p>

<h3>Claude Code — Terminal-First Power</h3>
<ul>
<li><strong>Best for:</strong> Complex multi-file changes, full project builds, architectural work</li>
<li><strong>Pricing:</strong> Pay API rates (~$3/1M input for Sonnet)</li>
<li><strong>Strength:</strong> 1M context, best model quality, full codebase understanding</li>
<li><strong>Weakness:</strong> No visual diff view, terminal-only, costs per token</li>
</ul>

<h3>Cursor — IDE-First Daily Driver</h3>
<ul>
<li><strong>Best for:</strong> Active development alongside AI, quick edits, visual diffs</li>
<li><strong>Pricing:</strong> $20/month flat — includes Claude Sonnet and GPT models</li>
<li><strong>Strength:</strong> Visual diff, 8 parallel agents, familiar IDE experience, $500M ARR</li>
<li><strong>Weakness:</strong> Watch for billing overages on heavy agent use</li>
</ul>

<h3>Codex CLI — OpenAI's Terminal Agent</h3>
<ul>
<li><strong>Best for:</strong> Quick focused tasks, free access, OpenAI ecosystem users</li>
<li><strong>Pricing:</strong> Free tier with GPT-4o, paid for o3/o4-mini</li>
<li><strong>Weakness:</strong> Behind Claude Code on complex reasoning and large codebases</li>
</ul>

<h3>Recommended Stack</h3>
<table class="w-full text-left mt-4">
<tr class="border-b border-gray-700"><th>Situation</th><th>Use This</th></tr>
<tr class="border-b border-gray-700"><td>Day-to-day feature development</td><td>Cursor</td></tr>
<tr class="border-b border-gray-700"><td>Full project build from scratch</td><td>Claude Code or Bolt.new</td></tr>
<tr class="border-b border-gray-700"><td>Complex architectural changes</td><td>Claude Code</td></tr>
<tr class="border-b border-gray-700"><td>Quick script or one-off task</td><td>Codex CLI (free)</td></tr>
<tr class="border-b border-gray-700"><td>Zero-setup prototype</td><td>Bolt.new</td></tr>
<tr><td>Total beginner first project</td><td>Replit or Bolt.new</td></tr>
</table>`
      },
      {
        id: 6,
        title: "Monetising Claude Code Skills",
        description: "Concrete income streams from knowing Claude Code better than anyone",
        duration: "20 min",
        content: `<h2>Turning Claude Code Into Income</h2>

<h3>Service: AI Development Agency</h3>
<p>Take on software projects that normally require a developer. Use Claude Code to build them. Charge developer rates; pay Claude API costs.</p>
<ul>
<li><strong>Target projects:</strong> Internal tools, chatbots, landing pages with complex logic, simple web apps</li>
<li><strong>Pricing:</strong> £500-5,000 per project</li>
<li><strong>Your API cost:</strong> £10-50 per project</li>
<li><strong>Margin:</strong> 80-95%</li>
</ul>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6 mb-6">
<h4>📋 Build and Deliver a Client Chatbot in a Day</h4>
<ol class="mt-2 space-y-2">
<li><strong>Step 1:</strong> Client briefing (30 mins) — get their website URL, FAQ list, any documents they use for customer queries</li>
<li><strong>Step 2:</strong> Open Claude Code in a new project folder. Say: "Build a customer support chatbot for [business name]. Answer questions about their services using the FAQ I will paste. Use Next.js, the OpenAI API, Tailwind. Clean chat interface."</li>
<li><strong>Step 3:</strong> Paste the FAQ content and context when Claude Code asks</li>
<li><strong>Step 4:</strong> Claude Code builds the app. Test it with real customer questions.</li>
<li><strong>Step 5:</strong> Deploy to Vercel. Share the URL.</li>
<li><strong>Step 6:</strong> Bill £800-2,000. Your API cost: £5-20.</li>
</ol>
</div>

<h3>Product: Micro-SaaS</h3>
<p>Build a focused web app that solves one problem. Charge £10-100/month. 50 customers at £30/month = £1,500 MRR from one product.</p>

<h3>Teaching: Claude Code Consulting</h3>
<ul>
<li>Team workshops: £500-2,000/day</li>
<li>1:1 coaching: £150-300/hour</li>
<li>CLAUDE.md setup service: £200-500 to configure a team's environment</li>
</ul>`
      }
    ]
  },
  {
    id: 4,
    title: "AI Service Businesses",
    description: "How to immediately generate income through AI services — real pricing and real client playbooks.",
    outcome: "Students launch a simple AI service offer and get their first paying clients.",
    icon: "Briefcase",
    lessons: [
      {
        id: 1,
        title: "AI Website Creation for Businesses",
        description: "The fastest path to your first £1,000",
        duration: "28 min",
        content: `<h2>The Fastest Path to Your First £1,000</h2>
<p>Local businesses need websites. They do not care how you build them — they care that they look professional and work properly. AI gives you an unfair speed advantage.</p>

<h3>The Service Package</h3>
<ul>
<li>5-page website: Home, About, Services, Gallery, Contact</li>
<li>Mobile responsive design</li>
<li>Contact form with email notifications</li>
<li>Google Business Profile link</li>
<li>Basic on-page SEO</li>
</ul>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6 mb-6">
<h4>📋 Build a Client Website in 2 Hours</h4>
<ol class="mt-2 space-y-2">
<li><strong>Step 1:</strong> Go to bolt.new and describe the site: "Build a professional website for a plumbing business called [name] in [city]. 5 pages: Home, About, Services, Gallery, Contact. Clean modern design with navy and white."</li>
<li><strong>Step 2:</strong> Bolt.new generates the full site. Review it.</li>
<li><strong>Step 3:</strong> Open Claude: "Write website copy for [business name]. Include: punchy hero headline, About section (family-run, 20 years experience), Services list, and Contact CTA." Paste any client info.</li>
<li><strong>Step 4:</strong> Replace placeholder copy with your Claude-written copy</li>
<li><strong>Step 5:</strong> Generate hero image in Midjourney: "Professional plumber at work, modern photography --ar 16:9 --style raw"</li>
<li><strong>Step 6:</strong> Deploy to Vercel (free). Share preview URL with client.</li>
<li><strong>Step 7:</strong> After approval, connect their custom domain.</li>
</ol>
</div>

<h3>Pricing</h3>
<table class="w-full text-left mt-4">
<tr class="border-b border-gray-700"><th>Package</th><th>Price</th><th>Your Time</th></tr>
<tr class="border-b border-gray-700"><td>Basic (5 pages via Bolt.new)</td><td>£1,200</td><td>3-4 hours</td></tr>
<tr class="border-b border-gray-700"><td>Standard (10 pages, custom features)</td><td>£2,500</td><td>1-2 days</td></tr>
<tr><td>Premium (custom design, Claude Code)</td><td>£4,000+</td><td>3-5 days</td></tr>
</table>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6 mb-6">
<h4>📋 Find Your First 10 Clients</h4>
<ol class="mt-2 space-y-2">
<li><strong>Step 1:</strong> Open Google Maps. Search "plumber [your city]" or "restaurant [your city]"</li>
<li><strong>Step 2:</strong> Check each listing. No website = potential client.</li>
<li><strong>Step 3:</strong> List 50 businesses without websites</li>
<li><strong>Step 4:</strong> Find their contact info from Google</li>
<li><strong>Step 5:</strong> Use Claude to write an 80-word cold email: "Write a cold email to a local [business type] offering a professional website. Mention I noticed they do not have one and can build it quickly. No jargon."</li>
<li><strong>Step 6:</strong> Send 10 emails per day for 5 days. Follow up after 3 days.</li>
<li><strong>Step 7:</strong> Expect 2-5 responses and 1-2 clients from 50 emails</li>
</ol>
</div>`
      },
      {
        id: 2,
        title: "AI Content Services",
        description: "Blog writing, social content, and email campaigns that pay £800-2,500/month",
        duration: "25 min",
        content: `<h2>Content That Pays at Scale</h2>
<p>Businesses need constant content. AI lets you deliver volume without sacrificing quality. The gap between what clients pay and what it costs you is your margin.</p>

<h3>Service Menu</h3>
<ul>
<li><strong>Blog Writing:</strong> £80-250/article. SEO-optimised, 1,200-2,500 words. Your time: 30-45 minutes per article.</li>
<li><strong>Social Media:</strong> £400-1,200/month. 30 posts with captions, hashtags, and graphics.</li>
<li><strong>Email Marketing:</strong> £150-400/campaign. Sequences, newsletters, nurture flows.</li>
</ul>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6 mb-6">
<h4>📋 Write an SEO Blog Post in 45 Minutes</h4>
<ol class="mt-2 space-y-2">
<li><strong>Step 1:</strong> Open Perplexity. Search your topic. Read the top 3 results and note what they cover and what they miss.</li>
<li><strong>Step 2:</strong> Open Claude: "Create a 1,500-word post outline titled [TITLE]. Target keyword: [KEYWORD]. Include H1, 5 H2 sections each with 2-3 sub-points."</li>
<li><strong>Step 3:</strong> Add anything your Perplexity research found that is missing</li>
<li><strong>Step 4:</strong> Claude: "Write the full post. Open with a hook addressing the reader's pain point directly. Include specific examples and data."</li>
<li><strong>Step 5:</strong> Edit anything generic — especially intro and conclusion</li>
<li><strong>Step 6:</strong> Write meta title and description with Claude</li>
<li><strong>Step 7:</strong> Deliver in Google Doc or directly to their CMS</li>
</ol>
</div>

<h3>Building to £4,000/month Recurring</h3>
<p>5 retainer clients at £800/month = £4,000 MRR. Achievable in 3-6 months. Start with one-off projects to get testimonials, then pitch retainers.</p>`
      },
      {
        id: 3,
        title: "AI Chatbot and Agent Deployment",
        description: "Deploy chatbots that pay you £400-2,000+ per installation",
        duration: "25 min",
        content: `<h2>24/7 Customer Service in a Day</h2>
<p>Businesses lose leads every night when no one answers. AI chatbots solve this immediately — and the ROI is obvious to clients, making them easy to sell.</p>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6 mb-6">
<h4>📋 Deploy a Client Chatbot in 3 Hours</h4>
<ol class="mt-2 space-y-2">
<li><strong>Step 1:</strong> Go to chatbase.co and create a free account</li>
<li><strong>Step 2:</strong> New Chatbot then Website then enter client's URL — Chatbase crawls and trains automatically</li>
<li><strong>Step 3:</strong> Add extra knowledge: paste FAQs, pricing, and service descriptions in the Text tab</li>
<li><strong>Step 4:</strong> Settings — set persona: name, greeting, instructions ("Always collect name and email before discussing pricing")</li>
<li><strong>Step 5:</strong> Match brand colours and font in Appearance</li>
<li><strong>Step 6:</strong> Copy embed code from the Connect tab</li>
<li><strong>Step 7:</strong> Add to client's website before the closing body tag</li>
<li><strong>Step 8:</strong> Test with 10 real customer questions and set up lead notifications</li>
</ol>
</div>

<h3>Tools</h3>
<ul>
<li><strong>Chatbase:</strong> Best overall. Train on any data, clean UI, easy embed.</li>
<li><strong>Voiceflow:</strong> Visual builder for complex conversation flows.</li>
<li><strong>Tidio:</strong> Live chat plus AI hybrid. Great for e-commerce.</li>
<li><strong>Custom via Claude Code:</strong> For bigger budgets who want a fully bespoke UI.</li>
</ul>

<h3>Pricing</h3>
<table class="w-full text-left mt-4">
<tr class="border-b border-gray-700"><th>Package</th><th>Setup</th><th>Monthly</th></tr>
<tr class="border-b border-gray-700"><td>Basic FAQ Bot</td><td>£400</td><td>£80</td></tr>
<tr class="border-b border-gray-700"><td>Lead Qualifier</td><td>£800</td><td>£150</td></tr>
<tr><td>Custom Agent (API)</td><td>£2,000+</td><td>£400+</td></tr>
</table>`
      },
      {
        id: 4,
        title: "AI Lead Generation Systems",
        description: "Automated prospecting systems — a £2,500-5,000 service",
        duration: "22 min",
        content: `<h2>The High-Value Service: Lead Generation</h2>
<p>Every business needs leads. AI can automate the entire prospecting process and clients pay serious money for a system that brings them qualified prospects automatically.</p>

<h3>The Tech Stack</h3>
<ul>
<li><strong>Apollo.io:</strong> Find prospects matching any criteria. 50 free credits/month.</li>
<li><strong>Clay:</strong> Enrich data with LinkedIn, company news, recent activity. $149/mo.</li>
<li><strong>Claude API:</strong> Generate unique personalised opening lines for each prospect.</li>
<li><strong>Instantly:</strong> Warm inbox delivery, high deliverability. $37/mo.</li>
<li><strong>Make:</strong> Connect the entire workflow together.</li>
</ul>

<h3>The Workflow</h3>
<ol>
<li>Define ideal customer profile: industry, company size, role</li>
<li>Pull prospect list from Apollo matching those criteria</li>
<li>Enrich each prospect with Clay using LinkedIn posts and company news</li>
<li>Claude API writes a personalised opening line using their specific recent activity</li>
<li>Load personalised emails into Instantly sequence</li>
<li>Route positive replies to client CRM automatically via Make</li>
</ol>

<h3>Pricing</h3>
<table class="w-full text-left mt-4">
<tr class="border-b border-gray-700"><th>Model</th><th>Price</th></tr>
<tr class="border-b border-gray-700"><td>Setup fee (full system build)</td><td>£2,500-5,000</td></tr>
<tr class="border-b border-gray-700"><td>Monthly retainer</td><td>£1,500-3,000</td></tr>
<tr><td>Per qualified lead</td><td>£50-200</td></tr>
</table>`
      },
      {
        id: 5,
        title: "Packaging and Pricing Your AI Services",
        description: "Turn your skills into offers that clients actually buy",
        duration: "20 min",
        content: `<h2>From Skills to Sales</h2>
<p>Great skills do not sell themselves. You need clear compelling offers that make buying feel obvious.</p>

<h3>The Offer Framework</h3>
<ul>
<li><strong>Problem:</strong> What specific pain are you solving?</li>
<li><strong>Promise:</strong> What outcome do you deliver?</li>
<li><strong>Price:</strong> What is the investment?</li>
<li><strong>Proof:</strong> Why should they trust you?</li>
</ul>

<div class="bg-red-900/30 p-4 rounded-lg mb-4">
<p><strong>Bad:</strong> "I do AI stuff and can help your business"</p>
</div>
<div class="bg-green-900/30 p-4 rounded-lg mb-6">
<p><strong>Good:</strong> "I help dental practices get 20+ new patient enquiries per month with an AI chatbot that answers website visitors 24/7. Setup in 3 days or your money back."</p>
</div>

<h3>The 3-Tier Package Structure</h3>
<ul>
<li><strong>Starter:</strong> Entry point, lower risk — gives hesitant buyers a way in</li>
<li><strong>Professional:</strong> Your main offer — where 70% of clients land</li>
<li><strong>Premium:</strong> White-glove service — rarely bought but anchors the pricing</li>
</ul>

<h3>Getting Your First Clients Without Proof</h3>
<ol>
<li>Do 3-5 projects at reduced rates in exchange for a detailed testimonial</li>
<li>Document results with numbers: "Increased enquiries by 40%", "Saved 12 hours/week"</li>
<li>Turn the best result into a case study PDF (Claude writes it in minutes)</li>
<li>Use the case study in all future pitches</li>
</ol>`
      }
    ]
  },
  {
    id: 5,
    title: "AI Monetisation Models",
    description: "The different ways AI systems turn into income streams — from freelancing to SaaS to content.",
    outcome: "Students choose a monetisation path and build a repeatable income model.",
    icon: "TrendingUp",
    lessons: [
      {
        id: 1,
        title: "Freelancing with AI",
        description: "Supercharge your freelance income and land clients fast",
        duration: "20 min",
        content: `<h2>The AI-Powered Freelancer</h2>
<p>AI does not replace freelancers — it makes them 5-10x more productive. A freelancer who delivers in 20% of the time is effectively earning 5x their stated rate.</p>

<h3>High-Demand AI Freelance Services in 2026</h3>
<ul>
<li>AI-assisted content writing — blog, social, email</li>
<li>AI chatbot development and deployment</li>
<li>Automation consulting and build via Make or n8n</li>
<li>Claude Code development for non-technical clients</li>
<li>AI image and visual asset creation</li>
<li>Prompt engineering and workflow optimisation</li>
</ul>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6 mb-6">
<h4>📋 Launch Your Upwork Profile in 30 Minutes</h4>
<ol class="mt-2 space-y-2">
<li><strong>Step 1:</strong> Go to upwork.com and create a freelancer account</li>
<li><strong>Step 2:</strong> Ask Claude: "Write an Upwork title and overview for an AI automation specialist who helps businesses save time with custom workflows. Results-focused. Title under 80 chars. Overview 200 words."</li>
<li><strong>Step 3:</strong> Set hourly rate at £50 to start. Raise it after your first 5-star review.</li>
<li><strong>Step 4:</strong> Create 3 portfolio samples — demo projects you built yourself</li>
<li><strong>Step 5:</strong> Apply to 5 jobs per day with personalised proposals using Claude</li>
</ol>
</div>

<h3>Pricing Progression</h3>
<table class="w-full text-left mt-4">
<tr class="border-b border-gray-700"><th>Phase</th><th>Hourly</th><th>Project Min</th></tr>
<tr class="border-b border-gray-700"><td>Starting out (0-5 reviews)</td><td>£40-60</td><td>£300</td></tr>
<tr class="border-b border-gray-700"><td>Established (5+ reviews)</td><td>£75-120</td><td>£800</td></tr>
<tr><td>Expert (results plus case studies)</td><td>£150+</td><td>£2,000+</td></tr>
</table>`
      },
      {
        id: 2,
        title: "Building an AI Agency",
        description: "Scale from freelancer to agency — the path to £10,000/month",
        duration: "22 min",
        content: `<h2>From Freelancer to Agency</h2>
<p>An agency lets you earn beyond your personal hours. AI makes this easier than ever — AI systems do the work, humans come in only when truly needed.</p>

<h3>The AI-First Agency Model</h3>
<pre class="bg-gray-800 p-4 rounded-lg">You (Founder)
├── Sales and Client Management
├── AI Systems (leverage — does the work)
│   ├── Claude Code for development
│   ├── Make/n8n for automation delivery
│   ├── Claude for content production
│   └── Midjourney for visual assets
└── Human Contractors (only as needed)</pre>

<h3>Growth Path</h3>
<ol>
<li><strong>Phase 1:</strong> Solo plus AI leverage — £0-5,000/month</li>
<li><strong>Phase 2:</strong> 3-5 retainer clients — £5,000-10,000/month</li>
<li><strong>Phase 3:</strong> First part-time hire — £10,000-25,000/month</li>
<li><strong>Phase 4:</strong> You sell, team delivers — £25,000+/month</li>
</ol>

<h3>Common Early Mistakes</h3>
<ul>
<li>Taking on too many service types before proving one</li>
<li>Underpricing to win clients — attracts difficult clients and devalues your work</li>
<li>Not using contracts — always use them, even with friendly clients</li>
<li>Over-relying on one client — no single client should exceed 40% of revenue</li>
</ul>`
      },
      {
        id: 3,
        title: "Digital Products and Prompt Packs",
        description: "Create and sell info products, templates, and AI tools while you sleep",
        duration: "20 min",
        content: `<h2>Passive Income Through Products</h2>
<p>Digital products sell while you sleep. AI dramatically cuts creation time — what used to take weeks now takes days.</p>

<h3>Product Types</h3>
<ul>
<li><strong>Prompt packs:</strong> Curated collections for specific professions or use cases. £15-50. Low effort, scalable.</li>
<li><strong>Templates:</strong> Notion dashboards, Airtable bases, spreadsheet systems. £27-97.</li>
<li><strong>eBooks and Guides:</strong> How-to guides, playbooks, tutorials. £19-49.</li>
<li><strong>Mini-courses:</strong> 5-10 lessons. £97-297.</li>
<li><strong>AI Tools:</strong> Web apps built with Claude Code plus Stripe. £10-50/month recurring.</li>
</ul>

<h3>The AI Creation Process</h3>
<ol>
<li><strong>Research demand:</strong> Search Reddit, Gumroad, and Etsy for what is already selling</li>
<li><strong>Outline:</strong> Claude creates a comprehensive structure in minutes</li>
<li><strong>Draft:</strong> Claude writes the first version</li>
<li><strong>Edit:</strong> You add personality, specific examples, and real experience</li>
<li><strong>Design:</strong> Canva for ebooks, Loom for video recordings</li>
<li><strong>Sales copy:</strong> Claude writes your product page</li>
</ol>

<h3>Where to Sell</h3>
<ul>
<li><strong>Gumroad:</strong> Simple setup, low fees, built-in discovery</li>
<li><strong>Lemon Squeezy:</strong> Better for SaaS pricing and subscriptions</li>
<li><strong>Stan Store:</strong> Best for creator-economy audiences</li>
<li><strong>Your own site:</strong> Zero fees, maximum control — Stripe plus Vercel</li>
</ul>`
      },
      {
        id: 4,
        title: "AI SaaS and Micro-Tools",
        description: "Build and sell AI-powered software — even without a coding background",
        duration: "28 min",
        content: `<h2>Building Products That Scale</h2>
<p>Micro-SaaS products solve one problem for one audience. With Claude Code you can go from idea to paying customers in weeks.</p>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6 mb-6">
<h4>📋 Validate Before Building</h4>
<ol class="mt-2 space-y-2">
<li><strong>Step 1:</strong> Find a problem on Reddit — search "I wish there was a tool that..."</li>
<li><strong>Step 2:</strong> Search the problem plus "software" on Google. Competitors = proven market.</li>
<li><strong>Step 3:</strong> Post in relevant communities: "Building [TOOL] for [AUDIENCE]. Would you pay £X/month?" Get 10 yes answers before building anything.</li>
<li><strong>Step 4:</strong> Build a landing page first on Carrd.co (£9/year). Add a waitlist.</li>
<li><strong>Step 5:</strong> Get 50 email signups before writing code. Cannot get 50? Reconsider.</li>
<li><strong>Step 6:</strong> Build MVP with Claude Code plus Next.js plus Supabase plus Stripe.</li>
<li><strong>Step 7:</strong> Email waitlist with 50% off first 3 months. Get 10 paying customers before investing more time.</li>
</ol>
</div>

<h3>Underserved Micro-SaaS Ideas for 2026</h3>
<ul>
<li>AI proposal generator for a specific profession — photographers, plumbers, consultants</li>
<li>Automated Google review responder for local businesses</li>
<li>YouTube transcript to blog plus social posts repurposer</li>
<li>AI meeting notes with action item extraction plus CRM sync</li>
<li>Job description scorer for HR managers</li>
</ul>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6 mb-6">
<h4>📋 Build a Simple AI Tool with Claude Code</h4>
<ol class="mt-2 space-y-2">
<li><strong>Step 1:</strong> Open terminal in an empty folder. Type: <code>claude</code></li>
<li><strong>Step 2:</strong> Say: "Build a Next.js app. User pastes text into a textarea and clicks Generate. It calls the Anthropic API and displays the response. Style with Tailwind. Add a loading state."</li>
<li><strong>Step 3:</strong> Run <code>npm install && npm run dev</code> to test</li>
<li><strong>Step 4:</strong> Customise the system prompt in the API route for your specific use case</li>
<li><strong>Step 5:</strong> Deploy to Vercel. Then: "Add Stripe Checkout. Gate the Generate button behind a subscription."</li>
<li><strong>Step 6:</strong> Live paid AI tool. Add your domain and launch.</li>
</ol>
</div>`
      },
      {
        id: 5,
        title: "Content Channels and Affiliate Income",
        description: "Build an audience with AI-assisted content and monetise it multiple ways",
        duration: "22 min",
        content: `<h2>Audience-First Business</h2>
<p>Content builds trust at scale. An audience is a distribution channel for every other income stream you build.</p>

<h3>YouTube with AI</h3>
<ul>
<li><strong>Scripts:</strong> Claude writes full scripts from your bullet points</li>
<li><strong>Research:</strong> Perplexity gathers talking points with cited sources</li>
<li><strong>Thumbnails:</strong> Midjourney generates concepts, Canva finalises</li>
<li><strong>SEO:</strong> Claude optimises titles, descriptions, and tags</li>
<li><strong>Repurposing:</strong> Opus Clip turns long videos into Shorts automatically</li>
</ul>

<h3>Newsletter with AI</h3>
<ul>
<li>Perplexity finds relevant content weekly</li>
<li>Claude drafts each section from your bullet points</li>
<li>AI makes consistency achievable — the hardest part of newsletters</li>
</ul>

<h3>AI Tool Affiliate Programs Worth Promoting</h3>
<table class="w-full text-left mt-4">
<tr class="border-b border-gray-700"><th>Program</th><th>Commission</th><th>Cookie</th></tr>
<tr class="border-b border-gray-700"><td>Jasper</td><td>30% recurring</td><td>30 days</td></tr>
<tr class="border-b border-gray-700"><td>Notion</td><td>50% first year</td><td>90 days</td></tr>
<tr class="border-b border-gray-700"><td>Make (Integromat)</td><td>20% recurring</td><td>60 days</td></tr>
<tr><td>ElevenLabs</td><td>22% recurring</td><td>90 days</td></tr>
</table>

<h3>Monetisation Stacking</h3>
<ol>
<li>Build audience with free content — YouTube, newsletter, Twitter/X</li>
<li>Monetise with affiliate links to tools you genuinely use</li>
<li>Sell a digital product to the same audience</li>
<li>Offer consulting to your most engaged followers</li>
</ol>`
      },
      {
        id: 6,
        title: "Scaling and Building Recurring Revenue",
        description: "Turn one-off projects into monthly income that compounds",
        duration: "18 min",
        content: `<h2>From Income to Wealth</h2>
<p>One-off projects are fine for cash flow. Recurring revenue builds a real business.</p>

<h3>The Retainer Conversion</h3>
<p>After completing a project successfully: "I can continue improving this on an ongoing basis. Most clients find [monthly service] saves them [X hours] or delivers [Y results]. Here is what I would recommend."</p>
<p>Make retainer deliverables specific — not "AI support" but "4 blog posts plus 30 social posts plus 1 email campaign."</p>

<h3>Recurring Revenue Models</h3>
<ul>
<li>Content retainers: £400-2,500/month</li>
<li>Automation management: £200-500/month</li>
<li>Chatbot management: £80-400/month</li>
<li>Micro-SaaS subscriptions: scales automatically</li>
<li>Consulting retainers: £500-2,000/month</li>
</ul>

<h3>The Reinvestment Framework</h3>
<pre class="bg-gray-800 p-4 rounded-lg">Monthly Revenue
├── 50% — Business operations
├── 30% — Personal income
└── 20% — Growth fund
    ├── Better AI tools
    ├── Education
    └── Marketing experiments</pre>

<div class="bg-green-900/30 p-4 rounded-lg mt-6">
<h4>💰 The Core Insight</h4>
<p>The goal is not to work more hours. It is to earn more per hour worked. AI is your leverage — it multiplies what one person can produce. Build systems, not just skills.</p>
</div>`
      }
    ]
  },
  {
    id: 6,
    title: "OpenClaw, Dispatch and The Agent Frontier",
    description: "Master personal AI agents — OpenClaw setup, Dispatch comparison, and the essential tools for a fully autonomous setup.",
    outcome: "Students configure a personal AI agent with email, memory, and web access — and understand when to use OpenClaw vs Dispatch.",
    icon: "Settings",
    lessons: [
      {
        id: 1,
        title: "Introduction to OpenClaw",
        description: "Your personal AI agent — what it is, why it matters, and the three gaps we are going to fix",
        duration: "15 min",
        content: `<h2>Your Personal AI Agent</h2>
<p>I have been running OpenClaw on a dedicated Mac Mini as my personal AI agent. It has access to Telegram, my calendar, task manager, YouTube channel, Obsidian vault, and many other tools.</p>

<p>But even after wiring up all those integrations, I found three big gaps:</p>
<ul>
<li>OpenClaw cannot send emails</li>
<li>Cannot reliably remember what you worked on last week</li>
<li>Cannot browse the web efficiently</li>
</ul>

<p>This module covers three tools that fix all of that — plus the exact prompts you paste into Claude Code to set each one up in minutes.</p>

<h3>Before You Start</h3>
<pre class="bg-gray-800 p-4 rounded-lg"><code>cd $HOME/.openclaw</code></pre>
<p>This puts you in the OpenClaw workspace. Launch Claude Code from this directory — all setup steps assume you are here.</p>

<h3>Why Use Claude Code to Set Up OpenClaw?</h3>
<p>Anthropic has moved to API-key-only access for third-party OpenClaw integrations. When OpenClaw runs day-to-day it burns tokens. I use Claude Code to build all OpenClaw's systems correctly upfront — then when OpenClaw runs, it executes those systems rather than spending tokens fixing faulty setups.</p>`
      },
      {
        id: 2,
        title: "OpenClaw vs Dispatch: Which Agent Platform Is Right For You?",
        description: "An honest comparison of the two leading personal AI agent platforms in May 2026",
        duration: "18 min",
        content: `<h2>The Two Paths for Personal AI Agents</h2>
<p>When people talk about running a personal AI agent in 2026, two platforms come up most: <strong>OpenClaw</strong> and <strong>Dispatch</strong> (from the Hermes Agent team). They solve the same problem differently.</p>

<h3>OpenClaw</h3>
<ul>
<li><strong>What it is:</strong> Self-hosted AI agent framework you install on your own machine or server</li>
<li><strong>Model:</strong> Runs Claude (Anthropic API) under the hood</li>
<li><strong>Strengths:</strong> Highly customisable via SKILL.md files, active ClawHub community, deep integration with local tools like Obsidian and Telegram</li>
<li><strong>Weaknesses:</strong> Requires setup effort, always-on costs API tokens, API keys required (Anthropic restricted subscription access), some ClawHub skills are low quality or unverified</li>
<li><strong>Best for:</strong> Power users who want full control and are comfortable with the setup work</li>
<li><strong>Cost:</strong> Heavy use can run £30-100/month in tokens</li>
</ul>

<h3>Dispatch (Hermes Agent)</h3>
<ul>
<li><strong>What it is:</strong> Managed agent platform — you define workflows, Dispatch runs them reliably on a schedule</li>
<li><strong>Model:</strong> Model-agnostic — Claude, GPT, Gemini, or local models</li>
<li><strong>Strengths:</strong> Far more reliable for scheduled automations, native cron scheduling, lower token costs because it only runs when triggered, easier setup, GDPR-friendly self-host option</li>
<li><strong>Weaknesses:</strong> Less flexible than OpenClaw for deeply custom integrations, smaller community</li>
<li><strong>Best for:</strong> Reliable scheduled automations without the always-on token burn</li>
<li><strong>Cost:</strong> Typically lower than OpenClaw for equivalent work</li>
</ul>

<h3>The Honest Verdict</h3>
<table class="w-full text-left mt-4">
<tr class="border-b border-gray-700"><th>Use Case</th><th>Best Choice</th></tr>
<tr class="border-b border-gray-700"><td>Always-on assistant with deep personal integrations</td><td>OpenClaw</td></tr>
<tr class="border-b border-gray-700"><td>Scheduled automations — daily briefing, weekly reports</td><td>Dispatch</td></tr>
<tr class="border-b border-gray-700"><td>Reliability and low cost above all else</td><td>Dispatch</td></tr>
<tr class="border-b border-gray-700"><td>Custom skills and community ecosystem</td><td>OpenClaw</td></tr>
<tr><td>Starting out and want easy setup</td><td>Dispatch</td></tr>
</table>

<p>Many power users run both: Dispatch for reliable scheduled tasks, OpenClaw for on-demand interactive sessions. They are complementary, not competing.</p>

<div class="bg-green-900/30 p-4 rounded-lg mt-6">
<h4>💡 Real-World Stack Example</h4>
<p>"Claude Code for codebase changes, Cursor for day-to-day editing, Dispatch for scheduled automations (research synthesis, project management tasks), Perplexity for quick research." Total: approximately £150/month. Estimated time saved: 15-20 hours/week.</p>
</div>`
      },
      {
        id: 3,
        title: "How Skills Work in OpenClaw",
        description: "Understanding the skill system and ClawHub",
        duration: "10 min",
        content: `<h2>Adding Capabilities to OpenClaw</h2>
<p>There are two ways to add skills to OpenClaw:</p>

<h3>Method 1: Manually</h3>
<p>Create a SKILL.md file with all the instructions OpenClaw needs to use a tool. Claude Code is excellent for building these out.</p>

<h3>Method 2: ClawHub</h3>
<p>OpenClaw's skill registry — pre-built skills from the OpenClaw creator, official tool authors, and the community.</p>

<div class="bg-yellow-900/30 p-4 rounded-lg my-4">
<h4>⚠️ Warning on ClawHub</h4>
<p>There have been reports of malware in some community-uploaded skills. Stick to official or well-known authors. All three tools in this module come from verified sources.</p>
</div>

<h3>Installing ClawHub</h3>
<pre class="bg-gray-800 p-4 rounded-lg">npm i -g clawhub</pre>

<h3>Resources</h3>
<ul>
<li><a href="https://clawhub.ai" target="_blank" class="text-green-400 hover:underline">ClawHub Registry</a></li>
<li><a href="https://docs.openclaw.ai/tools/skills" target="_blank" class="text-green-400 hover:underline">OpenClaw Skills Documentation</a></li>
</ul>`
      },
      {
        id: 4,
        title: "Tool 1: AgentMail",
        description: "Give your agent its own dedicated email inbox",
        duration: "20 min",
        content: `<h2>AgentMail: Email Built for AI Agents</h2>
<p><a href="https://agentmail.to" target="_blank" class="text-green-400 hover:underline">AgentMail</a> is a Y Combinator-backed startup that built an email platform specifically for AI agents. Your agent gets its own real inbox — designed from the ground up for programmatic use, not adapted from consumer Gmail.</p>

<h3>Step 1: Create an Account</h3>
<ol>
<li>Go to agentmail.to and sign up (free)</li>
<li>Free tier: up to 3 inboxes</li>
<li>Create your first inbox — address will be yourname@agentmail.to</li>
<li>Copy the inbox name — you will need it in a moment</li>
</ol>

<h3>Step 2: Grab Your API Key</h3>
<p>Dashboard then API keys then generate your first key. Keep a copy.</p>

<h3>Step 3: Install with Claude Code</h3>
<pre class="bg-gray-800 p-4 rounded-lg overflow-x-auto">
Set up AgentMail for my OpenClaw agent.

Skill docs: https://clawhub.ai/adboio/agentmail

Steps:
1. Install AgentMail skill via clawhub if not installed
2. Configure AGENTMAIL_API_KEY in openclaw.json
   My key: [YOUR_KEY]
3. My agent inbox: [YOUR_INBOX]
4. Install SDK: pip install agentmail python-dotenv
5. Test sending and receiving an email
</pre>

<h3>Use Cases</h3>
<ul>
<li>Forward newsletters to your agent for daily summaries</li>
<li>Set up a support inbox for first-line AI responses</li>
<li>Process incoming invoices and extract key data</li>
<li>Build a daily email digest delivered to Telegram</li>
</ul>`,
        resources: [
          { title: "AgentMail Website", url: "https://agentmail.to" },
          { title: "AgentMail Skill on ClawHub", url: "https://clawhub.ai/adboio/agentmail" }
        ]
      },
      {
        id: 5,
        title: "Tool 2: QMD Memory System",
        description: "Semantic memory that actually works — the single biggest OpenClaw upgrade",
        duration: "25 min",
        content: `<h2>QMD: The Upgrade That Changes Everything</h2>
<p>This is probably the most impactful tool in this entire module. Let me explain the problem first.</p>

<h3>The Problem with Default Memory</h3>
<p>OpenClaw's default memory uses keyword-based search. If you ask "what did we do with the landing page last week?" but the actual session used different words — the search fails. Your agent forgets things.</p>

<p>And it gets worse over time: more interactions means more memories means bloated queries means irrelevant tokens means slower and more expensive responses.</p>

<h3>What QMD Is</h3>
<p><a href="https://github.com/tobi/qmd" target="_blank" class="text-green-400 hover:underline">QMD</a> is an open-source tool from Tobi Lutke (CEO of Shopify). It is a local hybrid search engine combining three strategies:</p>
<ul>
<li><strong>Keyword search:</strong> Traditional matching</li>
<li><strong>Vector semantic search:</strong> Understands meaning, not just exact words</li>
<li><strong>LLM-powered re-ranker:</strong> Scores results by actual relevance to your query</li>
</ul>

<p>Everything runs entirely on your machine. No API keys, no cloud, no data leaving. Small local models handle it all efficiently.</p>

<h3>Setup with Claude Code</h3>
<pre class="bg-gray-800 p-4 rounded-lg overflow-x-auto">
Set up QMD as the memory backend for OpenClaw.
Docs: https://docs.openclaw.ai/concepts/memory#qmd-backend-experimental

Steps:
1. Install QMD CLI
2. Install SQLite with extension support
   macOS: brew install sqlite
3. Configure memory.backend = "qmd" in openclaw.json
4. Add workspace memory files as a QMD collection
5. Run initial embed so local models download and index builds
6. Verify with a test query
</pre>

<div class="bg-green-900/30 p-4 rounded-lg mt-6">
<h4>💡 The Single Biggest Upgrade</h4>
<p>If I could only install one thing from this entire module, it would be QMD. Your agent actually remembers what you worked on and finds it semantically — not just by keyword.</p>
</div>`,
        resources: [
          { title: "QMD GitHub Repository", url: "https://github.com/tobi/qmd" },
          { title: "OpenClaw Memory Docs", url: "https://docs.openclaw.ai/concepts/memory#qmd-backend-experimental" }
        ]
      },
      {
        id: 6,
        title: "Tool 3: Agent-Browser",
        description: "Real web browsing at 93% fewer tokens than alternatives",
        duration: "20 min",
        content: `<h2>Agent-Browser: Web Access Done Right</h2>
<p><a href="https://github.com/vercel-labs/agent-browser" target="_blank" class="text-green-400 hover:underline">Agent-browser</a> is a CLI tool from Vercel. It gives your agent a real Chromium browser — not just HTML scraping. Navigate pages, click things, take screenshots, fill forms, and interact with web apps exactly like a human would.</p>

<h3>Why Not Playwright?</h3>
<p>Playwright is the standard browser automation library, but it is token-inefficient for AI agents. Every page interaction generates massive amounts of data your agent must process — filling context windows and burning costs.</p>

<p><strong>Agent-browser delivers the same capabilities with 93% fewer tokens.</strong> For an always-on or frequently-triggered agent, that is an enormous cost and performance difference.</p>

<h3>Installation</h3>
<pre class="bg-gray-800 p-4 rounded-lg">npm install -g agent-browser</pre>

<h3>Setup with Claude Code</h3>
<pre class="bg-gray-800 p-4 rounded-lg overflow-x-auto">
Install agent-browser skill for my OpenClaw agent.

Skill docs: https://github.com/vercel-labs/agent-browser/tree/main/skills/agent-browser
OpenClaw skills docs: https://docs.openclaw.ai/tools/skills

Steps:
1. Install skill into OpenClaw skills directory
2. Include SKILL.md and reference docs from the repo
3. Verify skill shows as eligible
4. Set as default for all web browsing tasks
</pre>

<h3>Use Cases</h3>
<ul>
<li><strong>No-API workflows:</strong> Interact with sites that do not have APIs — fill forms, export reports</li>
<li><strong>Self-verifying code:</strong> Agent opens preview URLs and confirms fixes worked</li>
<li><strong>Price and stock monitoring:</strong> Automated alerts when things change</li>
<li><strong>Competitor tracking:</strong> Notify when competitor pages update</li>
<li><strong>Security guardrails:</strong> Built-in prompt injection defences included</li>
</ul>`,
        resources: [
          { title: "Agent-Browser GitHub", url: "https://github.com/vercel-labs/agent-browser" },
          { title: "OpenClaw Skills Docs", url: "https://docs.openclaw.ai/tools/skills" }
        ]
      },
      {
        id: 7,
        title: "Putting It All Together",
        description: "Your complete agent setup and what comes next",
        duration: "10 min",
        content: `<h2>Your Upgraded Agent Stack</h2>

<div class="grid gap-4 my-6">
<div class="bg-gray-800 p-4 rounded-lg">
<h4 class="text-green-400">📧 AgentMail</h4>
<p>Your agent's own email inbox — send and receive programmatically, no Gmail risks</p>
</div>
<div class="bg-gray-800 p-4 rounded-lg">
<h4 class="text-green-400">🧠 QMD</h4>
<p>Semantic memory — your agent finds what you worked on even when the wording is different</p>
</div>
<div class="bg-gray-800 p-4 rounded-lg">
<h4 class="text-green-400">🌐 Agent-Browser</h4>
<p>Real web browsing at 93% fewer tokens than alternatives</p>
</div>
</div>

<h3>Recommended Setup Order</h3>
<ol>
<li><strong>QMD first</strong> — Most impactful immediate improvement</li>
<li><strong>AgentMail second</strong> — Opens email workflows</li>
<li><strong>Agent-Browser third</strong> — Completes web capabilities</li>
</ol>

<h3>OpenClaw vs Dispatch Recap</h3>
<p>If you found OpenClaw setup too heavy and want reliability over flexibility, try Dispatch/Hermes Agent instead. Many power users run both — Dispatch for scheduled automations, OpenClaw for on-demand interactive work. Both benefit from the same QMD memory and agent-browser principles covered in this module.</p>

<h3>All Resources</h3>
<ul>
<li><a href="https://agentmail.to" target="_blank" class="text-green-400 hover:underline">AgentMail</a></li>
<li><a href="https://clawhub.ai/adboio/agentmail" target="_blank" class="text-green-400 hover:underline">AgentMail Skill on ClawHub</a></li>
<li><a href="https://github.com/tobi/qmd" target="_blank" class="text-green-400 hover:underline">QMD on GitHub</a></li>
<li><a href="https://docs.openclaw.ai/concepts/memory#qmd-backend-experimental" target="_blank" class="text-green-400 hover:underline">OpenClaw Memory Docs</a></li>
<li><a href="https://github.com/vercel-labs/agent-browser" target="_blank" class="text-green-400 hover:underline">Agent-Browser on GitHub</a></li>
<li><a href="https://clawhub.ai" target="_blank" class="text-green-400 hover:underline">ClawHub Registry</a></li>
</ul>

<div class="bg-green-900/30 p-4 rounded-lg mt-6">
<h4>🎉 You Have Completed AI Money Maniac!</h4>
<p>You now have the knowledge, tools, and playbooks to start making serious money with AI in 2026. The landscape will keep evolving — but the systems thinking, agent orchestration, service delivery, and product building skills you have learned will compound with every new tool that appears. Go build something. The market is wide open.</p>
</div>`,
        resources: [
          { title: "AgentMail", url: "https://agentmail.to" },
          { title: "QMD", url: "https://github.com/tobi/qmd" },
          { title: "Agent-Browser", url: "https://github.com/vercel-labs/agent-browser" },
          { title: "ClawHub", url: "https://clawhub.ai" }
        ]
      }
    ]
  }
];

export const getTotalLessons = (): number => {
  return courseModules.reduce((total, module) => total + (module?.lessons?.length ?? 0), 0);
};

export const getModuleLessonCount = (moduleId: number): number => {
  const module = courseModules.find(m => m?.id === moduleId);
  return module?.lessons?.length ?? 0;
};
