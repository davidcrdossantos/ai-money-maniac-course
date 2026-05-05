export interface Lesson {
  id: number;
  title: string;
  description: string;
  duration: string;
  content: string;
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
    description: "The minimum you need to understand about AI to use it intelligently and profitably.",
    outcome: "Students understand how AI systems work well enough to build with them, not just experiment.",
    icon: "Brain",
    lessons: [
      {
        id: 1,
        title: "What AI Actually Is",
        description: "LLMs, generative AI, agents and automation explained plainly",
        duration: "15 min",
        content: `<h2>Welcome to AI Money Maniac</h2>
<p>Before you can make money with AI, you need to understand what you're working with. This isn't a computer science lecture — it's the practical knowledge you need to use these tools intelligently in 2026.</p>

<h3>Large Language Models (LLMs)</h3>
<p>LLMs like Claude, ChatGPT, and Gemini are the core of most AI tools you'll use. They're trained on massive amounts of text and learn to predict what words should come next. That deceptively simple idea powers everything from writing emails to generating code to running autonomous agents.</p>

<h3>Generative AI</h3>
<p>AI that creates new content — text, images, video, audio, and code. Unlike traditional software that follows rigid rules, generative AI produces unique outputs every time based on your instructions.</p>

<h3>AI Agents — The 2026 Shift</h3>
<p>Agents are AI systems that don't just answer questions — they plan, reason, use tools, and take autonomous actions. An agent might research a topic, write a report, send it by email, and schedule a follow-up, all from a single instruction. In 2026, agents are how serious users work.</p>

<h3>The Landscape Right Now (May 2026)</h3>
<ul>
<li><strong>Multi-agent workflows</strong> are mainstream — teams run multiple Claude instances simultaneously</li>
<li><strong>Desktop agents</strong> (Claude Dispatch, OpenClaw) work on your computer while you do other things</li>
<li><strong>Vibe coding</strong> — describing apps in plain English and having AI build them — is standard practice</li>
<li><strong>Local models</strong> via Ollama mean capable AI with zero API costs</li>
</ul>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6 mb-6">
<h4>📋 Action Step: Get Set Up Today</h4>
<ol class="mt-2 space-y-2">
<li><strong>Step 1:</strong> Sign up for Claude at claude.ai (free tier available)</li>
<li><strong>Step 2:</strong> Sign up for ChatGPT at chat.openai.com (free tier available)</li>
<li><strong>Step 3:</strong> Try the same prompt in both — compare the results</li>
<li><strong>Step 4:</strong> Experiment with 10 different use cases this week</li>
</ol>
</div>

<div class="bg-green-900/30 p-4 rounded-lg mt-6">
<h4>💡 Key Takeaway</h4>
<p>The biggest edge in 2026 isn't having access to AI — everyone does. It's knowing which AI to use, for what task, and how to direct it precisely. That's what this course teaches.</p>
</div>`
      },
      {
        id: 2,
        title: "Prompting Fundamentals",
        description: "Master structured prompting to get professional-grade outputs every time",
        duration: "20 min",
        content: `<h2>The Art and Science of Prompting</h2>
<p>Your prompts determine your outputs. A vague prompt gives vague results. A structured prompt gives professional-grade content. This is the highest-leverage skill in your entire AI toolkit.</p>

<h3>The CRISP Framework</h3>
<ul>
<li><strong>C</strong>ontext — Set the scene and provide background</li>
<li><strong>R</strong>ole — Tell the AI who to be (expert, editor, analyst)</li>
<li><strong>I</strong>nstruction — Clear, specific directions</li>
<li><strong>S</strong>pecifics — Format, tone, length constraints</li>
<li><strong>P</strong>reference — Your style and any hard rules</li>
</ul>

<h3>Example Transformation</h3>
<div class="bg-red-900/30 p-4 rounded-lg mb-4">
<p><strong>❌ Bad:</strong> "Write about marketing"</p>
</div>
<div class="bg-green-900/30 p-4 rounded-lg">
<p><strong>✅ Good:</strong> "Act as a digital marketing expert. Write a 500-word blog post about email marketing for small e-commerce businesses. Include 3 actionable tips with real examples. Conversational tone. Use headers and bullet points."</p>
</div>

<h3>Advanced Techniques</h3>
<ul>
<li><strong>Chain-of-thought:</strong> "Think through this step by step before answering" — dramatically improves reasoning</li>
<li><strong>Few-shot learning:</strong> "Here are 3 examples of what I want: [examples]. Now do the same for: [task]"</li>
<li><strong>Iterative refinement:</strong> "Make it 20% shorter" / "Add more specific examples" / "More direct tone"</li>
<li><strong>Persona stacking:</strong> "You are a copywriter trained under David Ogilvy who specialises in B2B SaaS..."</li>
</ul>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6">
<h4>📋 Action Step: Build Your Prompt Library</h4>
<ol class="mt-2 space-y-2">
<li>Open a Google Doc titled "My Prompt Library"</li>
<li>Create sections: Blog Posts, Ad Copy, Emails, Social Media, Research, Code</li>
<li>Write one CRISP template per section with [PLACEHOLDERS] for variable parts</li>
<li>Test each 3 times and refine — when one consistently works, lock it in</li>
</ol>
</div>`
      },
      {
        id: 3,
        title: "The 2026 AI Tool Landscape",
        description: "Every layer of the AI stack explained — models, interfaces, agents, automation",
        duration: "18 min",
        content: `<h2>Building Your AI Infrastructure</h2>
<p>The AI ecosystem has exploded. Understanding the layers helps you choose the right tool and avoid paying for features you don't need.</p>

<h3>Layer 1: Foundation Models</h3>
<ul>
<li><strong>Claude Sonnet 4.6 / Opus 4.6</strong> (Anthropic) — Best reasoning, longest context. Top choice for serious builders.</li>
<li><strong>GPT-4.5 / o3</strong> (OpenAI) — Strong general capability. o3 exceptional for multi-step coding via Codex.</li>
<li><strong>Gemini 3.1 Pro</strong> (Google) — Free via Gemini CLI. Deep Google Workspace integration.</li>
<li><strong>Local models via Ollama</strong> — Run Llama, Mistral on your machine. Zero API costs. Full privacy.</li>
</ul>

<h3>Layer 2: Chat Interfaces</h3>
<ul>
<li><strong>Claude.ai</strong> — Projects feature gives persistent memory across conversations. Best for complex work.</li>
<li><strong>ChatGPT</strong> — Most popular. DALL-E, Code Interpreter, browsing built in.</li>
<li><strong>Perplexity</strong> — AI search with citations. Best for research and staying current.</li>
</ul>

<h3>Layer 3: Building Tools</h3>
<ul>
<li><strong>Claude Code</strong> — Terminal-based coding agent. Best deep reasoning on hard problems. (Full module dedicated to this.)</li>
<li><strong>Cursor</strong> — VS Code fork. $2B ARR in 2026. Best daily coding IDE.</li>
<li><strong>Bolt.new / Lovable</strong> — Natural language to full-stack apps. Best for non-developers.</li>
<li><strong>Replit Agent 4</strong> — Browser-based, build and deploy in one place.</li>
</ul>

<h3>Layer 4: Automation</h3>
<ul>
<li><strong>Make</strong> — Most powerful no-code automation. Native Claude integration.</li>
<li><strong>n8n</strong> — Open source. Self-host for zero per-task costs at scale.</li>
<li><strong>Zapier</strong> — 6,000+ integrations. Most beginner-friendly.</li>
</ul>

<h3>Layer 5: Desktop Agents</h3>
<ul>
<li><strong>Claude Cowork Dispatch</strong> — Persistent desktop agent. Control from your phone. 38+ connectors. Max plan.</li>
<li><strong>OpenClaw</strong> — Open source, 247,000 GitHub stars. Model-agnostic. Control via Telegram/WhatsApp/Discord.</li>
</ul>`
      },
      {
        id: 4,
        title: "Understanding Tokens, APIs and Costs",
        description: "How AI pricing works and how to build profitable services without surprise bills",
        duration: "12 min",
        content: `<h2>The Economics of AI</h2>
<p>AI isn't free. Understanding the cost structure helps you build profitable services and avoid surprise bills that kill your margins.</p>

<h3>What Are Tokens?</h3>
<ul>
<li>1 token ≈ 4 characters or ¾ of a word</li>
<li>1,000 tokens ≈ 750 words</li>
<li>A typical blog post: 1,000–2,000 tokens</li>
<li>Claude Sonnet 4.6 handles up to 200,000 tokens — roughly a full novel — in one context window</li>
</ul>

<h3>API Pricing (May 2026)</h3>
<table class="w-full text-left mt-4">
<tr class="border-b border-gray-700"><th class="pb-2">Model</th><th class="pb-2">Input</th><th class="pb-2">Output</th></tr>
<tr class="border-b border-gray-700"><td class="py-2">Claude Sonnet 4.6</td><td>$3/1M tokens</td><td>$15/1M tokens</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Claude Opus 4.6</td><td>$15/1M tokens</td><td>$75/1M tokens</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">GPT-4.5</td><td>$2.50/1M tokens</td><td>$10/1M tokens</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Gemini 3.1 Pro</td><td>Free (personal)</td><td>Free (personal)</td></tr>
<tr><td class="py-2">Local (Ollama)</td><td>$0</td><td>$0</td></tr>
</table>

<h3>Cost Optimisation Tips</h3>
<ul>
<li>Use cheaper models (Haiku, Flash) for simple tasks — save powerful models for hard reasoning</li>
<li>Cache common system prompts — don't repeat them every API call</li>
<li>Set token limits in your prompts to prevent runaway responses</li>
<li>Self-host n8n to eliminate per-task automation costs at scale</li>
</ul>

<div class="bg-yellow-900/30 p-4 rounded-lg mt-6">
<h4>⚠️ When Selling AI Services</h4>
<p>Factor in 3–5x your actual API costs for margin, unexpected spikes, and failed runs. A workflow costing you £2 in API calls should deliver £10+ in value to the client.</p>
</div>`
      },
      {
        id: 5,
        title: "Choosing the Right Tool",
        description: "A decision framework for tool selection so you stop wasting money and time",
        duration: "10 min",
        content: `<h2>Stop Collecting Tools. Start Mastering Them.</h2>
<p>With hundreds of AI tools available, choosing the right one is a genuine skill. Here's the framework — and how to avoid the trap of collecting tools without actually using them.</p>

<h3>The 2026 Decision Matrix</h3>
<table class="w-full text-left mt-4">
<tr class="border-b border-gray-700"><th class="pb-2">Task</th><th class="pb-2">Best Tool</th></tr>
<tr class="border-b border-gray-700"><td class="py-2">Long-form writing, complex analysis</td><td>Claude Sonnet 4.6</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Research with citations</td><td>Perplexity</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Image generation (artistic)</td><td>Midjourney v7</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Images with readable text</td><td>Ideogram 3</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Video generation</td><td>Runway Gen-3 or Kling 2.0</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Coding (IDE experience)</td><td>Cursor or Windsurf</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Coding (terminal/deep reasoning)</td><td>Claude Code</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Build an app without coding</td><td>Bolt.new or Lovable</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Automation workflows</td><td>Make, n8n, or Zapier</td></tr>
<tr><td class="py-2">Desktop agent</td><td>Claude Dispatch or OpenClaw</td></tr>
</table>

<h3>The Minimum Viable Toolstack</h3>
<ul>
<li><strong>Claude Pro</strong> ($20/month) — your primary AI brain</li>
<li><strong>Midjourney Basic</strong> ($10/month) — images</li>
<li><strong>Make free tier</strong> — automation</li>
<li><strong>Canva free tier</strong> — design</li>
</ul>
<p class="mt-4">Total: ~£25–30/month. You can generate thousands per month from this stack alone. Don't overcomplicate it.</p>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6">
<h4>📋 Action Step: The 20-Minute Tool Audit</h4>
<ol class="mt-2 space-y-2">
<li>List every AI tool you pay for in a spreadsheet</li>
<li>For each: write its single most important use case in one sentence. Can't? Cut it.</li>
<li>If you didn't use it in the last 7 days — cut list</li>
<li>Set a tool freeze: no new subscriptions for 30 days until you master what you have</li>
</ol>
</div>`
      },
      {
        id: 6,
        title: "Ethics and Legal Considerations",
        description: "Staying on the right side of the law when building an AI business in 2026",
        duration: "15 min",
        content: `<h2>Building Sustainably</h2>
<p>Moving fast is great. Moving fast legally is better. Here's what you need to know in 2026.</p>

<h3>Copyright and Content Ownership</h3>
<ul>
<li><strong>AI-generated content:</strong> Generally not copyrightable without substantial human creative input</li>
<li><strong>Your prompts:</strong> You retain rights to your creative inputs</li>
<li><strong>Training data lawsuits:</strong> Several major cases ongoing in 2026 — the landscape is still evolving</li>
</ul>

<h3>Disclosure Requirements</h3>
<ul>
<li>FTC requires disclosure of AI-generated content in advertising</li>
<li>EU AI Act (fully in force from 2025) requires transparency about AI in high-risk applications</li>
<li>Many platforms require AI content labels — check each platform's policy</li>
</ul>

<h3>Data Privacy</h3>
<ul>
<li>Don't feed client personal data into public AI tools without consent and a Data Processing Agreement</li>
<li>GDPR applies to any EU personal data</li>
<li>Claude Dispatch and OpenClaw run locally — files never leave your machine (key selling point for sensitive client work)</li>
</ul>

<h3>Best Practices</h3>
<ol>
<li>Be transparent with clients about AI usage — it builds trust, not suspicion</li>
<li>Keep humans in the loop for decisions with real consequences</li>
<li>Review and edit AI outputs before delivery — you are responsible for what you deliver</li>
<li>Include AI usage disclosure in your client contracts</li>
</ol>`
      }
    ]
  },
  {
    id: 2,
    title: "The AI Money Stack",
    description: "The complete ecosystem of tools used to generate income in 2026 — all current, all practical.",
    outcome: "Students assemble a money stack of tools they can immediately combine to build products and services.",
    icon: "Layers",
    lessons: [
      {
        id: 1,
        title: "Text and Reasoning Models",
        description: "Claude, ChatGPT, Gemini — when to use which and why it matters",
        duration: "20 min",
        content: `<h2>Your Primary Content Engine</h2>
<p>Text and reasoning models are the foundation of everything. In 2026 the models have converged in capability, but knowing which to reach for and when is a genuine competitive edge.</p>

<h3>Claude (Anthropic) — The Reasoning Champion</h3>
<ul>
<li><strong>Sonnet 4.6:</strong> Sweet spot of capability and cost. Best for most tasks.</li>
<li><strong>Opus 4.6:</strong> Maximum capability for the hardest problems.</li>
<li><strong>Projects feature:</strong> Persistent memory and instructions across all conversations — invaluable for ongoing client work.</li>
<li><strong>Pricing:</strong> Free tier, Pro $20/month, Max $100–200/month (includes Dispatch)</li>
</ul>

<h3>ChatGPT / GPT-4.5 (OpenAI)</h3>
<ul>
<li><strong>Best for:</strong> General tasks, DALL-E image generation, Code Interpreter data analysis</li>
<li><strong>o3 model:</strong> Exceptional for multi-step reasoning and hard coding problems</li>
<li><strong>Pricing:</strong> Free tier, Plus $20/month</li>
</ul>

<h3>Gemini 3.1 Pro (Google)</h3>
<ul>
<li><strong>Best for:</strong> Google Workspace integration, free high-capability access via Gemini CLI</li>
<li><strong>Gemini CLI:</strong> Free Gemini 3.1 Pro in your terminal — most accessible free model in 2026</li>
<li><strong>Pricing:</strong> Free personal, Advanced $19.99/month</li>
</ul>

<h3>Perplexity — AI Search</h3>
<ul>
<li><strong>Best for:</strong> Research with citations, fact-checking, staying current with fast-moving topics</li>
<li><strong>Not a replacement for Claude/ChatGPT</strong> — it's a research tool, not a writing/reasoning tool</li>
<li><strong>Pricing:</strong> Free tier, Pro $20/month</li>
</ul>

<div class="bg-green-900/30 p-4 rounded-lg mt-6">
<h4>💡 Recommended Starting Stack</h4>
<p>Claude Pro + Perplexity Pro covers 90% of use cases for £35–40/month. Start here before adding anything else.</p>
</div>`
      },
      {
        id: 2,
        title: "Image and Design Tools",
        description: "Midjourney v7, Ideogram 3, Flux, and Canva AI — creating visuals at scale",
        duration: "25 min",
        content: `<h2>Visual Content at Scale</h2>
<p>Professional designers charge £500+ for brand assets. With AI, you can create stunning visuals in minutes and sell that speed as a premium service.</p>

<h3>Midjourney v7 — The Gold Standard</h3>
<ul>
<li><strong>Best for:</strong> Marketing visuals, brand imagery, lifestyle photography, creative concepts</li>
<li><strong>v7 improvements:</strong> Better realism, improved consistency, web interface (no Discord required)</li>
<li><strong>Style Reference (--sref):</strong> Lock in a visual style across all images — essential for brand work</li>
<li><strong>Pricing:</strong> $10–60/month at midjourney.com</li>
</ul>

<h3>Ideogram 3 — Best for Text in Images</h3>
<ul>
<li><strong>Best for:</strong> Thumbnails with text, posters, social graphics, logo concepts</li>
<li><strong>Key advantage:</strong> While Midjourney struggles with readable text in images, Ideogram handles it perfectly</li>
<li><strong>Pricing:</strong> Free tier, Plus $8/month</li>
</ul>

<h3>Flux (Black Forest Labs) — Open Source Powerhouse</h3>
<ul>
<li><strong>Best for:</strong> Product photography, portraits, photorealistic scenes</li>
<li><strong>Key advantage:</strong> Open source — run via API (fal.ai, Replicate) or self-host</li>
<li><strong>Pricing:</strong> ~$0.003–0.05 per image via API</li>
</ul>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6 mb-6">
<h4>📋 How To: Create a Client Brand Visual Pack in 1 Hour</h4>
<ol class="mt-2 space-y-2">
<li>Subscribe to Midjourney Basic ($10/month)</li>
<li>Hero image: "Professional [industry] setting, clean modern aesthetic, [brand colour] accents, photorealistic --ar 16:9 --v 7"</li>
<li>Once you like one image, use --sref [image URL] on all future generations to lock in the style</li>
<li>Social squares: add --ar 1:1 | LinkedIn banners: --ar 8:1</li>
<li>For graphics needing readable text, switch to ideogram.ai</li>
<li>Bring everything into Canva, add client logo and text overlays, deliver as shared Canva folder</li>
</ol>
</div>

<h3>Revenue Opportunities</h3>
<ul>
<li>Social media graphics packages — £200–500/month retainer</li>
<li>Product mockups for e-commerce sellers — £50–200 per set</li>
<li>YouTube thumbnail packs — £100–300</li>
<li>Brand visual identity kits — £300–800</li>
</ul>`
      },
      {
        id: 3,
        title: "Video Creation Tools",
        description: "Runway Gen-3, Kling 2.0, Pika 2.0, and HeyGen — video without cameras",
        duration: "22 min",
        content: `<h2>Video Without Cameras</h2>
<p>AI video quality has leaped dramatically in 2026. Short clips generated today are often indistinguishable from real footage at first glance.</p>

<h3>Runway Gen-3 Alpha — Cinematic Quality</h3>
<ul>
<li><strong>Best for:</strong> High-quality b-roll, creative ad visuals, short clips</li>
<li><strong>Features:</strong> Text-to-video, image-to-video, camera motion controls</li>
<li><strong>Pricing:</strong> From $15/month at runwayml.com</li>
</ul>

<h3>Kling 2.0 — Best Human Motion</h3>
<ul>
<li><strong>Best for:</strong> Realistic human movement, product demos, lifestyle content</li>
<li><strong>Pricing:</strong> Free credits daily, Pro $8/month at klingai.com</li>
</ul>

<h3>Pika 2.0 — Fast Social Content</h3>
<ul>
<li><strong>Best for:</strong> Quick social media clips, fast iterations, short-form content</li>
<li><strong>Pricing:</strong> Free tier, Basic $8/month</li>
</ul>

<h3>HeyGen — AI Avatars and Translation</h3>
<ul>
<li><strong>Best for:</strong> Talking-head videos at scale, video translation into 40+ languages</li>
<li><strong>Killer feature:</strong> Clone your own voice and likeness — create a 5-minute video from a script in minutes</li>
<li><strong>Pricing:</strong> From $29/month</li>
</ul>

<h3>Revenue Opportunities</h3>
<ul>
<li>Social media video packages — £500–1,500/month retainer</li>
<li>AI avatar explainer videos — £300–800 each</li>
<li>Video translation services using HeyGen — £200–500 per video</li>
<li>YouTube short-form content production — £200–600/month</li>
</ul>`
      },
      {
        id: 4,
        title: "AI Coding Tools",
        description: "Cursor, Claude Code, Bolt.new, Replit Agent 4 — the full 2026 landscape",
        duration: "20 min",
        content: `<h2>Build Software Without Being a Developer</h2>
<p>AI coding tools have democratised software development. You can build functional apps with minimal technical background. Module 6 covers Claude Code in full depth — this lesson covers the complete landscape.</p>

<h3>Cursor — The Daily Coding IDE</h3>
<ul>
<li><strong>Best for:</strong> Daily coding, rapid prototyping, non-developers wanting to build real things</li>
<li><strong>Market signal:</strong> $2 billion ARR in February 2026. Widely trusted by professional developers.</li>
<li><strong>Pricing:</strong> Free tier, Pro $20/month</li>
</ul>

<h3>Bolt.new / Lovable — Vibe Coding Platforms</h3>
<ul>
<li><strong>Best for:</strong> Non-developers who want to build full apps by describing them in plain English</li>
<li><strong>How it works:</strong> Describe your app → AI generates complete working code → one-click deploy</li>
<li><strong>Pricing:</strong> Free tiers, paid from $20/month</li>
</ul>

<h3>Replit Agent 4 — Browser-Based Building</h3>
<ul>
<li><strong>Best for:</strong> No-install builds, quick prototypes, deploying immediately</li>
<li><strong>March 2026:</strong> Agent 4 with parallel task forking. Raised $400M at $9B valuation.</li>
<li><strong>Pricing:</strong> Free tier, Core $25/month</li>
</ul>

<h3>Codex (OpenAI) — Cloud Parallel Agents</h3>
<ul>
<li><strong>Best for:</strong> Running multiple coding tasks simultaneously in cloud sandboxes</li>
<li><strong>Advantage:</strong> Direct GitHub integration — reads PRs, issues, and repo history before starting</li>
<li><strong>Pricing:</strong> Included with ChatGPT Plus/Pro</li>
</ul>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6">
<h4>📋 How To: Build and Deploy a Tool in 2 Hours (No Experience Needed)</h4>
<ol class="mt-2 space-y-2">
<li>Go to bolt.new</li>
<li>Type: "Build a word count tool with reading time estimate. Clean dark theme. Single page."</li>
<li>Bolt generates the full app. Preview it live.</li>
<li>Click Deploy — live URL in 30 seconds</li>
<li>Share the URL as a free tool or portfolio piece</li>
</ol>
</div>`
      },
      {
        id: 5,
        title: "Automation Tools",
        description: "Make, n8n, and Zapier — connecting AI to real-world workflows",
        duration: "25 min",
        content: `<h2>The Glue That Holds Everything Together</h2>
<p>Automation tools turn individual AI capabilities into complete systems that run 24/7. This is where real passive income becomes possible — build once, run forever.</p>

<h3>Make — The Most Powerful</h3>
<ul>
<li><strong>Strengths:</strong> Complex logic, data manipulation, error handling, thousands of connections, native Claude module</li>
<li><strong>Best for:</strong> Advanced client automations, multi-step AI workflows, anything with conditional logic</li>
<li><strong>Pricing:</strong> Free tier (1,000 ops/month), paid from $9/month</li>
</ul>

<h3>n8n — Open Source Self-Hosted</h3>
<ul>
<li><strong>Key advantage:</strong> Self-host on a £5/month VPS — no per-task costs at any scale</li>
<li><strong>Best for:</strong> High-volume automations, privacy-sensitive data, replacing expensive Zapier plans</li>
<li><strong>Pricing:</strong> Free self-hosted, Cloud from $20/month</li>
</ul>

<h3>Zapier — Most Beginner Friendly</h3>
<ul>
<li><strong>Strengths:</strong> 6,000+ integrations, very easy setup, excellent documentation</li>
<li><strong>Best for:</strong> Simple automations, quick wins, non-technical clients</li>
<li><strong>Pricing:</strong> Free tier (100 tasks/month), paid from $19.99/month</li>
</ul>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6 mb-6">
<h4>📋 Your First Make Automation (30 min)</h4>
<ol class="mt-2 space-y-2">
<li>make.com → Create account → New scenario</li>
<li>Trigger: Gmail → "Watch Emails" with label filter "Leads"</li>
<li>Module: "Anthropic Claude" → prompt: "Summarise this email in 3 bullet points and classify as Lead/Support/Other: [email body]"</li>
<li>Output: Google Sheets → "Add a Row" with email subject, sender, AI summary</li>
<li>Run once to test, then schedule every 15 minutes</li>
</ol>
</div>

<div class="bg-green-900/30 p-4 rounded-lg mt-6">
<h4>💡 Selling Automations</h4>
<p>Charge £500–2,000 setup + £200–500/month management. Your actual cost: a few hours setup + Make subscription. Margin: 80%+.</p>
</div>`
      },
      {
        id: 6,
        title: "No-Code and Vibe Coding Platforms",
        description: "Bolt.new, Lovable, v0, and Bubble — building apps without writing code",
        duration: "20 min",
        content: `<h2>Build Apps in Hours, Not Months</h2>
<p>Vibe coding — describing what you want in plain English and having AI build it — went mainstream in 2025–2026. These platforms make app building genuinely accessible to anyone.</p>

<h3>Bolt.new — Fastest Full-Stack Builder</h3>
<ul>
<li>Describe your app → get complete working frontend + backend</li>
<li>One-click deploy to production</li>
<li><strong>Best for:</strong> Quick MVPs, client prototypes, landing pages with functionality</li>
<li><strong>Pricing:</strong> Free tier, Pro $20/month</li>
</ul>

<h3>Lovable — Best UI Quality</h3>
<ul>
<li>Particularly strong on design quality and visual polish</li>
<li>Native Supabase (database + auth) integration built in</li>
<li><strong>Best for:</strong> Apps that need to look professional immediately</li>
<li><strong>Pricing:</strong> Free tier, Starter $20/month</li>
</ul>

<h3>v0 by Vercel — UI Component Generator</h3>
<ul>
<li>Text-to-UI that produces clean React/Next.js code</li>
<li><strong>Best for:</strong> Adding polished UI components to existing projects</li>
<li><strong>Pricing:</strong> Free tier, Pro $20/month</li>
</ul>

<h3>Bubble — Complex No-Code Apps</h3>
<ul>
<li>Full visual programming — database, workflows, logic, no code required</li>
<li><strong>Best for:</strong> Marketplaces, SaaS with complex logic, client-facing portals</li>
<li><strong>Pricing:</strong> Free tier, paid from $29/month</li>
</ul>

<h3>Money-Making Ideas</h3>
<ul>
<li>Build client MVPs for validation — £500–2,000</li>
<li>Create niche micro-tools and sell as SaaS</li>
<li>Offer rapid prototyping services — £300–1,000</li>
<li>Internal tools for SMEs — £1,000–5,000</li>
</ul>`
      }
    ]
  },
  {
    id: 3,
    title: "AI Service Businesses",
    description: "How to generate real income immediately by selling AI-powered services to businesses.",
    outcome: "Students launch a simple AI service offer and land their first paying client.",
    icon: "Briefcase",
    lessons: [
      {
        id: 1,
        title: "AI Website Creation for Businesses",
        description: "Build and sell websites to local businesses using AI — the fastest path to £1,000",
        duration: "30 min",
        content: `<h2>The Fastest Path to Your First £1,000</h2>
<p>Local businesses need websites. They don't care how you build them — they care about results. AI gives you a massive speed advantage over traditional web designers.</p>

<h3>The Service Package</h3>
<ul>
<li>5-page business website (Home, About, Services, Gallery, Contact)</li>
<li>Mobile responsive design</li>
<li>Contact form with email notifications</li>
<li>Basic SEO setup (meta titles, descriptions, Google indexing)</li>
<li>Google Business profile optimisation</li>
</ul>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6 mb-6">
<h4>📋 Build Your First AI Website in 2 Hours</h4>
<ol class="mt-2 space-y-2">
<li>Go to framer.com and create a free account</li>
<li>Click "Generate with AI" — describe the business clearly</li>
<li>Open Claude: "Write website copy for a plumbing business called ABC Plumbing in [City]. Include: hero headline, About section, Services list (5 services), Contact CTA. Concise and customer-focused."</li>
<li>Replace placeholder text with your generated copy</li>
<li>Use Midjourney for hero image: "Professional plumber at work, modern photography --ar 16:9 --v 7"</li>
<li>Add image, adjust colours, publish — portfolio piece done</li>
</ol>
</div>

<h3>Pricing Strategy</h3>
<table class="w-full text-left mt-4">
<tr class="border-b border-gray-700"><th class="pb-2">Package</th><th class="pb-2">Price</th><th class="pb-2">Your Time</th></tr>
<tr class="border-b border-gray-700"><td class="py-2">Basic (5 pages)</td><td>£1,200–1,800</td><td>2–3 days</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Standard (10 pages + blog)</td><td>£2,500–3,500</td><td>1 week</td></tr>
<tr><td class="py-2">Premium (custom design)</td><td>£5,000+</td><td>2 weeks</td></tr>
</table>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6">
<h4>📋 Find Your First 10 Clients</h4>
<ol class="mt-2 space-y-2">
<li>Search Google Maps for "[trade] [your city]" — plumber, restaurant, solicitor, salon</li>
<li>Click each listing and check if they have a website or if it looks outdated</li>
<li>Build a list of 50 businesses with no site or a poor one</li>
<li>Claude prompt: "Write a cold email offering professional website services to a local plumbing business. I noticed their site looks outdated. Under 80 words."</li>
<li>Send 10/day for 5 days — expect 1–2 clients from 50 emails</li>
</ol>
</div>`
      },
      {
        id: 2,
        title: "AI Content Services",
        description: "Blog writing, ad copy, and social media content at scale with 80%+ margins",
        duration: "25 min",
        content: `<h2>Unlimited Content at Scale</h2>
<p>Businesses need constant content. AI lets you deliver volume without sacrificing quality. The gap between what clients pay and what it costs you is where your profit lives.</p>

<h3>Service Types and Pricing</h3>
<ul>
<li><strong>Blog Writing:</strong> SEO-optimised articles (1,000–2,500 words) — £80–250 per article. AI time: 30–45 min.</li>
<li><strong>Ad Copy:</strong> Google/Facebook ad sets (3–5 variations) — £150–400 per campaign</li>
<li><strong>Social Media:</strong> 30-post monthly calendar with captions and hashtags — £400–1,200/month</li>
<li><strong>Email Sequences:</strong> 5–7 email flows — £300–800 per sequence</li>
</ul>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6 mb-6">
<h4>📋 Write an SEO Blog Post in 45 Minutes</h4>
<ol class="mt-2 space-y-2">
<li>Open Perplexity — search your topic. Read top 3 results, note what angles they cover.</li>
<li>Claude: "Create a detailed outline for a 1,500-word post titled '[TITLE]'. Target keyword: '[KEYWORD]'. Include H1, 5 H2 sections each with 2–3 H3 sub-points, and conclusion."</li>
<li>Review outline. Add missing angles from your Perplexity research.</li>
<li>Claude: "Write the full post using this outline. Tone: [conversational/professional]. Open with a hook addressing the reader's pain point directly."</li>
<li>Edit anything generic — especially the intro and conclusion.</li>
<li>Claude: "Write an SEO meta title (max 60 chars) and meta description (max 155 chars) for this post."</li>
</ol>
</div>

<h3>Building Recurring Revenue</h3>
<ul>
<li>4 blog posts/month: £600–800</li>
<li>Daily social posts (30/month): £800–1,200</li>
<li>Full content package (blogs + social + newsletter): £1,800–2,500+</li>
</ul>
<p class="mt-3">Land 5 retainer clients at £800/month = £4,000/month recurring. Achievable in 3–6 months from a standing start.</p>`
      },
      {
        id: 3,
        title: "AI Chatbot and Agent Setup",
        description: "Deploy AI chatbots for business websites — easy to sell, high ROI for clients",
        duration: "25 min",
        content: `<h2>24/7 Customer Service in a Day</h2>
<p>Businesses lose leads every night when no one's answering enquiries. An AI chatbot solves this immediately — and the ROI is obvious enough that it's an easy sell.</p>

<h3>Chatbot Use Cases</h3>
<ul>
<li>Lead qualification (capture name, email, problem, budget)</li>
<li>FAQ handling (prices, location, hours, booking)</li>
<li>Appointment booking via Calendly integration</li>
<li>Product recommendations based on customer answers</li>
<li>After-hours support — prevent lost leads overnight</li>
</ul>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6 mb-6">
<h4>📋 Build and Deploy a Client Chatbot in 3 Hours</h4>
<ol class="mt-2 space-y-2">
<li>Go to chatbase.co → "New Chatbot" → "Website" → enter client's URL (auto-crawls)</li>
<li>Add extra knowledge: paste in FAQs, pricing, service descriptions</li>
<li>Settings → set persona: name, greeting, instructions ("Always collect name and email before answering pricing questions. For booking: [CALENDLY LINK]")</li>
<li>Appearance → match brand colours</li>
<li>Copy embed code → add to client website before &lt;/body&gt; tag</li>
<li>Test with 10 real customer questions</li>
<li>Set up lead notifications (Chatbase → Integrations → email/Slack)</li>
</ol>
</div>

<h3>Pricing</h3>
<table class="w-full text-left mt-4">
<tr class="border-b border-gray-700"><th class="pb-2">Package</th><th class="pb-2">Setup</th><th class="pb-2">Monthly</th></tr>
<tr class="border-b border-gray-700"><td class="py-2">Basic FAQ Bot</td><td>£400</td><td>£80</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Lead Qualifier</td><td>£800</td><td>£150</td></tr>
<tr><td class="py-2">Custom Agent (API-built)</td><td>£2,000+</td><td>£400+</td></tr>
</table>`
      },
      {
        id: 4,
        title: "AI Lead Generation Systems",
        description: "Build automated outbound lead generation systems worth £2,000–4,000 per client",
        duration: "28 min",
        content: `<h2>The £2,000–4,000 Service Offering</h2>
<p>Lead generation is the lifeblood of every business. AI can automate the entire prospecting process — research, personalisation, outreach, and follow-up.</p>

<h3>The Tech Stack</h3>
<ul>
<li><strong>Apollo.io</strong> — Pull prospect lists (name, company, email, LinkedIn)</li>
<li><strong>Clay</strong> — Advanced enrichment (company news, LinkedIn posts, tech stack)</li>
<li><strong>Claude via Make</strong> — Write personalised opening lines for each prospect</li>
<li><strong>Instantly.ai</strong> — Send sequences from warmed domains at scale</li>
<li><strong>HubSpot free</strong> — Route positive replies into CRM automatically</li>
</ul>

<h3>The Workflow</h3>
<ol>
<li>Define ideal customer profile (ICP) with the client</li>
<li>Pull 500–1,000 prospect list from Apollo matching ICP</li>
<li>AI researches each prospect (LinkedIn posts, company news via Clay)</li>
<li>Claude writes personalised opening line for each email (under 20 words, sounds human)</li>
<li>Load into Instantly with 3–5 touch follow-up sequence</li>
<li>Positive replies route automatically to client CRM</li>
</ol>

<h3>Pricing</h3>
<table class="w-full text-left mt-4">
<tr class="border-b border-gray-700"><th class="pb-2">Model</th><th class="pb-2">Price</th></tr>
<tr class="border-b border-gray-700"><td class="py-2">Setup fee (build the system)</td><td>£2,000–4,000</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Monthly management retainer</td><td>£1,200–2,500/month</td></tr>
<tr><td class="py-2">Per qualified lead (performance)</td><td>£50–150 per lead</td></tr>
</table>

<div class="bg-yellow-900/30 p-4 rounded-lg mt-6">
<h4>⚠️ Compliance</h4>
<p>Always comply with CAN-SPAM (US) and GDPR (UK/EU). Use verified data, include unsubscribe options, and send from warmed domains — not your main business email.</p>
</div>`
      },
      {
        id: 5,
        title: "Packaging and Pricing Your Services",
        description: "Create compelling offers, price with confidence, and close deals",
        duration: "22 min",
        content: `<h2>From Skills to Sales</h2>
<p>Great skills don't sell themselves. You need clear, compelling offers that make buying an easy decision.</p>

<h3>The Offer Framework</h3>
<ul>
<li><strong>Problem:</strong> What specific pain are you solving?</li>
<li><strong>Promise:</strong> What measurable outcome do you deliver?</li>
<li><strong>Price:</strong> What's the investment?</li>
<li><strong>Proof:</strong> Why should they trust you to deliver?</li>
</ul>

<h3>Good vs Bad Positioning</h3>
<div class="bg-red-900/30 p-4 rounded-lg mb-4">
<p><strong>❌ Bad:</strong> "I do AI stuff and can help with your business"</p>
</div>
<div class="bg-green-900/30 p-4 rounded-lg">
<p><strong>✅ Good:</strong> "I help estate agents get 20+ qualified leads per month with AI-powered outreach systems. Fully built in 2 weeks. Money-back guarantee if you don't see results in 60 days."</p>
</div>

<h3>Always Offer 3 Tiers</h3>
<ul>
<li><strong>Starter:</strong> Entry point, lower risk — anchors the conversation</li>
<li><strong>Professional:</strong> Your main offer (most people buy this)</li>
<li><strong>Premium:</strong> White-glove, done-for-you — makes Professional look reasonable</li>
</ul>

<h3>Handling Price Objections</h3>
<ul>
<li><strong>"Too expensive":</strong> "Compared to what? Let me show you the ROI calculation..."</li>
<li><strong>"Can you do cheaper?":</strong> "I can adjust the scope. What's absolutely essential to you?"</li>
<li><strong>"Let me think about it":</strong> "Of course — what questions can I answer to help you decide?"</li>
</ul>

<h3>Building Social Proof Fast</h3>
<ul>
<li>Do 3–5 projects at 50% discount in exchange for a detailed testimonial with real numbers</li>
<li>Document results: "enquiries increased 40% in 30 days"</li>
<li>Ask for short video testimonials — they convert 3–5x better than text</li>
</ul>`
      }
    ]
  },
  {
    id: 4,
    title: "AI Automation and Agents",
    description: "Move from selling services to building systems that scale without you.",
    outcome: "Students create automated systems that produce results with minimal ongoing manual work.",
    icon: "Zap",
    lessons: [
      {
        id: 1,
        title: "What AI Agents Are",
        description: "Understanding autonomous AI systems and how they change everything",
        duration: "18 min",
        content: `<h2>From Tools to Team Members</h2>
<p>AI agents represent the next evolution. Instead of you using AI tools, agents use tools on your behalf — autonomously, across multiple steps, while you focus on other things.</p>

<h3>The Agent Difference</h3>
<table class="w-full text-left mt-4">
<tr class="border-b border-gray-700"><th class="pb-2">Traditional AI</th><th class="pb-2">AI Agents</th></tr>
<tr class="border-b border-gray-700"><td class="py-2">Single response</td><td>Multi-step autonomous workflows</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">You manage every step</td><td>Agent manages the process</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Forgets between sessions</td><td>Memory and context retention</td></tr>
<tr><td class="py-2">One task at a time</td><td>Orchestrates multiple tools in parallel</td></tr>
</table>

<h3>The 2026 Agent Landscape</h3>
<p>Multi-agent workflows went mainstream. Teams run multiple Claude instances simultaneously — one researching, one writing, one reviewing, one deploying. The bottleneck shifted from "can AI do this?" to "how do I coordinate multiple agents?"</p>

<h3>Real-World Agent Examples</h3>
<ul>
<li><strong>Claude Dispatch:</strong> Persistent desktop agent — send tasks from your phone while your Mac executes them</li>
<li><strong>OpenClaw:</strong> Open source, runs via Telegram. 247K GitHub stars. Model-agnostic.</li>
<li><strong>Codex:</strong> Cloud agent running multiple coding tasks in parallel sandboxes</li>
<li><strong>Make + Claude:</strong> Research, write, post — triggered automatically on a schedule</li>
</ul>`
      },
      {
        id: 2,
        title: "Building AI Workflows in Make",
        description: "Hands-on workflow building that generates real client value",
        duration: "35 min",
        content: `<h2>Your First Production Automation</h2>
<p>Theory is nothing without execution. Let's build real workflows that generate real value for clients.</p>

<h3>5 AI Automations That Make Money</h3>

<h4>1. Email Triage (saves clients 1–2 hours/day)</h4>
<p>Gmail → Claude classifies as Lead/Support/Spam → Routes to appropriate team + logs to Sheet</p>

<h4>2. Content Pipeline (replaces a content writer)</h4>
<p>Schedule → Perplexity researches topic → Claude writes draft → Google Doc created → Notification to reviewer</p>

<h4>3. Social Media Repurposing</h4>
<p>New blog post → Claude creates LinkedIn post + Twitter thread + Instagram caption → Buffer schedules each</p>

<h4>4. Review Response (saves retail/hospitality time)</h4>
<p>New Google review → Claude drafts personalised response → Email to owner for approval → Post on approval</p>

<h4>5. Lead Scoring (boosts sales efficiency)</h4>
<p>New CRM contact → Apollo enrichment → Claude scores and writes talking points → Slack notification to sales</p>

<h3>Building Each Automation</h3>
<ol>
<li>Go to make.com → Create account → New scenario</li>
<li>Add your trigger (the thing that starts the automation)</li>
<li>Add "Anthropic Claude" module — connect your API key, choose Claude Sonnet 4.6</li>
<li>Write your prompt — use data from previous steps as variables</li>
<li>Add output module (Sheet, Slack, email, CRM)</li>
<li>Click "Run once" to test with real data</li>
<li>Fix any issues, then turn on scheduling</li>
<li>Monitor the first 10 runs manually before trusting it fully</li>
</ol>

<div class="bg-green-900/30 p-4 rounded-lg mt-6">
<h4>💡 Selling Automations</h4>
<p>Charge £500–2,000 setup + £200–500/month management. Build it once, manage multiple clients on similar systems. Pure leverage.</p>
</div>`
      },
      {
        id: 3,
        title: "AI Content Pipelines",
        description: "Build end-to-end content production systems that run on autopilot",
        duration: "30 min",
        content: `<h2>Content Factory Mode</h2>
<p>A fully automated content pipeline does everything from ideation to publishing. One person with this system can outproduce a 5-person content team.</p>

<h3>The Full Pipeline</h3>
<ol>
<li><strong>Ideation:</strong> AI generates ideas from trending topics and competitor gaps</li>
<li><strong>Research:</strong> Perplexity gathers up-to-date facts and sources</li>
<li><strong>Outline:</strong> Claude creates structured outline</li>
<li><strong>Draft:</strong> Claude writes the full first draft</li>
<li><strong>Human review:</strong> You spend 15–20 minutes editing</li>
<li><strong>Visuals:</strong> Ideogram generates featured image from headline</li>
<li><strong>Publish:</strong> Auto-post to WordPress via API</li>
<li><strong>Repurpose:</strong> Claude creates LinkedIn + X + Instagram versions, Buffer schedules all</li>
</ol>

<h3>Weekly Blog Pipeline (Build Once, Runs Forever)</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
Monday 9am: Make scenario runs
→ Perplexity searches "[industry] trends this week"
→ Claude generates 5 title options
→ Slack message to you: "Pick one: [options]"

Tuesday (after your pick):
→ Claude researches and writes 1,500-word draft
→ Google Doc created with draft
→ Ideogram generates featured image

Wednesday: You spend 20 minutes editing

Thursday:
→ Auto-publish to WordPress
→ Claude creates social versions
→ Buffer schedules for optimal times
</pre>

<h3>What This Produces</h3>
<ul>
<li>4+ blog posts per week (you touch each for ~20 minutes)</li>
<li>Daily social content across all platforms</li>
<li>Weekly email newsletter digest</li>
<li>All SEO-optimised with meta titles and descriptions</li>
</ul>
<p class="mt-3">Sell this as a managed service: £2,500–4,000 setup + £1,500–2,500/month.</p>`
      },
      {
        id: 4,
        title: "AI Prospecting Agents",
        description: "Build automated outbound prospecting that runs overnight",
        duration: "28 min",
        content: `<h2>Automated Outreach at Scale</h2>
<p>A prospecting agent can research leads, write personalised messages, and handle initial responses. This is one of the highest-value services you can build or sell.</p>

<h3>Claude Prompt for Each Prospect</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
Write a personalised cold email opening line (under 20 words) for
{{name}} at {{company}}.

Their recent LinkedIn post: {{recent_post}}
Company news: {{company_news}}
Their role: {{job_title}}

Requirements:
- Reference something specific about them or their company
- Sound human, not AI-generated
- Never use "I hope this email finds you well"
- End naturally so I can follow with my pitch
</pre>

<h3>Expected Results</h3>
<p>AI-personalised outreach typically achieves 4–8% reply rates vs 0.5–1% for generic bulk email.</p>

<h3>What You Need to Start</h3>
<ul>
<li>Apollo free account (50 prospects/month) or $49/month (unlimited)</li>
<li>Instantly.ai Basic ($37/month) for sending infrastructure</li>
<li>Make free account for the automation</li>
<li>Anthropic API key (~£0.50–2 per 1,000 prospects)</li>
<li>A warmed sending domain (separate from your main business email)</li>
</ul>

<div class="bg-green-900/30 p-4 rounded-lg mt-6">
<h4>💡 Pricing This Service</h4>
<p>Sell as managed service: £2,000–3,000 setup + £1,000–1,500/month management. Your margin after tools: 70–80%.</p>
</div>`
      },
      {
        id: 5,
        title: "Autonomous Task Agents",
        description: "Building agents that work independently on complex goals",
        duration: "25 min",
        content: `<h2>Set It and Forget It</h2>
<p>Autonomous agents operate with minimal supervision on complex multi-step tasks. This is the cutting edge of what's practical in May 2026.</p>

<h3>Realistic Expectations</h3>
<p>Claude Dispatch has ~50% success rate on complex multi-app tasks. That's not a flaw — it's honest. Use agents for tasks where you can review outputs, not for anything truly mission-critical without human oversight.</p>

<h3>Where Agents Excel Today</h3>
<ul>
<li><strong>Research and summarisation</strong> — very reliable, great ROI</li>
<li><strong>File organisation and document processing</strong> — reliable on structured tasks</li>
<li><strong>Code generation and testing</strong> — reliable with human review</li>
<li><strong>Scheduled recurring tasks</strong> — weekly reports, daily digests — reliable once configured</li>
<li><strong>Complex multi-app workflows</strong> — improving, ~50–70% success rate</li>
</ul>

<h3>Building a Research Agent (Make + Claude)</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
Trigger: Scheduled weekly (Monday 7am)

Steps:
1. HTTP module → search Google News for
   "[industry] news this week"
2. Scrape top 5 article URLs
3. Claude: summarise key trends from articles
4. Claude: identify implications for [client's business]
5. Create Google Doc with formatted report
6. Email to client: "Weekly AI Brief — [Date]"
</pre>

<h3>Agent Best Practices</h3>
<ul>
<li><strong>Start supervised:</strong> Watch 10 runs before going fully autonomous</li>
<li><strong>Clear goals:</strong> Vague instructions produce vague results</li>
<li><strong>Narrow scope:</strong> One agent does one thing well</li>
<li><strong>Log everything:</strong> Essential for debugging and client reporting</li>
<li><strong>Error alerts:</strong> Make should notify you via Slack if anything fails</li>
</ul>`
      }
    ]
  },
  {
    id: 5,
    title: "AI Monetisation Models",
    description: "Every way AI turns into sustainable, scalable income — freelancing, agency, SaaS, products, and more.",
    outcome: "Students choose a monetisation path and build a repeatable income model.",
    icon: "TrendingUp",
    lessons: [
      {
        id: 1,
        title: "Freelancing with AI",
        description: "Supercharge your freelance income using AI as leverage",
        duration: "20 min",
        content: `<h2>The AI-Powered Freelancer</h2>
<p>AI doesn't replace freelancers — it makes good freelancers extraordinary. The ones struggling are ignoring AI. The ones thriving are using it as leverage to deliver more, faster, at better margins.</p>

<h3>High-Demand AI Freelance Services (2026)</h3>
<ul>
<li>AI automation building (Make/n8n workflows) — £500–3,000 per project</li>
<li>AI-assisted content writing and editing — £80–250 per piece</li>
<li>AI chatbot development — £400–2,000 setup</li>
<li>Prompt engineering for business systems — £100–500/day</li>
<li>AI video production (HeyGen, Runway) — £300–1,000 per video</li>
<li>Claude Code builds for non-developers — £500–3,000 per app</li>
</ul>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6 mb-6">
<h4>📋 Launch Your Upwork Profile in 30 Minutes</h4>
<ol class="mt-2 space-y-2">
<li>Go to upwork.com and create a freelancer account</li>
<li>Claude prompt: "Write an Upwork profile title and overview for an AI automation specialist who builds Make/n8n workflows and AI chatbots for small businesses. Results-focused, under 500 characters."</li>
<li>Set your rate to £60/hour (raise after 5 reviews)</li>
<li>Add 3 portfolio items — even samples you built for practice</li>
<li>Apply to 5 jobs per day with personalised proposals</li>
<li>Claude prompt for each: "Write an Upwork proposal for [job description]. Under 150 words. Open with their specific problem."</li>
</ol>
</div>

<h3>Pricing by Experience Level</h3>
<table class="w-full text-left mt-4">
<tr class="border-b border-gray-700"><th class="pb-2">Level</th><th class="pb-2">Hourly</th><th class="pb-2">Project Min</th></tr>
<tr class="border-b border-gray-700"><td class="py-2">Beginner (0–5 reviews)</td><td>£40–60</td><td>£400</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Intermediate (5–20 reviews)</td><td>£80–120</td><td>£1,000</td></tr>
<tr><td class="py-2">Expert (20+ reviews)</td><td>£150–250+</td><td>£3,000+</td></tr>
</table>`
      },
      {
        id: 2,
        title: "Building an AI Agency",
        description: "Scale beyond freelancing into a leveraged agency model",
        duration: "25 min",
        content: `<h2>From Freelancer to Agency Owner</h2>
<p>An agency lets you scale beyond your personal capacity. With AI as your delivery infrastructure, the economics are far better than traditional agencies.</p>

<h3>The AI-First Agency Structure</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
You (Founder)
├── Sales and Client Management
├── AI Delivery Systems
│   ├── Make/n8n workflows (content, reporting)
│   ├── Claude Code for custom builds
│   └── AI agents running in background
└── Human Team (minimal)
    ├── 1–2 editors/QA contractors
    └── VA for admin
</pre>

<h3>Growth Path</h3>
<ol>
<li><strong>Phase 1 (0–3 months):</strong> Solo + AI — target £3–5k/month</li>
<li><strong>Phase 2 (3–9 months):</strong> Add 1–2 part-time contractors — target £8–15k/month</li>
<li><strong>Phase 3 (9–18 months):</strong> Systematise delivery — target £20–40k/month</li>
<li><strong>Phase 4:</strong> Hire ops manager, focus entirely on sales and growth</li>
</ol>

<h3>Key Metrics</h3>
<ul>
<li><strong>MRR:</strong> Monthly recurring revenue — your foundation</li>
<li><strong>Churn rate:</strong> Keep below 5% monthly</li>
<li><strong>Gross margin:</strong> Aim for 60–70%+ on service delivery</li>
<li><strong>Client LTV:</strong> How long clients stay and what they spend total</li>
</ul>`
      },
      {
        id: 3,
        title: "AI SaaS and Micro-Tools",
        description: "Build and sell AI-powered software products with 80–90% margins",
        duration: "28 min",
        content: `<h2>Products That Scale Without You</h2>
<p>Micro-SaaS products solve specific problems for specific audiences. AI makes building them faster than ever — from idea to paying customers in under a month is realistic in 2026.</p>

<h3>Underserved Micro-SaaS Ideas (2026)</h3>
<ul>
<li>AI Google Review responder for local businesses (auto-drafts responses for owner approval)</li>
<li>Job description AI scorer — "How AI-proof is this role?"</li>
<li>Content repurposer: paste YouTube transcript → get blog + social posts</li>
<li>AI proposal generator for specific freelance niches</li>
<li>Estate agent listing description generator</li>
<li>AI meeting notes → Notion/Slack with action items extraction</li>
</ul>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6 mb-6">
<h4>📋 Validate Before Building</h4>
<ol class="mt-2 space-y-2">
<li>Find a problem on Reddit (r/Entrepreneur, r/smallbusiness): "I wish there was a tool that..."</li>
<li>Check if people already pay for solutions. Competitors = good. No competitors = be careful.</li>
<li>Post in relevant communities: "I'm building a [TOOL] for [AUDIENCE]. Would you pay £X/month?" Get 10 genuine yes answers before building.</li>
<li>Build a landing page first (Carrd.co, free). Capture email waitlist.</li>
<li>Get 50 signups before writing code. Can't get 50? Reconsider the idea.</li>
<li>Build MVP: Bolt.new + Supabase + Stripe. Get 10 paying customers before investing more time.</li>
</ol>
</div>

<h3>Build Stack (Non-Developer Friendly)</h3>
<ul>
<li><strong>App:</strong> Bolt.new or Lovable</li>
<li><strong>Database + Auth:</strong> Supabase (free tier very generous)</li>
<li><strong>Payments:</strong> Stripe (Bolt/Lovable can integrate this)</li>
<li><strong>Hosting:</strong> Vercel (free hobby tier)</li>
<li><strong>Custom features:</strong> Claude Code for anything complex</li>
</ul>`
      },
      {
        id: 4,
        title: "Digital Products and Affiliate Marketing",
        description: "Passive income through AI-created products and recurring affiliate commissions",
        duration: "22 min",
        content: `<h2>Passive Income Streams</h2>
<p>Digital products sell while you sleep. AI compresses creation time from weeks to days — and the margins are extraordinary (80–95%).</p>

<h3>Product Types and Price Points</h3>
<ul>
<li><strong>Prompt packs:</strong> Curated, tested prompts for specific use cases — £15–97</li>
<li><strong>Templates:</strong> Notion/Airtable business systems — £27–97</li>
<li><strong>eBooks and guides:</strong> Practical how-to content — £19–49</li>
<li><strong>Mini-courses:</strong> Short, focused video training — £97–297</li>
<li><strong>Full courses:</strong> Comprehensive programmes — £297–997</li>
</ul>

<h3>Top AI Tool Affiliate Programs</h3>
<table class="w-full text-left mt-4">
<tr class="border-b border-gray-700"><th class="pb-2">Program</th><th class="pb-2">Commission</th><th class="pb-2">Type</th></tr>
<tr class="border-b border-gray-700"><td class="py-2">Jasper</td><td>30%</td><td>Recurring</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Surfer SEO</td><td>25%</td><td>Recurring</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Make</td><td>20%</td><td>Recurring</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Chatbase</td><td>30%</td><td>Recurring</td></tr>
<tr><td class="py-2">Notion</td><td>50% first year</td><td>One-time</td></tr>
</table>

<div class="bg-green-900/30 p-4 rounded-lg mt-6">
<h4>💡 The Recurring Commission Play</h4>
<p>One customer converting to a £20/month tool at 30% commission pays you £6/month indefinitely. Get 200 customers = £1,200/month passive. Build this through SEO content that ranks and brings traffic on autopilot.</p>
</div>`
      },
      {
        id: 5,
        title: "Scaling and Reinvesting Profits",
        description: "Grow your AI business from income to wealth systematically",
        duration: "20 min",
        content: `<h2>From Income to Wealth</h2>
<p>Making money is step one. Growing it sustainably is the real game.</p>

<h3>The Reinvestment Framework</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
Monthly Revenue
├── 50% — Business operations
│   ├── AI tools and software
│   ├── Contractors (editors, VA, QA)
│   └── Paid distribution and marketing
├── 30% — Personal income
└── 20% — Growth fund
    ├── New tool experiments (budget-capped)
    ├── Education and courses
    └── Building new income streams
</pre>

<h3>The Five Scaling Levers</h3>
<ol>
<li><strong>Automation:</strong> Every manual recurring task should eventually run on its own</li>
<li><strong>Delegation:</strong> Hire contractors for tasks below your effective hourly rate</li>
<li><strong>Products:</strong> Add passive income streams alongside active services</li>
<li><strong>Price increases:</strong> Raise rates 20–30% every 6 months as you build proof</li>
<li><strong>Niching:</strong> Specialise in one industry — command premium rates, easier to win clients</li>
</ol>

<div class="bg-green-900/30 p-4 rounded-lg mt-6">
<h4>💰 Core Principle</h4>
<p>The goal isn't to work more. It's to earn more per hour worked — and eventually per hour you're NOT working. AI is your leverage. Every hour building a system that runs automatically is an hour that keeps paying you.</p>
</div>`
      }
    ]
  },
  {
    id: 6,
    title: "Mastering Claude Code",
    description: "Deep dive into Claude Code — Anthropic's most powerful coding agent — and how to use it to build real products without being a developer.",
    outcome: "Students can use Claude Code to build, iterate, and deploy real software products.",
    icon: "Terminal",
    lessons: [
      {
        id: 1,
        title: "What Is Claude Code?",
        description: "Understanding Anthropic's terminal-based coding agent and why it stands out",
        duration: "15 min",
        content: `<h2>Claude Code: AI That Builds, Not Just Suggests</h2>
<p>Claude Code is Anthropic's command-line AI coding agent. Unlike Cursor or Windsurf (code editors), Claude Code lives in your terminal and operates at a deeper level — understanding your entire project, running commands, editing multiple files, and reasoning about complex problems.</p>

<h3>Why Claude Code Stands Out</h3>
<p>Across developer communities in 2026, Claude Code is consistently described as the most capable model for deep reasoning, debugging, and architectural changes. When other tools fail on hard problems — Claude Code is where developers escalate.</p>

<ul>
<li><strong>Deep reasoning:</strong> Understands your whole codebase, not just the current file</li>
<li><strong>Autonomous action:</strong> Runs tests, installs packages, debugs errors, iterates — unsupervised</li>
<li><strong>Hooks system:</strong> 27 hook events to customise behaviour at every step</li>
<li><strong>Skills system:</strong> Extend capabilities with pre-built skill files</li>
<li><strong>MCP support:</strong> Connect to databases, APIs, and web services</li>
</ul>

<h3>Quick Comparison</h3>
<table class="w-full text-left mt-4">
<tr class="border-b border-gray-700"><th class="pb-2">Tool</th><th class="pb-2">Interface</th><th class="pb-2">Best For</th></tr>
<tr class="border-b border-gray-700"><td class="py-2">Claude Code</td><td>Terminal</td><td>Hard problems, deep reasoning, full autonomy</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Cursor</td><td>IDE (VS Code fork)</td><td>Daily coding, visual editing</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Codex</td><td>Cloud agent</td><td>Parallel tasks, GitHub integration</td></tr>
<tr><td class="py-2">Bolt.new</td><td>Browser</td><td>Building from scratch without code</td></tr>
</table>`
      },
      {
        id: 2,
        title: "Installing and Setting Up Claude Code",
        description: "Get Claude Code running on your Mac or PC in 10 minutes",
        duration: "15 min",
        content: `<h2>Installation Guide</h2>
<p>Claude Code is a Node.js CLI tool. You need Node.js installed first, then it's a single command.</p>

<h3>Step 1: Install Node.js</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
# Mac (with Homebrew — install from brew.sh first)
brew install node

# Windows: download LTS installer from nodejs.org

# Verify installation
node --version  # Should show v18 or higher
</pre>

<h3>Step 2: Install Claude Code</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">npm install -g @anthropic-ai/claude-code</pre>

<h3>Step 3: Get an API Key</h3>
<ol>
<li>Go to console.anthropic.com and create an account</li>
<li>Go to "API Keys" and create a new key</li>
<li>Add credits to your account (start with £10–20)</li>
<li>Copy the key — you'll only see it once</li>
</ol>

<h3>Step 4: Start Claude Code</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
cd ~/path/to/your/project
claude
</pre>
<p>First run opens a browser to authenticate. After that, it starts directly.</p>

<h3>Key Commands</h3>
<ul>
<li><strong>/help</strong> — See all available commands</li>
<li><strong>/clear</strong> — Clear conversation history</li>
<li><strong>/model</strong> — Switch between Claude models</li>
<li><strong>Ctrl+C</strong> — Stop the current action</li>
</ul>

<div class="bg-yellow-900/30 p-4 rounded-lg mt-4">
<h4>⚠️ Cost Management</h4>
<p>A typical session costs £0.50–3.00 depending on project size. Set a spending limit in console.anthropic.com to prevent surprises.</p>
</div>`
      },
      {
        id: 3,
        title: "Using Claude Code Effectively",
        description: "Techniques and patterns for getting consistently great results",
        duration: "20 min",
        content: `<h2>Directing Claude Code Like a Pro</h2>
<p>Claude Code is powerful but there's a skill to directing it well. Here's what separates people who get great results from those who get frustrating ones.</p>

<h3>Be Specific — Always</h3>
<div class="bg-red-900/30 p-4 rounded-lg mb-4">
<p><strong>❌ Vague:</strong> "Make the app better"</p>
</div>
<div class="bg-green-900/30 p-4 rounded-lg">
<p><strong>✅ Specific:</strong> "The login page at app/login/page.tsx takes 3 seconds to load on mobile. Profile the component, identify what's causing the delay, and fix it. Don't change the visual design."</p>
</div>

<h3>Use CLAUDE.md for Persistent Context</h3>
<p>Create a CLAUDE.md file in your project root — Claude Code reads this at the start of every session:</p>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
# Project: My App Name

## Tech Stack
- Next.js 14, TypeScript, Tailwind CSS
- Prisma + PostgreSQL (Neon hosted)
- NextAuth with Google OAuth
- Stripe for payments

## Rules
- Never break existing auth flows
- All API routes must have: export const dynamic = 'force-dynamic'
- Always maintain TypeScript types
- Test changes before marking complete
</pre>

<h3>The Iterative Development Pattern</h3>
<ol>
<li>Describe the task precisely with constraints</li>
<li>Ask Claude Code to explain its plan first: "Plan this before acting"</li>
<li>Review the plan — correct anything before it executes</li>
<li>Let it execute, review the changes</li>
<li>Test manually, then: "Commit these changes with a descriptive message"</li>
</ol>

<h3>Tips for Non-Developers</h3>
<ul>
<li>Ask for explanations: "Explain what you just did in plain English"</li>
<li>Test everything: "How do I test that this works?"</li>
<li>Commit often: creates restore points if something breaks</li>
<li>One thing at a time: small, reviewable steps are safer than big rewrites</li>
</ul>`
      },
      {
        id: 4,
        title: "Building Real Projects with Claude Code",
        description: "Practical walkthroughs for shipping sellable products",
        duration: "25 min",
        content: `<h2>From Zero to Shipped</h2>
<p>Three practical project walkthroughs using Claude Code — the kind of things you can build and sell.</p>

<h3>Project 1: A Niche AI SaaS Tool</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
> Create a new Next.js 14 project with TypeScript,
  Tailwind, and shadcn/ui. Call it "review-responder".

> Build a single-page app where users paste a Google review
  and click "Generate Response". Call the Anthropic API to
  generate a professional, personalised response.
  Clean dark design.

> Add NextAuth with Google sign-in.
  Add Stripe Checkout. Users get 5 free responses,
  then must subscribe for £9/month.

> Set up for Vercel deployment.
  List all environment variables I need to configure.
</pre>

<h3>Project 2: Add a Feature to an Existing App</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
> This is a Next.js course platform with Prisma and NextAuth.
  Users complete lessons tracked in LessonProgress table.

  Add a progress overview to the dashboard showing:
  - Total lessons completed / total lessons
  - Progress percentage per module as a visual bar
  - "Continue where you left off" button

  Match the existing dark design. Don't modify the schema.
</pre>

<h3>Project 3: Debug a Problem</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
> Users report they can't check out — they click the purchase
  button and nothing happens.

  Check the checkout flow starting at app/api/checkout/route.ts.
  Identify what's failing and fix it.
  Explain what the bug was and how you fixed it.
</pre>

<div class="bg-green-900/30 p-4 rounded-lg mt-6">
<h4>💡 The Non-Developer Advantage</h4>
<p>You don't need to understand every line of code. You need to understand what you want to build and how to describe it precisely. That's a communication skill — and it compounds fast.</p>
</div>`
      },
      {
        id: 5,
        title: "Claude Code Dispatch and Parallel Agents",
        description: "Running multiple Claude Code agents simultaneously for complex projects",
        duration: "18 min",
        content: `<h2>Claude Code Dispatch: Multiple Agents, One Goal</h2>
<p>Claude Code Dispatch lets you run multiple Claude Code agents in parallel — one on the frontend, one on the backend, one writing tests — all at the same time. Available on Claude Max and Team plans.</p>

<h3>Example: Building a Feature in Parallel</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
Agent 1 — Frontend:
"Add a progress bar to the lesson page showing module completion.
File: app/course/module/[moduleId]/lesson/page.tsx
Match existing dark design. Don't change other components."

Agent 2 — API:
"Add GET endpoint at /api/user/module-progress returning
completion percentage for each module for current user.
Use existing LessonProgress model in Prisma."

Agent 3 — Tests:
"Write Jest tests for all API routes in app/api/user/
Cover authenticated, unauthenticated, and edge cases."
</pre>
<p>All three run simultaneously. You review outputs and merge what's good.</p>

<h3>Cowork Dispatch vs Code Dispatch — Cleared Up</h3>
<table class="w-full text-left mt-4">
<tr class="border-b border-gray-700"><th class="pb-2">Task</th><th class="pb-2">Which Dispatch</th></tr>
<tr class="border-b border-gray-700"><td class="py-2">Build a feature in my app</td><td>Claude Code Dispatch</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Organise my Downloads folder</td><td>Cowork Dispatch</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Write tests for API routes</td><td>Claude Code Dispatch</td></tr>
<tr><td class="py-2">Send me weekly email summaries</td><td>Cowork Dispatch</td></tr>
</table>

<div class="bg-green-900/30 p-4 rounded-lg mt-6">
<h4>💡 Simple Rule</h4>
<p>Code tasks = Claude Code Dispatch. File, email, productivity tasks = Cowork Dispatch. They complement each other perfectly.</p>
</div>`
      }
    ]
  },
  {
    id: 7,
    title: "OpenClaw, Dispatch and Desktop Agents",
    description: "Master the two leading desktop AI agent platforms and the tools that make them genuinely useful.",
    outcome: "Students can set up and use Claude Dispatch and/or OpenClaw as a real productivity assistant.",
    icon: "Settings",
    lessons: [
      {
        id: 1,
        title: "Introduction to OpenClaw",
        description: "Understanding the open source desktop agent taking the world by storm",
        duration: "15 min",
        content: `<h2>OpenClaw: 247,000 Stars and Growing</h2>
<p>OpenClaw is the open source desktop agent that exploded in popularity through 2025–2026. By March 2026 it had 247,000 GitHub stars — one of the fastest-growing open source projects ever. Its creator joined OpenAI in February 2026 and transitioned it to an open-source foundation.</p>

<h3>Why OpenClaw Is Different</h3>
<ul>
<li><strong>Model-agnostic:</strong> Use Claude, GPT-4, DeepSeek, Gemini, or local models via Ollama</li>
<li><strong>Your messaging apps:</strong> Control it via Telegram, WhatsApp, Discord, Slack, iMessage</li>
<li><strong>Fully local:</strong> Everything stays on your machine</li>
<li><strong>Skills system:</strong> Extend capabilities with SKILL.md files</li>
<li><strong>Free to run:</strong> Only pay for API usage — no subscription required</li>
</ul>

<h3>Before You Start</h3>
<p>Make sure you have OpenClaw installed. In Terminal:</p>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
npm install -g openclaw
cd $HOME
openclaw init
# Follow setup wizard — connect your Telegram or messaging app
# Add your API keys (Anthropic, OpenAI, etc.)
</pre>

<h3>Using Claude Code to Build OpenClaw Systems</h3>
<p>A key technique used by power users: use Claude Code to build and configure your OpenClaw setup. Claude Code is better for architecture work — it builds precisely without burning tokens on faulty setups. OpenClaw then runs the systems Claude Code built.</p>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6">
<h4>📋 Installing ClawHub (Skill Registry)</h4>
<pre class="bg-gray-900 p-3 rounded text-sm">npm i -g clawhub</pre>
<p class="mt-2 text-sm text-yellow-400">⚠️ Warning: Stick to official skills and well-known community authors. There have been reports of malware from unknown contributors.</p>
</div>`
      },
      {
        id: 2,
        title: "OpenClaw vs Dispatch: Which Is Right For You?",
        description: "An honest comparison of the two leading desktop agent platforms",
        duration: "15 min",
        content: `<h2>Two Great Platforms. Different Audiences.</h2>
<p>Claude Cowork Dispatch launched March 17, 2026. OpenClaw has been building momentum since 2024. Here's the honest comparison.</p>

<h3>Claude Cowork Dispatch</h3>
<ul>
<li><strong>Interface:</strong> Desktop GUI app + phone control via QR code</li>
<li><strong>Purpose:</strong> Persistent desktop agent for productivity tasks</li>
<li><strong>38+ built-in connectors:</strong> Gmail, Slack, Notion, Google Drive, Calendar, Todoist</li>
<li><strong>Security:</strong> Local sandboxed execution — files never leave your machine</li>
<li><strong>Success rate:</strong> ~50% on complex multi-app tasks (honest research preview figures)</li>
<li><strong>Cost:</strong> Requires Claude Max plan ($100–200/month)</li>
<li><strong>Best for:</strong> Professionals who want something polished out of the box</li>
</ul>

<h3>OpenClaw</h3>
<ul>
<li><strong>Interface:</strong> Your existing messaging apps (Telegram, WhatsApp, Discord)</li>
<li><strong>Purpose:</strong> Fully customisable local AI agent</li>
<li><strong>Model-agnostic:</strong> Claude, GPT, DeepSeek, Gemini, local models</li>
<li><strong>Skills system:</strong> Add capabilities via SKILL.md files</li>
<li><strong>Cost:</strong> Free to run — only pay for API usage</li>
<li><strong>Best for:</strong> Power users who want maximum control and flexibility</li>
</ul>

<h3>Which Should You Choose?</h3>
<table class="w-full text-left mt-4">
<tr class="border-b border-gray-700"><th class="pb-2">You want...</th><th class="pb-2">Use</th></tr>
<tr class="border-b border-gray-700"><td class="py-2">Something polished that works out of the box</td><td>Claude Dispatch</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Full control and flexibility</td><td>OpenClaw</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Phone control of your desktop</td><td>Claude Dispatch</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Control via Telegram/WhatsApp</td><td>OpenClaw</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Multiple AI models</td><td>OpenClaw</td></tr>
<tr><td class="py-2">Already on Claude Max plan</td><td>Claude Dispatch (it's included)</td></tr>
</table>`
      },
      {
        id: 3,
        title: "How Skills Work in OpenClaw",
        description: "Understanding the skill system and ClawHub registry",
        duration: "10 min",
        content: `<h2>Adding Capabilities to OpenClaw</h2>
<p>Skills are how OpenClaw learns new capabilities. There are two ways to add them.</p>

<h3>Method 1: Manually</h3>
<p>Create a SKILL.md file with instructions for using a specific tool. OpenClaw reads this file whenever it needs to use that tool. You can use Claude Code to build these out automatically.</p>

<h3>Method 2: ClawHub Registry</h3>
<p>OpenClaw's skill registry — install pre-built skills from verified authors. Some come from the OpenClaw team, some are official skills from tool authors, some are community-contributed.</p>

<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
# Install a skill from ClawHub
clawhub install agentmail

# List installed skills
clawhub list

# View skill documentation
clawhub docs agentmail
</pre>

<h3>Skill Priority</h3>
<p>Skills are loaded in this order (highest priority first):</p>
<ol>
<li>Your workspace skills (project-specific)</li>
<li>Your global skills (installed for all projects)</li>
<li>ClawHub registry skills</li>
</ol>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6">
<h4>📋 Using Claude Code to Build Skills</h4>
<p>The most efficient way to add capabilities: paste this into Claude Code in your OpenClaw directory:</p>
<pre class="bg-gray-900 p-3 rounded text-sm mt-2">
Create a SKILL.md file that teaches OpenClaw how to 
use [TOOL NAME]. Include: what the tool does, how to 
authenticate, the key API endpoints or commands, 
common use cases with example invocations, and 
error handling guidance.
</pre>
</div>`
      },
      {
        id: 4,
        title: "Tool 1: AgentMail",
        description: "Give your OpenClaw agent its own dedicated email inbox",
        duration: "20 min",
        content: `<h2>AgentMail: Email Built for AI Agents</h2>
<p>AgentMail (agentmail.to) is a Y Combinator-backed startup that built an email platform specifically for AI agents. Your agent gets its own real email inbox — not a Gmail account with all the associated banning risks.</p>

<h3>Why Not Just Use Gmail?</h3>
<p>Gmail bans accounts used for automated sending at scale. AgentMail is built from the ground up for agent use: programmatic send/receive, webhooks, no account banning risk, designed for API access.</p>

<h3>Setup in 3 Steps</h3>
<ol>
<li>Go to agentmail.to → sign up with Google (free, up to 3 inboxes)</li>
<li>Create your first inbox — your address will be yourname@agentmail.to</li>
<li>Go to API keys → generate your first key</li>
</ol>

<h3>Install with Claude Code</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
Set up AgentMail for my OpenClaw agent.

Skill docs at: https://clawhub.ai/adboio/agentmail

Make sure to:
1. Install the AgentMail skill via ClawHub if not installed
2. Configure AGENTMAIL_API_KEY in openclaw.json
   My key is: [YOUR_KEY]
3. My agent's inbox is: [YOUR_INBOX]
4. Install Python SDK: pip install agentmail python-dotenv
5. Test sending and receiving an email
</pre>

<h3>Use Cases</h3>
<ul>
<li>Forward newsletters to your agent for daily summaries</li>
<li>Set up a support inbox for first-line AI responses</li>
<li>Process incoming invoices and extract key details automatically</li>
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
        description: "The single biggest upgrade you can make to OpenClaw — semantic memory",
        duration: "20 min",
        content: `<h2>QMD: The Single Biggest OpenClaw Upgrade</h2>
<p>Out of the box, OpenClaw uses keyword-based search to find past memories. The problem: if you ask "what did we work on with that client last month?" but the actual conversation used different words — keyword search fails. QMD fixes this.</p>

<h3>What QMD Is</h3>
<p>QMD is an open-source local search engine built by Tobi Lutke (CEO of Shopify). It combines three search strategies:</p>
<ul>
<li><strong>Keyword search:</strong> Traditional matching (like OpenClaw's default)</li>
<li><strong>Vector semantic search:</strong> Understands meaning, not just exact words</li>
<li><strong>LLM re-ranker:</strong> Scores results by actual relevance to your query</li>
</ul>
<p>It all runs on your machine — no API keys, no cloud, no data leaving your computer.</p>

<h3>Setup with Claude Code</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
Set up QMD as the memory backend for my OpenClaw agent.
Follow: https://docs.openclaw.ai/concepts/memory#qmd-backend-experimental

Make sure to:
1. Install the QMD CLI
2. Install SQLite with extension support if needed
   (macOS: brew install sqlite)
3. Configure memory.backend = "qmd" in openclaw.json
4. Add my workspace memory files as a QMD collection
5. Run initial embed so models are downloaded
6. Verify with a test query
</pre>

<div class="bg-green-900/30 p-4 rounded-lg mt-6">
<h4>💡 If You Pick Just One Upgrade</h4>
<p>QMD is it. Your agent goes from forgetting things to genuinely remembering them. The quality-of-life improvement is immediate and dramatic.</p>
</div>`,
        resources: [
          { title: "QMD GitHub Repository", url: "https://github.com/tobi/qmd" },
          { title: "OpenClaw Memory Docs", url: "https://docs.openclaw.ai/concepts/memory#qmd-backend-experimental" }
        ]
      },
      {
        id: 6,
        title: "Tool 3: Agent-Browser",
        description: "Give your agent a 93% more token-efficient web browser",
        duration: "20 min",
        content: `<h2>Agent-Browser: Browse Smarter, Spend Less</h2>
<p>Agent-Browser is a CLI tool from Vercel Labs giving your AI agent a real Chromium browser — not just HTML scraping. It can navigate pages, click, fill forms, take screenshots, and interact with JavaScript-heavy sites. And it does all of this with 93% fewer tokens than Playwright.</p>

<h3>Installation</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">npm install -g agent-browser</pre>

<h3>Setup with Claude Code</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
Install the agent-browser skill for my OpenClaw agent.

Skill docs at:
https://github.com/vercel-labs/agent-browser/tree/main/skills/agent-browser

OpenClaw skills docs:
https://docs.openclaw.ai/tools/skills

Make sure to:
1. Install the skill into the OpenClaw skills directory
2. Include the SKILL.md and reference docs
3. Verify the skill shows up as eligible
4. Configure as default browser for all web access tasks
</pre>

<h3>Advanced Use Cases</h3>
<ul>
<li><strong>No-API workflows:</strong> Interact with sites that don't have APIs — fill forms, export reports, change settings</li>
<li><strong>Self-verifying code:</strong> Your agent can open preview URLs and verify its own fixes worked</li>
<li><strong>Price monitoring:</strong> Track prices, product availability, competitor changes</li>
<li><strong>Desktop app control:</strong> New skill for controlling Slack, Notion, VS Code via Electron</li>
</ul>`,
        resources: [
          { title: "Agent-Browser GitHub", url: "https://github.com/vercel-labs/agent-browser" },
          { title: "OpenClaw Skills Docs", url: "https://docs.openclaw.ai/tools/skills" }
        ]
      },
      {
        id: 7,
        title: "Putting It All Together",
        description: "Your complete desktop agent setup and recommended implementation order",
        duration: "10 min",
        content: `<h2>Your Complete Agent Setup</h2>

<div class="grid gap-4 my-6">
<div class="bg-gray-800 p-4 rounded-lg">
<h4 class="text-green-400">🖥️ Claude Cowork Dispatch</h4>
<p class="text-sm mt-1">Persistent desktop agent. Phone control. 38+ connectors. Polished GUI. Best for productivity tasks, files, and scheduling.</p>
</div>
<div class="bg-gray-800 p-4 rounded-lg">
<h4 class="text-green-400">🦾 OpenClaw</h4>
<p class="text-sm mt-1">Open source, model-agnostic. Control via Telegram. Fully customisable skills system. Best for power users.</p>
</div>
<div class="bg-gray-800 p-4 rounded-lg">
<h4 class="text-green-400">📧 AgentMail</h4>
<p class="text-sm mt-1">Dedicated email inbox for your agent. No Gmail banning risk. Webhooks and full API access.</p>
</div>
<div class="bg-gray-800 p-4 rounded-lg">
<h4 class="text-green-400">🧠 QMD Memory</h4>
<p class="text-sm mt-1">Semantic search for agent memories. Understands meaning not just keywords. Runs entirely locally.</p>
</div>
<div class="bg-gray-800 p-4 rounded-lg">
<h4 class="text-green-400">🌐 Agent-Browser</h4>
<p class="text-sm mt-1">93% fewer tokens than Playwright. Full Chromium browser. Can control desktop apps.</p>
</div>
</div>

<h3>Recommended Order</h3>
<ol>
<li><strong>Start with Claude Code</strong> (Module 6) — learn to build with AI first</li>
<li><strong>Try Claude Dispatch</strong> — if on Max plan, experiment with phone-controlled tasks</li>
<li><strong>Set up OpenClaw</strong> — for full control and model flexibility</li>
<li><strong>Add QMD</strong> — highest-impact single upgrade</li>
<li><strong>Add AgentMail + Agent-Browser</strong> — complete the setup</li>
</ol>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6">
<h4>🎓 Next Up: Module 8</h4>
<p>You now have everything you need to run AI agents for business. Module 8 covers something just as powerful — using all of this to automate your own life and personal productivity.</p>
</div>`
      }
    ]
  },
  {
    id: 8,
    title: "AI for Personal Productivity and Life Automation",
    description: "Use AI agents to automate your own life — not just your work. Daily briefings, email management, research, scheduling, and more.",
    outcome: "Students set up a personal AI system that saves them 2+ hours every day automatically.",
    icon: "Brain",
    lessons: [
      {
        id: 1,
        title: "The Personal AI Operating System",
        description: "How to think about AI as your personal life infrastructure",
        duration: "15 min",
        content: `<h2>Your Personal AI Operating System</h2>
<p>Most people use AI reactively — they have a problem, they open ChatGPT, they ask a question. The people getting the most out of AI in 2026 have built a <strong>personal AI operating system</strong> — a set of agents, automations, and systems that run proactively in the background, handling recurring tasks before they even hit your inbox.</p>

<h3>The Three Layers</h3>
<ul>
<li><strong>Layer 1 — Information:</strong> AI that reads, monitors, and summarises the world for you. News, emails, competitor activity, industry trends — all filtered and delivered in a daily briefing.</li>
<li><strong>Layer 2 — Decisions:</strong> AI that handles routine decisions and drafts responses for your approval. Scheduling, email replies, task prioritisation.</li>
<li><strong>Layer 3 — Execution:</strong> AI that actually does things. Files documents, sends emails, books meetings, creates reports — autonomously.</li>
</ul>

<h3>What This Looks Like in Practice</h3>
<p>Every morning at 7am, before you've even looked at your phone:</p>
<ul>
<li>Your AI has scanned your inbox and flagged 3 emails that need your attention today</li>
<li>A daily briefing has been created: top news in your industry, your calendar for the day, tasks due</li>
<li>Your content pipeline has published last night's scheduled posts</li>
<li>Any urgent Slack messages have been summarised and a draft response prepared</li>
</ul>

<div class="bg-green-900/30 p-4 rounded-lg mt-6">
<h4>💡 The Goal</h4>
<p>You show up to your day already informed, already ahead, with your attention reserved only for decisions that actually require you. Everything else has been handled.</p>
</div>`
      },
      {
        id: 2,
        title: "Your Morning AI Briefing",
        description: "Build an automated daily briefing delivered to your phone every morning",
        duration: "25 min",
        content: `<h2>Wake Up Already Informed</h2>
<p>A morning briefing automation is the single highest-ROI system you can build. It takes 2–3 hours to set up and saves you 30–60 minutes every single day forever.</p>

<h3>What Your Briefing Should Cover</h3>
<ul>
<li><strong>Calendar:</strong> Today's meetings and appointments with prep notes</li>
<li><strong>Priority emails:</strong> The 3–5 messages that need your attention today</li>
<li><strong>Industry news:</strong> Top 5 developments in your field from the last 24 hours</li>
<li><strong>Tasks due:</strong> What needs to be done today from your task manager</li>
<li><strong>Weather:</strong> Quick check for the day</li>
</ul>

<h3>Building It in Make (Step by Step)</h3>
<ol>
<li><strong>Schedule trigger:</strong> Every day at 6:30am</li>
<li><strong>Google Calendar:</strong> "List Events" — today's events</li>
<li><strong>Gmail:</strong> "Search Emails" — unread emails from last 24 hours, sorted by importance</li>
<li><strong>HTTP module:</strong> Search Google News RSS for "[your industry] news"</li>
<li><strong>Claude:</strong> "You are my personal assistant. Here is my calendar: [calendar data]. Here are my unread emails: [emails]. Here is today's industry news: [news]. Create a concise morning briefing (under 300 words) covering: 1) Key meetings today with prep notes, 2) Emails needing my attention, 3) Top 3 industry news items, 4) My priority for today. Be direct and useful."</li>
<li><strong>Output:</strong> Send to Telegram, email, or Slack — whichever you check first</li>
</ol>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6">
<h4>📋 Making It Better Over Time</h4>
<ul class="mt-2 space-y-2">
<li>Add a "Tasks Due Today" pull from Notion or Todoist</li>
<li>Include a daily quote or reflection prompt</li>
<li>Add competitor monitoring — track what your competitors publish</li>
<li>Include a revenue snapshot if you have Stripe access via API</li>
</ul>
</div>`
      },
      {
        id: 3,
        title: "AI Email Management",
        description: "Triage, draft, and manage your inbox with AI — never drown in email again",
        duration: "22 min",
        content: `<h2>Inbox Zero Without the Work</h2>
<p>The average professional spends 2.6 hours per day on email. AI can cut this to 30 minutes — or less.</p>

<h3>The Four Email Jobs AI Can Handle</h3>

<h4>1. Triage and Classification</h4>
<p>AI reads every incoming email and classifies it: Urgent/Important/Newsletter/Spam. Urgent ones get flagged to you immediately. Newsletters get summarised weekly. Spam gets archived.</p>

<h4>2. Draft Responses</h4>
<p>For common email types (meeting requests, pricing enquiries, support questions), AI drafts a response. You review, edit if needed, and send — or just click send.</p>

<h4>3. Meeting Scheduling</h4>
<p>When someone emails asking to meet, AI checks your calendar, identifies available slots, and drafts a response with your Calendly link or specific times offered.</p>

<h4>4. Follow-Up Reminders</h4>
<p>AI tracks emails you've sent that haven't received responses. After 3 days, it drafts a polite follow-up for your approval.</p>

<h3>Building Email Triage in Make</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
Trigger: New email arrives in Gmail

Claude prompt:
"Classify this email into exactly one category:
URGENT (needs response today)
IMPORTANT (needs response this week)
NEWSLETTER (marketing/updates)
RECEIPT (financial document)
SPAM (junk)

Email subject: {{subject}}
Email from: {{from}}
Email preview: {{snippet}}

Reply with just the category word."

Route:
URGENT → Apply label "AI-Urgent", send Telegram alert
IMPORTANT → Apply label "AI-Important"
NEWSLETTER → Apply label "AI-Newsletter", archive
RECEIPT → Apply label "AI-Receipt", archive
SPAM → Archive immediately
</pre>`
      },
      {
        id: 4,
        title: "AI Research Assistant",
        description: "Build a personal AI researcher that delivers intelligence on any topic",
        duration: "20 min",
        content: `<h2>Your Personal Intelligence Analyst</h2>
<p>One of the highest-value uses of AI is as a research assistant — but most people use it reactively (ask a question, get an answer). Build a proactive research system instead.</p>

<h3>Use Cases for Proactive Research</h3>
<ul>
<li><strong>Competitor monitoring:</strong> Weekly summary of what competitors published, announced, or changed</li>
<li><strong>Client intelligence:</strong> Before a sales call, auto-generate a briefing on the prospect</li>
<li><strong>Industry trends:</strong> Weekly "State of [Your Industry]" report delivered to your inbox</li>
<li><strong>Topic deep-dives:</strong> Send a message to your agent: "Research [topic] and give me a 500-word briefing with the key things I need to know"</li>
</ul>

<h3>Building a Competitor Monitor</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
Trigger: Every Monday 8am

For each competitor (loop):
1. HTTP → fetch their blog RSS feed
2. HTTP → search Google News for "[competitor name]"
3. Claude: "Summarise what [competitor] published or 
   announced this week. What's new? What's changed?
   What should I know? Under 150 words."

Combine all summaries + Claude:
"You are a competitive intelligence analyst.
Here are summaries of what my competitors did this week:
[all summaries]
What are the key takeaways? What should I do differently?
What opportunities do you see?"

Send to email as "Weekly Competitor Intelligence"
</pre>

<h3>The Pre-Call Client Briefing</h3>
<p>Paste this into your OpenClaw via Telegram before any sales call:</p>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
I have a call in 1 hour with [name] at [company].
Research the company and person and give me:
- What the company does (2 sentences)
- Their recent news or announcements
- The person's role and background
- 3 good conversation openers
- Any potential pain points my service could address
</pre>`
      },
      {
        id: 5,
        title: "Automating Your Finances and Admin",
        description: "Use AI to handle the admin that drains your time and energy",
        duration: "20 min",
        content: `<h2>Admin on Autopilot</h2>
<p>Admin tasks don't require your intelligence — they require consistency. AI is perfect for this. Here are the highest-value admin automations to build.</p>

<h3>Weekly Revenue Report</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
Trigger: Every Friday at 5pm

Steps:
1. Stripe API → get this week's payments
2. Calculate: total revenue, new customers, MRR change
3. Compare to last week and last month
4. Claude: "Here are my revenue numbers for this week:
   [data]. Write a concise weekly business summary
   covering: revenue, trends, what worked, what to
   focus on next week. Under 200 words."
5. Send to email as "Weekly Business Review"
</pre>

<h3>Invoice Processing</h3>
<p>Forward invoices to your AgentMail inbox → AI extracts: vendor, amount, due date, category → Logs to Google Sheet → Alerts you if due within 7 days.</p>

<h3>Meeting Notes and Actions</h3>
<p>After every meeting:</p>
<ol>
<li>Record with Otter.ai or Fireflies (auto-transcribes)</li>
<li>Make webhook receives transcript automatically</li>
<li>Claude: "From this meeting transcript, extract: 1) Key decisions made, 2) Action items with owner and deadline, 3) Any follow-ups needed. Format as bullet points."</li>
<li>Results emailed to all attendees automatically</li>
</ol>

<h3>Social Media Scheduling</h3>
<p>Build once, runs forever:</p>
<ul>
<li>Every Sunday you spend 30 minutes writing bullet points for the week's content</li>
<li>Paste into Claude: "Expand these into 7 LinkedIn posts (one per day). Professional but conversational. End each with a question."</li>
<li>Claude expands → Make loads into Buffer → Posts automatically all week</li>
</ul>`
      },
      {
        id: 6,
        title: "Building Your Personal Knowledge System",
        description: "Use AI to capture, organise, and retrieve everything you learn",
        duration: "18 min",
        content: `<h2>Never Forget Anything Again</h2>
<p>Most people learn something interesting, save a link, and never look at it again. A personal knowledge system — powered by AI — changes this fundamentally.</p>

<h3>The Stack</h3>
<ul>
<li><strong>Capture:</strong> Anything interesting gets sent to your knowledge inbox (a dedicated email, Telegram channel, or Notion inbox)</li>
<li><strong>Process:</strong> AI automatically summarises, tags, and categorises what you captured</li>
<li><strong>Retrieve:</strong> When you need something, ask your AI agent — it searches your knowledge base semantically (this is where QMD shines)</li>
<li><strong>Review:</strong> Weekly digest of what you've learned, with connections to other things you know</li>
</ul>

<h3>The Capture → Process Flow</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
You send a URL or text to Telegram → OpenClaw receives it

Claude processes it:
- If URL: fetch the page, summarise it
- Extract: key ideas, quotes, why it's useful
- Add tags: [topic], [type], [relevance to your goals]
- Save to Notion database with all metadata

When you ask "what do I know about [topic]?"
→ QMD searches your Notion database semantically
→ Returns the most relevant items you've saved
→ Claude synthesises them into a useful answer
</pre>

<h3>The Weekly Knowledge Review</h3>
<p>Every Sunday, your system automatically:</p>
<ol>
<li>Lists everything you captured and processed this week</li>
<li>Claude identifies connections between new items and your existing knowledge</li>
<li>Suggests 3 things you should apply or act on from what you learned</li>
<li>Delivers the review to your inbox</li>
</ol>

<div class="bg-green-900/30 p-4 rounded-lg mt-6">
<h4>💡 The Compound Effect</h4>
<p>After 6 months of running this system, you have a searchable, AI-queryable record of everything you've learned. It becomes one of the most valuable personal assets you own.</p>
</div>`
      },
      {
        id: 7,
        title: "Your Personal AI Dashboard",
        description: "Bring everything together into a central control system",
        duration: "15 min",
        content: `<h2>Your Command Centre</h2>
<p>Once you have several AI systems running, you need a way to see everything at a glance and control it from one place. This is your personal AI dashboard.</p>

<h3>What to Include</h3>
<ul>
<li><strong>Today's briefing</strong> — the morning summary delivered to you daily</li>
<li><strong>Inbox triage status</strong> — how many urgent/important emails today</li>
<li><strong>Revenue snapshot</strong> — this week vs last week</li>
<li><strong>Content pipeline status</strong> — what's published, what's scheduled</li>
<li><strong>Active automations</strong> — which Make scenarios are running and their last run status</li>
<li><strong>Knowledge captures this week</strong> — what you've added to your knowledge base</li>
</ul>

<h3>The Simplest Implementation</h3>
<p>A Notion page that pulls live data via Make automations. Every section gets updated automatically:</p>
<ol>
<li>Create a Notion page: "AI Dashboard"</li>
<li>Add sections for each area above</li>
<li>Build small Make automations that update each section on schedule</li>
<li>Make the page your browser home page</li>
</ol>

<h3>Telegram as Your Control Interface</h3>
<p>If you use OpenClaw, your Telegram becomes your control interface. Commands you can run:</p>
<ul>
<li>"Morning briefing" → triggers your briefing early</li>
<li>"Research [topic]" → instant deep dive</li>
<li>"Inbox summary" → what needs my attention today</li>
<li>"Revenue this week" → pulls from Stripe and summarises</li>
<li>"Draft reply to [name]" → fetches the email and drafts a response</li>
</ul>

<div class="bg-green-900/30 p-4 rounded-lg mt-6">
<h4>🎉 Course Complete!</h4>
<p>You now have everything — the mindset, the tools, the service businesses, the automation systems, the coding capability, the desktop agents, and the personal productivity infrastructure to make serious money with AI in 2026. The market is wide open. Go build something.</p>
</div>`
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
