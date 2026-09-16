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
    title: "Your AI Operating System",
    description: "Build a personal AI stack that actually fits together — without overlapping subscriptions or tool hoarding.",
    outcome: "Students have a lean, purposeful AI toolkit ready to generate income, not just experiment.",
    icon: "Brain",
    lessons: [
      {
        id: 1,
        title: "The 2027 AI Landscape in Plain English",
        description: "What changed, what matters, and what to ignore",
        duration: "15 min",
        content: `<h2>What You Actually Need to Know</h2>
<p>By early 2027, AI has moved from novelty to infrastructure. Understanding the landscape isn't optional — it's the difference between using tools intelligently and burning money on things that don't compound.</p>

<h3>The Current Foundation Models</h3>
<ul>
<li><strong>Claude (Anthropic):</strong> Sonnet 5 and Fable 5.1 are the current workhorse and flagship. Best-in-class for reasoning, long documents, complex instructions, and coding. Claude Code is the preferred terminal agent for most serious builders.</li>
<li><strong>GPT-6 (OpenAI):</strong> Strong general capability. The Codex app is now a standalone product — not just an API — and handles parallel coding tasks in cloud sandboxes. Good for users already in the OpenAI ecosystem.</li>
<li><strong>Gemini 3.8 (Google):</strong> Deep Google Workspace integration. Free tier remains generous. Gemini CLI gives you a capable model at zero API cost for lighter work.</li>
<li><strong>Open-weight models (Qwen 3.8, Llama 4, Mistral Large):</strong> Run locally via Ollama at zero ongoing cost. Genuinely capable for many tasks. Important for privacy-sensitive client work.</li>
</ul>

<h3>The Shift That Matters in 2027</h3>
<p>In 2024, AI was reactive — you asked, it answered. In 2026 agents became possible. In 2027, <strong>agents are the default</strong>. The question isn't "can AI do this?" — it's "which agent, with which tools, connected to which data?"</p>
<p>MCP (Model Context Protocol) became the standard way to connect AI to external tools and data. If you're building or selling AI services, understanding MCP is no longer optional.</p>

<h3>What Died (and What Replaced It)</h3>
<ul>
<li>Standalone prompt marketplaces — replaced by reusable agent skills and SOPs</li>
<li>"AI writing tools" as a category — absorbed into every major writing app</li>
<li>Charging clients for "AI content" as a mystery — clients now know what it costs and expect transparency</li>
</ul>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6">
<h4>📋 Action: Set Up Your Baseline Stack This Week</h4>
<ol class="mt-2 space-y-2">
<li>Claude.ai — create a free account, upgrade to Pro ($20/month) when ready</li>
<li>Perplexity — best for research with real citations, free tier is sufficient to start</li>
<li>Ollama — install locally for free model access (ollama.ai)</li>
<li>Make — create a free account at make.com (automation layer)</li>
</ol>
</div>`
      },
      {
        id: 2,
        title: "Choosing the Right Model for Each Job",
        description: "A practical decision framework — not a specs comparison",
        duration: "18 min",
        content: `<h2>Stop Switching Models Randomly</h2>
<p>Most people use one model for everything, or switch constantly based on hype. Neither approach is optimal. Here is a practical framework for 2027.</p>

<h3>The Decision Matrix</h3>
<table class="w-full text-left mt-4">
<tr class="border-b border-gray-700"><th class="pb-2">Task</th><th class="pb-2">Best Choice</th><th class="pb-2">Why</th></tr>
<tr class="border-b border-gray-700"><td class="py-2">Long document analysis</td><td>Claude Sonnet 5</td><td>200K+ context, best reasoning</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Research with citations</td><td>Perplexity</td><td>Real sources, not hallucinations</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Complex coding (terminal)</td><td>Claude Code</td><td>Best reasoning on hard problems</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Parallel coding tasks</td><td>Codex app</td><td>Cloud sandboxes, GitHub integration</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Daily IDE coding</td><td>Cursor or Windsurf</td><td>Best developer experience</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Build app from description</td><td>Bolt.new or Lovable</td><td>No-code to deployed in an hour</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Google Workspace tasks</td><td>Gemini 3.8</td><td>Native integration, free tier</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Privacy-sensitive work</td><td>Ollama (local)</td><td>Data never leaves your machine</td></tr>
<tr><td class="py-2">Desktop agent tasks</td><td>Claude Dispatch or OpenClaw</td><td>Depends on setup — see Module 7</td></tr>
</table>

<h3>The Rule That Saves Money</h3>
<p>Use the cheapest model that does the job reliably. Don't run Opus-class models for tasks that Sonnet handles fine. Don't pay for API calls for tasks a local model handles. Save the expensive models for genuinely hard problems.</p>

<h3>Claude Projects — Your Biggest Productivity Lever</h3>
<p>Claude Projects give each ongoing client or project its own persistent context — instructions, files, and memory that carry across every conversation. Set one up for each client you work with. The briefing you write once stays active forever.</p>`
      },
      {
        id: 3,
        title: "Chat vs Agents vs Automations",
        description: "Understanding the three layers and when each one applies",
        duration: "15 min",
        content: `<h2>Three Different Things, Constantly Confused</h2>

<h3>Layer 1: Chat (Interactive)</h3>
<p>You type, it responds. You review, you iterate. Best for creative work, analysis, writing, and anything that benefits from your judgment at each step.</p>
<p><strong>Use when:</strong> the task requires your expertise and review at each stage.</p>

<h3>Layer 2: Agents (Semi-autonomous)</h3>
<p>You give a goal. The agent plans, uses tools, takes actions, and returns a result. You review the output, not every step. Claude Code, the Codex app, and desktop agents like Claude Dispatch work this way.</p>
<p><strong>Use when:</strong> the task has clear success criteria and you trust the agent's execution.</p>

<h3>Layer 3: Automations (Fully automatic)</h3>
<p>A trigger fires, a workflow runs, an output is produced — without you being present. Make, n8n, and Zapier handle this layer. These run on a schedule or in response to events (new email, new form submission, new calendar event).</p>
<p><strong>Use when:</strong> the task is recurring, predictable, and can run without human review every time.</p>

<div class="bg-green-900/30 p-4 rounded-lg mt-6">
<h4>💡 The Income Principle</h4>
<p>Chat generates your first revenue. Agents make you faster. Automations make you scalable. Most people stop at chat. The income ceiling rises dramatically when you reach automation.</p>
</div>

<h3>MCP — The Protocol That Connects Everything</h3>
<p>Model Context Protocol (MCP) is how AI models connect to external tools and data in 2027. Think of it as USB-C for AI — a standard connector that lets any compatible model use any compatible tool. If you're building AI services for clients, you'll encounter MCP when connecting Claude to databases, CRMs, or internal systems.</p>`
      },
      {
        id: 4,
        title: "Your Reusable Skills and SOPs",
        description: "Building AI instructions that work every time without re-explaining yourself",
        duration: "20 min",
        content: `<h2>Stop Explaining Yourself Every Session</h2>
<p>The biggest time waster in AI work is re-briefing the model every time. In 2027, the solution is reusable skills and SOPs — structured instruction sets that travel with you.</p>

<h3>Claude Projects: Your Persistent Context Layer</h3>
<p>Each Claude Project has its own instructions, uploaded files, and conversation memory. Here is how to set up a project for a client or income stream:</p>
<ol>
<li>Go to claude.ai → New Project</li>
<li>Name it after the client or use case</li>
<li>Write a Project Instructions document covering: who you are, what the client does, their brand voice, their audience, any rules and constraints</li>
<li>Upload relevant files: past outputs, brand guidelines, product info</li>
</ol>
<p>Every conversation in that project inherits this context automatically.</p>

<h3>CLAUDE.md for Coding Projects</h3>
<p>For Claude Code, a CLAUDE.md file in your project root acts like a permanent briefing document. Claude Code reads it at the start of every session:</p>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
# Project: [Name]
## Stack
- Next.js 14, TypeScript, Tailwind
- Prisma + PostgreSQL
- Stripe for payments

## Rules
- Never break existing auth
- All API routes need force-dynamic
- Always test before marking done

## Key files
- lib/course-config.ts — central config
- app/api/ — all API routes
</pre>

<h3>SOPs for Recurring Tasks</h3>
<p>Write a short SOP (Standard Operating Procedure) for every task you do more than three times. Format:</p>
<ol>
<li>Task name</li>
<li>Trigger (what starts this task)</li>
<li>Exact prompt template with [PLACEHOLDERS]</li>
<li>Output format expected</li>
<li>Quality check criteria</li>
</ol>
<p>Store these in a Notion database or Google Doc. When you run an automation, the SOP becomes the Claude prompt template in Make or n8n.</p>`
      },
      {
        id: 5,
        title: "Controlling Costs and Avoiding Subscription Creep",
        description: "Build a lean stack that scales without bleeding money",
        duration: "12 min",
        content: `<h2>The Tool Budget That Makes Sense</h2>
<p>The average person serious about AI income pays £80–200/month in tool subscriptions. Much of that is waste. Here is how to audit and fix it.</p>

<h3>API Pricing (Q4 2026)</h3>
<table class="w-full text-left mt-4">
<tr class="border-b border-gray-700"><th class="pb-2">Model</th><th class="pb-2">Input</th><th class="pb-2">Output</th></tr>
<tr class="border-b border-gray-700"><td class="py-2">Claude Sonnet 5</td><td>$3/1M tokens</td><td>$15/1M tokens</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Claude Fable 5.1</td><td>$15/1M tokens</td><td>$75/1M tokens</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">GPT-6</td><td>$4/1M tokens</td><td>$16/1M tokens</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Gemini 3.8 Pro</td><td>Free (personal)</td><td>Free (personal)</td></tr>
<tr><td class="py-2">Local (Ollama)</td><td>£0</td><td>£0</td></tr>
</table>

<h3>The Minimum Viable Stack (£30–40/month)</h3>
<ul>
<li><strong>Claude Pro ($20/month):</strong> your primary reasoning and writing tool</li>
<li><strong>Perplexity free tier:</strong> research and fact-checking</li>
<li><strong>Make free tier:</strong> first automations (1,000 ops/month)</li>
<li><strong>Canva free tier:</strong> visuals and design</li>
<li><strong>Ollama (free):</strong> local models for privacy-sensitive tasks</li>
</ul>

<h3>The 20-Minute Tool Audit</h3>
<ol>
<li>List every AI subscription in a spreadsheet with monthly cost</li>
<li>For each tool, write its single most important use case in one sentence. Can't? Cancel it.</li>
<li>Did you use it in the last 7 days? No? Cancel it.</li>
<li>Do two tools do the same thing? Keep the better one.</li>
<li>Set a tool freeze: no new subscriptions for 30 days</li>
</ol>

<div class="bg-yellow-900/30 p-4 rounded-lg mt-6">
<h4>⚠️ When Selling AI Services</h4>
<p>Factor in 3–5× your API costs for margin, failures, and overruns. A workflow costing you $2 in API calls should deliver $10+ in value to the client.</p>
</div>`
      }
    ]
  },
  {
    id: 2,
    title: "AI Content and Video",
    description: "Build an AI-assisted content operation — channels, short-form, affiliate income — without showing your face if you don't want to.",
    outcome: "Students have a working 7-day content pipeline and their first published piece.",
    icon: "Layers",
    lessons: [
      {
        id: 1,
        title: "Finding Topics With Real Demand",
        description: "Research that leads to views — not guesses",
        duration: "20 min",
        content: `<h2>The Right Topic Before the Right Script</h2>
<p>Most AI content fails not because of the writing quality but because nobody was searching for it. Topic research is the highest-leverage step in content creation.</p>

<h3>The Research Stack (2027)</h3>
<ul>
<li><strong>YouTube search autocomplete:</strong> type your topic and watch what YouTube suggests — these are real searches</li>
<li><strong>VidIQ or TubeBuddy:</strong> shows search volume and competition for YouTube keywords</li>
<li><strong>Perplexity:</strong> "What are people asking about [topic] right now?" — pulls from real forums and recent content</li>
<li><strong>Answer the Public:</strong> maps all the question variants around a keyword</li>
<li><strong>Reddit and Quora:</strong> real people, real pain points, real language to use in your scripts</li>
</ul>

<h3>The Winning Topic Formula</h3>
<p>Look for the overlap between three things:</p>
<ol>
<li><strong>High search demand:</strong> people are actively looking for this</li>
<li><strong>Low quality competition:</strong> the existing content is weak, outdated, or misses the point</li>
<li><strong>Monetisable audience:</strong> the viewer has a problem worth solving and the means to pay for a solution</li>
</ol>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6">
<h4>📋 Action: Your First 10 Topic Candidates</h4>
<ol class="mt-2 space-y-2">
<li>Go to YouTube and search your broad topic — note the autocomplete suggestions</li>
<li>Sort results by "This month" and look for videos under 50K views that have strong engagement</li>
<li>Open Perplexity: "What questions are beginners asking about [topic] in 2027?"</li>
<li>Go to Reddit.com/r/[your niche] and sort by "Hot" — read the titles and note recurring themes</li>
<li>Build a shortlist of 10 topics. Rank them by: demand × ease of production</li>
</ol>
</div>`
      },
      {
        id: 2,
        title: "Scripting With AI — Three Frameworks",
        description: "The script structures that drive views and watch time",
        duration: "22 min",
        content: `<h2>AI Makes Writing Faster. Structure Makes It Work.</h2>
<p>A well-structured script is the single biggest driver of watch time. Here are three frameworks, each suited to a different type of content.</p>

<h3>Framework 1: The Problem-Solution Arc</h3>
<p>Best for: tutorial content, how-to guides, explainers</p>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
Hook (0:00–0:20): State the specific problem and who has it
Agitation (0:20–1:00): Why does it matter? What's at stake?
Setup (1:00–2:00): Quick credibility and what you'll cover
Solution (2:00–8:00): Step-by-step, screen-record heavy
Payoff (8:00–9:00): Result + what to do next
CTA (9:00–9:20): Subscribe / related video / product link
</pre>

<h3>Framework 2: The Comparison Frame</h3>
<p>Best for: tool comparisons, product reviews, "which is better" content</p>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
Hook: Bold claim that one option wins, or that the answer is surprising
Setup: What are we comparing and why does it matter?
Option A: Genuine strengths and real limitations
Option B: Genuine strengths and real limitations
Head-to-head: Same task, both options, real result
Verdict: Clear recommendation with conditions
</pre>

<h3>Framework 3: The Revelation Arc</h3>
<p>Best for: opinion content, trend analysis, "what's actually happening" videos</p>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
Hook: Challenge a widespread assumption
Evidence: Show why the assumption is wrong or incomplete
The real picture: What's actually happening
Implications: What this means for the viewer
Action: What they should do differently
</pre>

<h3>Claude Prompt for a Full Script</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
You are writing a YouTube script for the AI Money Maniac channel.
Topic: [TOPIC]
Framework: [CHOOSE ONE ABOVE]
Target length: 9–12 minutes (approx 1,400–1,800 words spoken)
Tone: Direct, practical, no hype. The host has done the work.
Audience: People trying to build income with AI — beginners to intermediate.
Include: Screen-record cues in [brackets], natural pauses marked with [BEAT].
Do not include: Generic AI disclaimers, excessive throat-clearing in the intro.
Output: Full script, ready to read.
</pre>`
      },
      {
        id: 3,
        title: "AI Video and Avatar Tools in 2027",
        description: "What's actually worth using for faceless and hybrid content",
        duration: "20 min",
        content: `<h2>The Video Stack That's Worth Paying For</h2>
<p>AI video quality crossed a threshold in late 2026. Clips generated today are frequently indistinguishable from real footage for B-roll purposes. Here is what actually matters for content creators.</p>

<h3>For Faceless Channels</h3>
<ul>
<li><strong>HeyGen:</strong> AI avatar with your cloned voice. Record yourself once, then create videos in minutes from a script. Best for talking-head educational content. ($29/month)</li>
<li><strong>Synthesia:</strong> Enterprise-grade, very polished avatars. Used by brands and corporates. Best if you're selling video production as a service. ($22/month)</li>
<li><strong>Runway Gen-3:</strong> Best cinematic quality for b-roll and creative clips. Text-to-video and image-to-video. ($15/month)</li>
<li><strong>Kling 2.0:</strong> Strong human motion, realistic lifestyle footage. Free credits daily. ($8/month Pro)</li>
</ul>

<h3>For Hybrid (Your Face + AI B-roll)</h3>
<ul>
<li>Record yourself on a phone or webcam — quality matters less than content quality</li>
<li>Use Runway or Kling to generate b-roll for the visual breaks</li>
<li>Use Ideogram 3 for any on-screen graphics needing readable text</li>
<li>Edit in CapCut (free) or DaVinci Resolve (free)</li>
</ul>

<div class="bg-yellow-900/30 p-4 rounded-lg mt-6">
<h4>⚠️ Disclosure Required</h4>
<p>Any AI-generated avatar or voice clone used in content must be disclosed. Most platforms now require this. Include a brief disclosure in your video description and verbally where appropriate. This is both a legal requirement in many jurisdictions and the right thing to do.</p>
</div>

<h3>For Short-Form Content</h3>
<ul>
<li><strong>Pika 2.0:</strong> Fastest turnaround for short clips ($8/month)</li>
<li><strong>CapCut AI:</strong> Auto-captions, auto-reframe for different aspect ratios — essential for repurposing</li>
<li>One long-form video can produce 5–8 Shorts/Reels with 30 minutes of editing</li>
</ul>`
      },
      {
        id: 4,
        title: "The 7-Day Content Pipeline",
        description: "Build once — produce consistently, every week, without burning out",
        duration: "25 min",
        content: `<h2>From Random Posting to Consistent System</h2>
<p>Consistency beats quality in the early stages of a channel. A system that produces good-enough content every week beats occasional great content with long gaps.</p>

<h3>The Weekly Pipeline</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
Monday — Research (45 min)
→ Perplexity: recent developments in your niche
→ Pick topic from your backlog (built in Notion or Sheets)
→ Claude: generate outline

Tuesday — Script (30 min)
→ Claude writes full script from outline
→ You read, edit, and add your voice
→ Flag any screen-record sections

Wednesday — Production (60–90 min)
→ Record screen sections
→ Record talking head (if applicable)
→ Generate b-roll via Runway or Kling for visual breaks

Thursday — Edit (60 min)
→ CapCut or DaVinci Resolve
→ Add captions (CapCut auto-captions)
→ Add music (Artlist or Epidemic Sound)

Friday — Publish and Repurpose (30 min)
→ Upload to YouTube with Claude-written description, tags and chapters
→ Clip 3 Shorts/Reels from the video
→ Claude writes LinkedIn post + 3 tweets from the script
→ Schedule via Buffer
</pre>

<h3>The Make Automation Layer</h3>
<p>Once the pipeline is working manually, automate the distribution layer in Make:</p>
<ul>
<li>Trigger: new YouTube video published (YouTube webhook)</li>
<li>Claude: extract key points and write LinkedIn post, Twitter thread, newsletter snippet</li>
<li>Buffer: schedule each piece for optimal posting times</li>
<li>Google Sheets: log video slug, title, and performance metrics</li>
</ul>

<h3>Monetisation Paths for Content</h3>
<table class="w-full text-left mt-4">
<tr class="border-b border-gray-700"><th class="pb-2">Source</th><th class="pb-2">When It Kicks In</th><th class="pb-2">Typical Range</th></tr>
<tr class="border-b border-gray-700"><td class="py-2">YouTube AdSense</td><td>1K subs + 4K hours</td><td>£2–8 per 1K views</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Affiliate links</td><td>Day 1</td><td>20–40% recurring</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Sponsorships</td><td>~5K subs</td><td>£50–500 per 1K views</td></tr>
<tr><td class="py-2">Own products</td><td>Day 1 (with audience)</td><td>Unlimited</td></tr>
</table>`
      }
    ]
  },
  {
    id: 3,
    title: "AI Service Businesses",
    description: "Build and sell AI-powered services to businesses — websites, content, automations, chatbots, lead generation.",
    outcome: "Students have one packaged, demonstrable, sellable service and their outreach underway.",
    icon: "Briefcase",
    lessons: [
      {
        id: 1,
        title: "Ten AI Services Businesses Actually Buy",
        description: "What sells, what pricing works, and how to pick your first one",
        duration: "20 min",
        content: `<h2>Start Where the Money Already Is</h2>
<p>The mistake most people make is inventing an AI service and then looking for clients. Go the other way — find where businesses are already spending money and offer an AI-powered version of that.</p>

<h3>The Ten Services (with Real Price Ranges)</h3>
<ol>
<li><strong>Website design and copy (AI-assisted):</strong> £1,200–3,500 per site. Fast turnaround is your edge over traditional agencies.</li>
<li><strong>AI chatbot setup and training:</strong> £400–2,000 setup + £80–200/month management. Chatbase, Voiceflow or custom API builds.</li>
<li><strong>SEO content writing:</strong> £80–250 per article. Use AI for research and draft; human editing for quality and accuracy.</li>
<li><strong>Social media content packages:</strong> £400–1,200/month. 30 posts, captions, hashtags, scheduling.</li>
<li><strong>Email sequence writing:</strong> £300–800 per sequence. Onboarding, nurture, sales.</li>
<li><strong>AI outbound lead generation:</strong> £2,000–4,000 setup + £1,000–2,500/month management.</li>
<li><strong>Make/n8n automation builds:</strong> £500–3,000 per workflow + £200–500/month maintenance.</li>
<li><strong>AI video production:</strong> £300–1,000 per video. HeyGen avatars, Runway b-roll, scripted by Claude.</li>
<li><strong>Business intelligence reports:</strong> £500–2,000 per report. Competitor analysis, market research, automated weekly briefings.</li>
<li><strong>AI consulting and training:</strong> £800–2,000 per day. Help businesses figure out where AI applies in their operations.</li>
</ol>

<h3>How to Pick Your First Service</h3>
<p>Choose based on three criteria:</p>
<ul>
<li><strong>Can you demo it in 30 minutes?</strong> If you can't show a prospect the output quickly, it's harder to sell.</li>
<li><strong>Do you understand the buyer's world?</strong> A service for estate agents is easier to sell if you understand their pain points.</li>
<li><strong>Can you deliver it consistently?</strong> Don't promise a service you've never actually built end-to-end.</li>
</ul>`
      },
      {
        id: 2,
        title: "Finding and Approaching Your First Clients",
        description: "Outreach that isn't spam — practical prospecting for AI services",
        duration: "25 min",
        content: `<h2>The Fastest Path to a Paying Client</h2>
<p>Cold outreach done well converts 3–8%. Cold outreach done poorly converts 0.1%. The difference is specificity and proof.</p>

<h3>Finding Prospects</h3>
<ul>
<li><strong>Google Maps method:</strong> Search "[business type] [your city]". Click each listing. Check if they have a website or if it looks outdated. Build a list of 50.</li>
<li><strong>LinkedIn method:</strong> Filter by industry, company size (10–50 employees is ideal for services), and location. Connect with decision-makers.</li>
<li><strong>Apollo.io:</strong> Build lists by ICP (Ideal Customer Profile) — industry, company size, revenue, job title. Free plan gives 50 contacts/month.</li>
</ul>

<h3>The Cold Email That Works</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
Subject: [Something specific about their business]

Hi [First Name],

I noticed [specific observation about their business — their 
website, a post they made, something real].

I help [business type] [specific outcome]. For example, I recently 
[brief, specific result for a similar business].

Worth a quick 15-minute call to see if I could do the same for you?

[Your name]
</pre>
<p>Keep it under 80 words. The specificity is what makes it work. Use Claude to write personalised opening lines at scale once you have a list.</p>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6">
<h4>📋 Action: Send Your First 10 Emails This Week</h4>
<ol class="mt-2 space-y-2">
<li>Build a list of 10 businesses using the Google Maps method</li>
<li>Find each owner's email (company website, LinkedIn, or Hunter.io)</li>
<li>Write a personalised email for each — Claude prompt: "Write a cold email under 80 words offering [service] to [business type]. Reference [specific observation]. No generic openers."</li>
<li>Send from your personal email, not a bulk tool</li>
<li>Follow up once at 3 days if no reply</li>
</ol>
</div>

<h3>Pricing Conversations</h3>
<p>Always ask before you quote: "What would it be worth to your business if [problem] was solved?" The answer tells you what price range the client is thinking in — and often it's higher than what you were going to charge.</p>`
      },
      {
        id: 3,
        title: "Building Your Demo and Proposal",
        description: "Show before you tell — the demo that closes deals",
        duration: "22 min",
        content: `<h2>The Demo is the Sales Process</h2>
<p>In AI services, showing is worth ten times more than telling. Build the demo first, then find the clients for it — not the other way around.</p>

<h3>Build a Demo Before You Have Clients</h3>
<p>Pick a hypothetical or fictional business in your target niche and build the service for them. A demo chatbot for "Manchester Plumbing Services". An AI content calendar for "Green Earth Café". This becomes your sales tool and portfolio piece.</p>

<h3>The One-Page Offer</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
FOR: [specific business type]
PROBLEM: [the specific pain you solve]
SOLUTION: [what you deliver, in plain language]
DELIVERABLES: [exact list of what they get]
TIMELINE: [realistic delivery timeline]
PRICE: [£X setup + £Y/month ongoing]
GUARANTEE: [what happens if they're not happy]
</pre>

<h3>The Proposal Structure</h3>
<ol>
<li>Their situation (show you listened on the discovery call)</li>
<li>The problem and its cost (quantify it if you can)</li>
<li>Your solution (specific, not vague)</li>
<li>What's included (exact deliverables)</li>
<li>Timeline (specific dates)</li>
<li>Investment (clear, no surprises)</li>
<li>Next step (a single clear action)</li>
</ol>

<h3>Closing Without Being Pushy</h3>
<p>After sending the proposal, schedule a 20-minute "walk through" call. Walk through it together — don't send it and wait. On the call: "Does this reflect what we discussed?" → "Are there any questions?" → "Are you happy to move forward?"</p>
<p>Silence is not rejection. Follow up after 48 hours if you hear nothing.</p>`
      },
      {
        id: 4,
        title: "From Project to Retainer",
        description: "Turn one-off work into monthly recurring income",
        duration: "18 min",
        content: `<h2>The Retainer is the Business Model</h2>
<p>One-off projects pay once. Retainers pay every month. Every service you deliver should have a natural ongoing component — maintenance, updates, reporting, fresh content — that justifies a monthly fee.</p>

<h3>The Retainer Ladder</h3>
<table class="w-full text-left mt-4">
<tr class="border-b border-gray-700"><th class="pb-2">Service</th><th class="pb-2">Setup</th><th class="pb-2">Retainer</th></tr>
<tr class="border-b border-gray-700"><td class="py-2">Website</td><td>£1,500</td><td>£100–200/month (hosting, updates)</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Chatbot</td><td>£800</td><td>£150–300/month (monitoring, retraining)</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Content</td><td>—</td><td>£600–1,500/month (4+ pieces/month)</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Lead gen system</td><td>£2,500</td><td>£1,000–2,000/month (management)</td></tr>
<tr><td class="py-2">Automation</td><td>£1,500</td><td>£300–600/month (monitoring, updates)</td></tr>
</table>

<h3>Five Retainer Clients at £800/month</h3>
<p>Five retainers at £800/month = £4,000/month. With AI doing most of the execution, your actual time per client is 4–6 hours/month. That's 20–30 hours of client work at £160–200/hour effective rate. Achievable in 3–6 months from a standing start.</p>

<h3>Client Retention</h3>
<ul>
<li>Send a monthly report — even a brief one — showing what was done and the results</li>
<li>Bring one idea or observation per month that wasn't asked for</li>
<li>Document everything so the client feels dependent on the system, not just you personally</li>
<li>Annual review call: what changed, what's next, is there more scope?</li>
</ul>`
      }
    ]
  },
  {
    id: 4,
    title: "AI Automation and Agent Systems",
    description: "Build Make and n8n workflows that run 24/7 — and sell them to businesses for recurring income.",
    outcome: "Students have one production-ready automation deployed and documented for client delivery.",
    icon: "Zap",
    lessons: [
      {
        id: 1,
        title: "Automation Fundamentals Without the Jargon",
        description: "Triggers, actions, logic and data — plainly explained",
        duration: "18 min",
        content: `<h2>Everything Is: Something Happens, Then Something Else Happens</h2>
<p>Every automation, no matter how complex, is just a chain of: trigger → actions. Once you internalise this, every workflow becomes readable.</p>

<h3>The Four Components</h3>
<ul>
<li><strong>Trigger:</strong> the event that starts the workflow. New email. New form submission. Scheduled time. New row in a spreadsheet. New Stripe payment.</li>
<li><strong>Action:</strong> something the automation does. Send an email. Create a document. Call an API. Ask Claude something. Write to a database.</li>
<li><strong>Logic:</strong> conditions that change what happens. If the email is marked urgent, route it differently. If the revenue is over £1,000, notify the CEO.</li>
<li><strong>Data:</strong> the information that moves through the workflow. The email body. The customer name. The payment amount. The AI response.</li>
</ul>

<h3>Make vs n8n vs Zapier — The Honest Comparison</h3>
<table class="w-full text-left mt-4">
<tr class="border-b border-gray-700"><th class="pb-2"></th><th class="pb-2">Make</th><th class="pb-2">n8n</th><th class="pb-2">Zapier</th></tr>
<tr class="border-b border-gray-700"><td class="py-2">Best for</td><td>Complex client work</td><td>High volume, self-hosted</td><td>Simple, quick wins</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Claude integration</td><td>Native module</td><td>HTTP node</td><td>Native module</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Pricing</td><td>From $9/month</td><td>Free (self-host)</td><td>From $19.99/month</td></tr>
<tr><td class="py-2">Learning curve</td><td>Medium</td><td>Medium-High</td><td>Low</td></tr>
</table>
<p class="mt-3"><strong>Start with Make.</strong> It has the best balance of power and usability, and a native Claude integration that requires no API setup.</p>`
      },
      {
        id: 2,
        title: "Five Automations That Clients Will Pay For",
        description: "Real builds that solve real business problems",
        duration: "35 min",
        content: `<h2>Build These, Sell These</h2>
<p>Each of these is a real workflow you can build in Make in under 3 hours, test, and deliver to a client.</p>

<h3>Build 1: Email Triage and Classification</h3>
<p><strong>Value:</strong> saves 1–2 hours/day for busy business owners</p>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
Trigger: New email arrives in Gmail
↓
Claude: "Classify as URGENT/IMPORTANT/NEWSLETTER/RECEIPT.
Email: [subject] | [sender] | [body preview]"
↓
If URGENT → apply label "AI-Urgent" + Slack alert
If IMPORTANT → apply label "AI-Important"
If NEWSLETTER → archive
If RECEIPT → apply label "Receipts" + log to Google Sheets
</pre>

<h3>Build 2: Content Repurposing Pipeline</h3>
<p><strong>Value:</strong> one piece of content becomes six, automatically</p>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
Trigger: New YouTube video published (webhook)
↓
Claude: "Write a LinkedIn post (300 words), a Twitter thread
(5 tweets), and an Instagram caption (150 words) based
on this video transcript: [transcript]"
↓
Buffer: schedule each post for optimal times
Google Sheets: log video + content produced
</pre>

<h3>Build 3: Lead Enrichment and CRM Update</h3>
<p><strong>Value:</strong> sales teams get pre-qualified, researched leads instead of raw contacts</p>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
Trigger: New row added to CRM or Google Sheet (new lead)
↓
Apollo.io API: enrich with company data, LinkedIn, revenue
↓
Claude: "Score this lead 1–10 and write 3 personalised
talking points based on their profile: [enrichment data]"
↓
CRM: update lead record with score and talking points
Slack: notify sales rep with summary
</pre>

<h3>Build 4: Weekly Business Intelligence Report</h3>
<p><strong>Value:</strong> clients get a weekly briefing without asking for it</p>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
Trigger: Every Friday at 4pm
↓
Stripe API: revenue this week vs last week
Google Analytics: traffic and conversions
Google News: "[client industry] news this week"
↓
Claude: "Write a concise weekly business summary covering:
revenue, key traffic changes, and 3 industry developments
the business owner should know about. Under 300 words."
↓
Gmail: send formatted report to client
</pre>

<h3>Build 5: Google Review Auto-Response</h3>
<p><strong>Value:</strong> local businesses respond to every review professionally, automatically</p>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
Trigger: New Google review detected (Make Google module)
↓
Claude: "Write a professional, warm response to this
Google review for [business name]. If positive, thank them
specifically. If negative, acknowledge and offer to resolve.
Under 80 words. Do not be generic."
↓
Email to owner: "Approve this response before posting?"
↓
On approval: post response via Google API
</pre>

<h3>Selling These</h3>
<p>Build 1–3 for a real business in your network (free, in exchange for a testimonial). Then sell the same builds to similar businesses. Charge £500–1,500 setup per automation + £200–500/month management.</p>`
      },
      {
        id: 3,
        title: "Documenting and Delivering Automations to Clients",
        description: "How to hand over work professionally — and why documentation is what justifies the retainer",
        duration: "15 min",
        content: `<h2>Delivery Is Where Amateurs Lose Clients</h2>
<p>A working automation that's poorly documented will lose a client at the first thing that goes wrong. A well-documented system makes you indispensable.</p>

<h3>The Delivery Package</h3>
<ol>
<li><strong>Video walkthrough (5–10 min):</strong> Record your screen walking through exactly what the automation does, step by step. Use Loom (free). Client keeps this forever.</li>
<li><strong>Written documentation (1 page):</strong> What the automation does. What triggers it. What it outputs. What to do if something fails. Contact details.</li>
<li><strong>Test report:</strong> Screenshots or logs showing 5 successful test runs with real or realistic data.</li>
<li><strong>Error notification setup:</strong> Make has built-in error alerts — set these up to email you (not the client) when something fails.</li>
</ol>

<h3>Why Documentation Justifies the Retainer</h3>
<p>When you document the system properly, the client understands what they have — and they know they'd lose it if something broke and you weren't there to fix it. That is what justifies £200–500/month for monitoring and maintenance.</p>

<h3>What to Monitor</h3>
<ul>
<li>Make execution logs — check weekly, look for errors</li>
<li>API rate limits — especially for automations hitting Google, Stripe or social platforms</li>
<li>Output quality — sample 3–5 outputs per week to make sure Claude's results are still good</li>
<li>Costs — if API usage spikes, investigate before it hits the client's budget</li>
</ul>`
      }
    ]
  },
  {
    id: 5,
    title: "AI Monetisation Models",
    description: "The full map of income paths — freelancing, agency, SaaS, digital products, affiliate — with honest starting points for each.",
    outcome: "Students choose one primary income model and take the first concrete action towards it.",
    icon: "TrendingUp",
    lessons: [
      {
        id: 1,
        title: "Freelancing With AI as Your Leverage",
        description: "Position and price for the AI-enabled market — not against it",
        duration: "20 min",
        content: `<h2>AI Doesn't Replace Freelancers. It Restructures the Market.</h2>
<p>Freelancers who are losing work in 2027 are those who refused to adapt. The ones doing well have repositioned — they're not competing on speed, they're competing on outcome quality and specialist knowledge that AI alone can't deliver.</p>

<h3>What's in Demand in 2027</h3>
<ul>
<li>AI automation builds (Make/n8n) — £500–3,000/project</li>
<li>AI service packaging and delivery — £800–2,500/month retainer</li>
<li>Claude Code builds for non-developers — £500–3,000/app</li>
<li>AI consulting — helping businesses identify where AI applies — £800–2,000/day</li>
<li>AI content strategy and production — £600–1,500/month</li>
</ul>

<h3>Platform Strategy</h3>
<ul>
<li><strong>Upwork:</strong> Best for getting started and building reviews. Competitive, but AI skills are in genuine demand. Set rate at £60–80/hour to start.</li>
<li><strong>LinkedIn:</strong> Best for consulting and higher-value work. Positioning content is your funnel.</li>
<li><strong>Direct outreach:</strong> Best ROI once you have proof of results. No platform fees.</li>
</ul>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6">
<h4>📋 Launch Your Profile This Week</h4>
<ol class="mt-2 space-y-2">
<li>Claude prompt: "Write an Upwork profile title and overview for an AI automation specialist who builds Make and n8n workflows and AI chatbots. Focus on business outcomes, not tools. Under 500 characters."</li>
<li>Add 3 portfolio items — even practice builds count</li>
<li>Apply to 5 jobs/day with personalised proposals (Claude writes the first draft)</li>
</ol>
</div>`
      },
      {
        id: 2,
        title: "Building an AI Agency",
        description: "Scale beyond your personal capacity with AI as your delivery infrastructure",
        duration: "22 min",
        content: `<h2>The AI-First Agency Model</h2>
<p>An agency lets you earn more than your personal hours allow. The AI-first version has very different economics to a traditional agency — lower headcount, higher margin, faster delivery.</p>

<h3>The Structure</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
You (Founder)
├── Sales and client relationships
├── AI delivery systems
│   ├── Make/n8n automations (content, reporting)
│   ├── Claude Code for custom builds
│   └── Agents running on schedule
└── Small human team
    ├── 1–2 editors or QA (part-time contractors)
    └── VA for admin (optional)
</pre>

<h3>Realistic Growth Path</h3>
<ol>
<li><strong>Months 1–3:</strong> Solo + AI. Target: £3–5K/month. Prove the delivery model.</li>
<li><strong>Months 3–9:</strong> Add 1–2 contractors for QA and admin. Target: £8–15K/month.</li>
<li><strong>Months 9–18:</strong> Systematise everything. Target: £20–40K/month.</li>
<li><strong>Month 18+:</strong> Hire ops manager. Focus on sales and new service lines.</li>
</ol>

<h3>The Biggest Mistake</h3>
<p>Scaling before delivery is solid. Get to £5K/month reliably — on time, high quality, low complaints — before adding complexity. One unhappy client from rushed delivery costs more than a month of growth.</p>`
      },
      {
        id: 3,
        title: "Digital Products and Affiliate Income",
        description: "Create once, sell repeatedly — the case for passive income through products",
        duration: "22 min",
        content: `<h2>Products That Sell Without Active Delivery</h2>
<p>Digital products have 80–95% margins once built. AI compresses creation time from weeks to days. The economics are extraordinary — the constraint is audience and distribution, not production.</p>

<h3>Products Worth Building in 2027</h3>
<ul>
<li><strong>Prompt and template packs:</strong> curated, tested, for specific use cases — £15–97</li>
<li><strong>Notion or Airtable systems:</strong> business systems ready to use — £27–97</li>
<li><strong>Mini-courses (under 2 hours):</strong> specific skill, fast outcome — £97–297</li>
<li><strong>AI tool review and comparison site:</strong> affiliate-monetised, content-driven — ongoing income</li>
</ul>

<h3>Top Affiliate Programmes in 2027</h3>
<table class="w-full text-left mt-4">
<tr class="border-b border-gray-700"><th class="pb-2">Programme</th><th class="pb-2">Commission</th><th class="pb-2">Type</th></tr>
<tr class="border-b border-gray-700"><td class="py-2">Make</td><td>20%</td><td>Recurring</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Surfer SEO</td><td>25%</td><td>Recurring</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Chatbase</td><td>30%</td><td>Recurring</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">HeyGen</td><td>30%</td><td>Recurring</td></tr>
<tr><td class="py-2">Notion</td><td>50% first year</td><td>One-time</td></tr>
</table>
<p class="mt-3 text-gray-500 text-xs">Affiliate links must be disclosed in every piece of content where they appear. See Affiliate Disclosure policy.</p>

<h3>The Compound Effect</h3>
<p>One customer on a recurring affiliate at £6/month commission seems small. 200 customers = £1,200/month from one programme, passively, from SEO content you wrote once. That's the model — it just takes 12–18 months to build.</p>`
      },
      {
        id: 4,
        title: "Micro-SaaS — Build a Tool, Sell a Subscription",
        description: "The mechanics of validating and shipping a small software product in 2027",
        duration: "28 min",
        content: `<h2>One Problem, One Tool, £9–49/Month</h2>
<p>Micro-SaaS products solve one specific problem for one specific audience. AI makes building them faster than ever — from idea to paying customers in under a month is realistic in 2027.</p>

<h3>Finding the Idea</h3>
<ul>
<li>Search Reddit: "I wish there was a tool that..." in relevant subreddits</li>
<li>Look at AppSumo — what tools are selling? What's missing?</li>
<li>Think about repetitive tasks in services you're already delivering — could this be a product?</li>
<li>Look at your own frustrations — if you have the problem, others do too</li>
</ul>

<h3>Validate Before Building</h3>
<ol>
<li>Build a landing page in Carrd.co (free) — describe the tool, show a price, add email capture</li>
<li>Post in relevant communities: "Building a tool for [specific pain point]. Would you pay £X/month?" Get 10 genuine yes answers.</li>
<li>Get 50 email signups before writing code. If you can't get 50 interested people, reconsider the idea.</li>
</ol>

<h3>Build Stack (No Developer Background Needed)</h3>
<ul>
<li><strong>App:</strong> Bolt.new or Lovable — describe in English, get working code</li>
<li><strong>Database and auth:</strong> Supabase (free tier is generous)</li>
<li><strong>Payments:</strong> Stripe (Bolt and Lovable can integrate this directly)</li>
<li><strong>Hosting:</strong> Netlify or Vercel (both have free tiers)</li>
<li><strong>Complex features:</strong> Claude Code for anything the no-code tools can't handle</li>
</ul>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6">
<h4>📋 Validated Micro-SaaS Gaps (Q4 2026)</h4>
<ul class="mt-2 space-y-1 text-sm">
<li>AI Google Review responder — drafts responses for owner approval</li>
<li>Meeting notes → Notion/Slack with action item extraction</li>
<li>Content repurposer: YouTube transcript → blog + social posts</li>
<li>AI proposal generator for specific freelance niches</li>
<li>Job description AI scorer — "How AI-proof is this role?"</li>
</ul>
</div>`
      }
    ]
  },
  {
    id: 6,
    title: "Mastering Claude Code",
    description: "Build real products using Claude Code — Anthropic's terminal-based coding agent — without being a developer.",
    outcome: "Students have built and deployed at least one working product using Claude Code.",
    icon: "Terminal",
    lessons: [
      {
        id: 1,
        title: "What Claude Code Is and Why It's Different",
        description: "Understanding the tool that's changing how software gets built",
        duration: "15 min",
        content: `<h2>Claude Code: An Agent, Not a Chat Window</h2>
<p>Claude Code is not the same as Claude.ai — that's a chat interface. Claude Code lives in your terminal and operates at a fundamentally different level. It reads your entire project, runs commands, edits files across multiple folders, installs packages, runs tests, and commits changes — all autonomously.</p>

<h3>Why Developers Reach for It</h3>
<p>Across developer communities, Claude Code is consistently described as the model to escalate to when Cursor and Codex fail on hard problems. It doesn't just generate code — it reasons about your architecture, understands your constraints, and explains what it did and why.</p>

<h3>What It Does That Others Don't</h3>
<ul>
<li><strong>Whole-codebase understanding:</strong> not just the current file — the entire project</li>
<li><strong>Autonomous execution:</strong> runs terminal commands, installs dependencies, runs tests</li>
<li><strong>CLAUDE.md:</strong> a project briefing file it reads every session — eliminates re-explaining</li>
<li><strong>Skills system:</strong> extend capabilities with pre-built instruction files</li>
<li><strong>MCP support:</strong> connect to databases, APIs and web services as tools</li>
</ul>

<h3>Cost Reality</h3>
<p>Claude Code uses your Anthropic API key and charges per token. A typical session costs £0.50–3.00 depending on project size. Set a budget alert at console.anthropic.com. Start with £20 in credits.</p>

<h3>Who This Module Is For</h3>
<p>You don't need to be a developer. You need to be able to describe what you want precisely, review the output critically, and iterate. That's a communication skill — and it's learnable.</p>`
      },
      {
        id: 2,
        title: "Installing Claude Code and Your First Session",
        description: "From zero to running in 15 minutes",
        duration: "15 min",
        content: `<h2>Installation (Mac, Windows, Linux)</h2>

<h3>Prerequisites</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
# Mac: install Homebrew first (brew.sh), then:
brew install node

# Windows: download Node.js LTS from nodejs.org

# Verify:
node --version  # should show v18 or higher
</pre>

<h3>Install Claude Code</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">npm install -g @anthropic-ai/claude-code</pre>

<h3>Get an API Key</h3>
<ol>
<li>Go to console.anthropic.com → create account</li>
<li>Go to API Keys → create new key</li>
<li>Add credits ($20 to start)</li>
<li>Copy the key — only shown once</li>
</ol>

<h3>Start Your First Session</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
cd ~/path/to/your/project
claude
</pre>
<p>First run opens a browser to authenticate. After that it starts directly. Try:</p>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
> Look at this project and explain what it does in plain English
> Add a dark mode toggle to the header
> Find the bug causing users to get logged out and fix it
</pre>

<h3>Key Commands</h3>
<ul>
<li><strong>/help</strong> — all available commands</li>
<li><strong>/clear</strong> — clear conversation history and start fresh</li>
<li><strong>Ctrl+C</strong> — stop the current action</li>
</ul>`
      },
      {
        id: 3,
        title: "The CLAUDE.md File — Your Permanent Project Briefing",
        description: "The single highest-leverage thing you can do in Claude Code",
        duration: "15 min",
        content: `<h2>Never Re-Explain Your Project Again</h2>
<p>CLAUDE.md is a markdown file in your project root that Claude Code reads at the start of every session. It's the difference between Claude Code knowing your project and starting from scratch each time.</p>

<h3>What to Put In It</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
# Project: [Your App Name]

## What This Is
[One paragraph description of the product and who it's for]

## Tech Stack
- Next.js 14, TypeScript, Tailwind CSS
- Prisma + PostgreSQL (Neon hosted)
- NextAuth with Google OAuth
- Stripe for payments
- Deployed on Netlify

## Key Files
- lib/course-config.ts — all pricing and product config
- lib/course-data.ts — all curriculum content
- app/api/ — all API routes (all must be force-dynamic)
- components/ — reusable UI components

## Rules
- Never break existing authentication flows
- All API routes must export: const dynamic = 'force-dynamic'
- Always maintain TypeScript types strictly
- Test changes before marking complete
- Commit with descriptive messages after each significant change

## Current Status
[What's working, what's in progress, known issues]
</pre>

<h3>Keeping It Updated</h3>
<p>Update CLAUDE.md whenever something significant changes — new dependency, new route, new database model, architectural decision. Treat it like a living document that a new team member would read on day one.</p>

<h3>The Result</h3>
<p>With a good CLAUDE.md, you can open Claude Code in any project and immediately say "Add a progress bar to the lesson page" without any preamble. Claude Code already knows the stack, the rules, and the context.</p>`
      },
      {
        id: 4,
        title: "Building Real Projects With Claude Code",
        description: "Practical walkthroughs for shipping sellable products",
        duration: "25 min",
        content: `<h2>From Description to Deployed</h2>
<p>Three real project walkthroughs. The pattern is the same each time: be specific, constrain the scope, review the output, commit, repeat.</p>

<h3>Project 1: A Niche AI SaaS Tool</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
Session 1 — Scaffold:
"Create a new Next.js 14 project with TypeScript, 
Tailwind and shadcn/ui. Call it 'review-responder'."

Session 2 — Core feature:
"Build a single-page app where users paste a Google review
and click Generate Response. Call the Anthropic API 
(Claude Sonnet 5) to generate a professional personalised
response. Clean dark design."

Session 3 — Auth and payments:
"Add NextAuth with Google sign-in. Add Stripe Checkout.
Users get 5 free responses then must subscribe for £9/month."

Session 4 — Deploy:
"Set up for Netlify deployment. Create netlify.toml.
List all environment variables I need to configure."
</pre>

<h3>Project 2: Add a Feature to an Existing App</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
"This is a Next.js course platform with Prisma and NextAuth.
Users complete lessons tracked in LessonProgress table.

Add a dashboard section showing:
- Total lessons completed / total
- Per-module progress as a visual bar
- Continue where you left off button

Match the existing dark design. Don't modify the database schema."
</pre>

<h3>Tips for Non-Developers</h3>
<ul>
<li><strong>Ask for explanations:</strong> "Explain what you just did in plain English" after every change</li>
<li><strong>Test everything:</strong> "How do I test that this works?" after every change</li>
<li><strong>Commit often:</strong> "Commit the current state with a descriptive message" — creates restore points</li>
<li><strong>One thing at a time:</strong> small, reviewable steps beat big rewrites</li>
<li><strong>When something breaks:</strong> "Something broke. Here's the error: [paste error]. What happened and how do I fix it?"</li>
</ul>`
      },
      {
        id: 5,
        title: "Claude Code Dispatch — Parallel Agents for Complex Projects",
        description: "Run multiple Claude Code agents simultaneously when one agent isn't enough",
        duration: "18 min",
        content: `<h2>When One Agent Isn't Enough</h2>
<p>For larger projects, Claude Code Dispatch lets you run multiple agents in parallel — one on the frontend, one on the backend, one writing tests — all simultaneously. Available on Claude Max and Team plans.</p>

<h3>When to Use Dispatch</h3>
<ul>
<li>Tasks are independent of each other (don't depend on each other's output)</li>
<li>You want to explore multiple solutions simultaneously</li>
<li>Running tests or checks in the background while working on something else</li>
</ul>

<h3>Example Parallel Session</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
Agent 1 — Frontend:
"Add a progress bar to app/course/module/[moduleId]/page.tsx
showing lessons completed in the current module.
Match existing dark design. Don't change other components."

Agent 2 — API:
"Add GET /api/user/module-progress returning completion
percentage per module for the current user.
Use existing LessonProgress model."

Agent 3 — Tests:
"Write Jest tests for all routes in app/api/user/.
Cover authenticated, unauthenticated, and edge cases."
</pre>
<p>All three run simultaneously. You review and merge what's good.</p>

<h3>Cowork Dispatch vs Code Dispatch</h3>
<p>These are two different things that share a name. <strong>Claude Code Dispatch</strong> = parallel coding agents. <strong>Claude Cowork Dispatch</strong> = desktop productivity agent controlled from your phone. Module 7 covers Cowork Dispatch in detail.</p>`
      }
    ]
  },
  {
    id: 7,
    title: "Desktop Agents — OpenClaw and Claude Dispatch",
    description: "Set up a persistent AI agent that works on your computer while you focus on other things.",
    outcome: "Students have a working desktop agent setup completing at least one recurring task automatically.",
    icon: "Settings",
    lessons: [
      {
        id: 1,
        title: "What Desktop Agents Actually Are in 2027",
        description: "Beyond the hype — what works, what doesn't, and what's worth setting up",
        duration: "15 min",
        content: `<h2>Persistent Agents: The Real 2027 Shift</h2>
<p>In 2024, AI was reactive — you opened a window and asked a question. Desktop agents are different: they stay active, accept goals, execute them using your computer's apps and files, and return results — while you do something else.</p>

<h3>What They Can Reliably Do Today</h3>
<ul>
<li>Organise and rename files according to rules</li>
<li>Summarise documents and folders of PDFs</li>
<li>Draft and queue emails based on a briefing</li>
<li>Pull reports from connected apps (Gmail, Notion, Google Drive)</li>
<li>Run scheduled recurring tasks (weekly digest, daily briefing)</li>
</ul>

<h3>What Still Fails Often</h3>
<ul>
<li>Complex multi-app workflows touching 4+ different systems</li>
<li>Tasks requiring judgment calls on ambiguous inputs</li>
<li>Anything involving apps without good API access</li>
</ul>

<div class="bg-yellow-900/30 p-4 rounded-lg mt-4">
<h4>⚠️ Honest Expectations</h4>
<p>Claude Dispatch has roughly a 50–70% success rate on complex multi-app tasks. This is a research preview. For simple, well-defined tasks — file management, document summaries, scheduled reports — it's reliable. Use it for tasks where a failure means a missed email, not a missed payment.</p>
</div>`
      },
      {
        id: 2,
        title: "Claude Cowork Dispatch — Setup and Best Uses",
        description: "The polished commercial option — phone-controlled, 38+ app connectors",
        duration: "20 min",
        content: `<h2>Claude Cowork Dispatch</h2>
<p>Launched March 2026, Dispatch is Anthropic's commercial desktop agent. It's the most polished option available and requires the Claude Max plan ($100–200/month).</p>

<h3>Setup (10 minutes)</h3>
<ol>
<li>Install the Claude desktop app at claude.ai/download</li>
<li>Sign in with your Max account</li>
<li>Open the app — look for the Dispatch tab</li>
<li>Scan the QR code with your phone's Claude app to pair them</li>
</ol>

<h3>38+ Built-In Connectors</h3>
<p>Gmail, Slack, Notion, Google Drive, Google Calendar, Google Docs, Todoist, Linear — all connect in a few clicks, no API keys or configuration required.</p>

<h3>Tasks Dispatch Does Well</h3>
<ul>
<li>"Summarise all PDFs in my Downloads folder from this month and email me the key points"</li>
<li>"Every Monday morning, draft a summary of my unread emails from the previous week"</li>
<li>"Find all calendar events with [person's name] and create a prep note document for each"</li>
<li>"Organise my Downloads folder — move documents to Documents, images to Pictures, videos to Movies"</li>
</ul>

<h3>Tasks to Avoid</h3>
<ul>
<li>Anything requiring browser navigation to sites without built-in connectors</li>
<li>Multi-step tasks touching more than 3 different apps</li>
<li>Anything you'd be upset about if it went wrong unsupervised</li>
</ul>`
      },
      {
        id: 3,
        title: "OpenClaw — The Open Source Alternative",
        description: "Maximum flexibility, model-agnostic, controlled via Telegram",
        duration: "25 min",
        content: `<h2>OpenClaw: 247,000 GitHub Stars and Growing</h2>
<p>OpenClaw is the open source desktop agent that went viral in 2025–2026. It's model-agnostic (use Claude, GPT-6, Gemini, or local models), controlled via Telegram/WhatsApp/Discord, and free to run beyond API costs.</p>

<h3>Why Choose OpenClaw Over Dispatch</h3>
<ul>
<li>You want to use multiple AI models in the same agent</li>
<li>You're comfortable with terminal setup</li>
<li>You want full customisation via the Skills system</li>
<li>You don't want to pay for a Max plan</li>
<li>You want to control everything from Telegram</li>
</ul>

<h3>Basic Setup</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
npm install -g openclaw
cd $HOME
openclaw init
# Follow wizard — connect Telegram and add API keys
</pre>

<h3>The Three Essential Upgrades</h3>

<h4>1. QMD Memory (most important)</h4>
<p>OpenClaw's default memory uses keyword search — it fails when you ask about something using different words than you used originally. QMD adds semantic search (understands meaning, not just keywords) and runs entirely on your machine.</p>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
# Follow: https://docs.openclaw.ai/concepts/memory#qmd-backend-experimental
# macOS prerequisite:
brew install sqlite
# Then configure memory.backend = "qmd" in openclaw.json
</pre>

<h4>2. AgentMail</h4>
<p>Your agent gets a real email inbox (yourname@agentmail.to) for sending and receiving. Gmail bans automated sending at scale — AgentMail is built for agent use.</p>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
# Sign up at agentmail.to (free, up to 3 inboxes)
npm i -g clawhub
clawhub install agentmail
</pre>

<h4>3. Agent-Browser</h4>
<p>Gives your agent a real Chromium browser — fill forms, navigate pages, interact with JavaScript. Uses 93% fewer tokens than Playwright.</p>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
npm install -g agent-browser
# Follow skill setup: https://github.com/vercel-labs/agent-browser
</pre>

<div class="bg-green-900/30 p-4 rounded-lg mt-6">
<h4>💡 If You Pick Just One Upgrade</h4>
<p>QMD. It transforms OpenClaw from an agent that forgets to one that genuinely remembers context across sessions. Install this first.</p>
</div>`
      },
      {
        id: 4,
        title: "OpenClaw vs Claude Dispatch — Which to Use",
        description: "An honest comparison with clear recommendations",
        duration: "12 min",
        content: `<h2>Pick the Right Tool for Your Situation</h2>

<h3>Side-by-Side</h3>
<table class="w-full text-left mt-4">
<tr class="border-b border-gray-700"><th class="pb-2"></th><th class="pb-2">Claude Dispatch</th><th class="pb-2">OpenClaw</th></tr>
<tr class="border-b border-gray-700"><td class="py-2">Setup time</td><td>10 minutes</td><td>2–4 hours (with upgrades)</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Interface</td><td>GUI app + phone</td><td>Telegram/WhatsApp/Discord</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">AI model</td><td>Claude only</td><td>Any model (Claude, GPT-6, Gemini, local)</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">Cost</td><td>Max plan ($100–200/month)</td><td>Free + API costs (~£10–30/month)</td></tr>
<tr class="border-b border-gray-700"><td class="py-2">App connectors</td><td>38 built-in, no setup</td><td>Via skills (some setup required)</td></tr>
<tr><td class="py-2">Best for</td><td>Non-technical users wanting something polished</td><td>Power users wanting full control</td></tr>
</table>

<h3>The Honest Answer</h3>
<p><strong>Choose Dispatch if:</strong> you're already on Claude Max, you want something that works in 10 minutes, and you primarily work with documents, email, and productivity apps.</p>
<p><strong>Choose OpenClaw if:</strong> you want to use multiple AI models, you're comfortable with terminal setup, and you want maximum control and customisation.</p>
<p><strong>Use both if:</strong> Dispatch for quick phone-triggered tasks; OpenClaw for complex scheduled automations.</p>

<h3>Neither Is Magic</h3>
<p>Desktop agents in 2027 are genuinely useful for well-defined, recurring tasks. They are not reliable enough to run unsupervised on anything business-critical. Start with simple tasks, supervise the first 10 runs, then let them run autonomously once you trust the output.</p>`
      }
    ]
  },
  {
    id: 8,
    title: "Personal Productivity and Life Automation",
    description: "Use AI to get time back — morning briefings, inbox management, personal research, recurring admin — all running without you.",
    outcome: "Students have at least one personal AI system running and saving them real time every day.",
    icon: "Brain",
    lessons: [
      {
        id: 1,
        title: "Your Personal AI Operating System",
        description: "Moving from reactive to proactive AI use",
        duration: "15 min",
        content: `<h2>From Reactive to Proactive</h2>
<p>Most people use AI reactively — they have a task, they open Claude, they ask a question. The people getting the most from AI in 2027 have built proactive systems: automations and agents that deliver information and complete tasks before they're asked.</p>

<h3>Three Layers</h3>
<ul>
<li><strong>Layer 1 — Information:</strong> AI reads, filters, and summarises the world for you. News, emails, research — delivered as a daily briefing, not a firehose.</li>
<li><strong>Layer 2 — Drafts:</strong> AI prepares outputs for your approval. Email replies, reports, proposals — you review and send, not write from scratch.</li>
<li><strong>Layer 3 — Execution:</strong> AI takes actions without needing you to approve each one. File organisation, scheduled posts, recurring reports.</li>
</ul>

<h3>What a Good Personal AI System Looks Like</h3>
<p>Every morning, before you've opened your laptop:</p>
<ul>
<li>Your inbox has been triaged — urgent items flagged, newsletters archived</li>
<li>A daily briefing has been delivered: key emails, today's calendar, relevant news</li>
<li>Your scheduled content has been published</li>
<li>Any weekly reports have been drafted and sent</li>
</ul>
<p>You arrive at work already informed. Your attention is reserved for decisions that actually need you.</p>`
      },
      {
        id: 2,
        title: "Build Your Morning Briefing",
        description: "An automated daily briefing delivered to your phone before you start work",
        duration: "25 min",
        content: `<h2>Wake Up Already Informed</h2>
<p>A morning briefing automation is the highest-ROI system most people can build. It takes 2–3 hours to set up and saves 30–60 minutes every day indefinitely.</p>

<h3>What Your Briefing Should Cover</h3>
<ul>
<li>Today's calendar — meetings and prep notes</li>
<li>Top 3–5 emails needing attention today</li>
<li>Key developments in your industry from the last 24 hours</li>
<li>Any tasks due today (from Notion or Todoist)</li>
</ul>

<h3>Building It in Make (Step by Step)</h3>
<ol>
<li><strong>Schedule trigger:</strong> every weekday at 6:30am</li>
<li><strong>Google Calendar:</strong> "List Events" — today's events</li>
<li><strong>Gmail:</strong> "Search Emails" — unread, last 24 hours</li>
<li><strong>HTTP module:</strong> Google News RSS for your industry keywords</li>
<li><strong>Claude prompt:</strong>
<pre class="bg-gray-800 p-3 rounded text-sm mt-2 overflow-x-auto">
You are my personal assistant. Create a concise morning 
briefing (under 300 words) covering:
1. Key meetings today with any relevant prep notes
2. Emails needing my attention today (summarise each in one line)
3. Top 3 industry news items worth knowing
4. My single priority for today

Calendar: [map calendar data]
Emails: [map email data]
News: [map news data]

Be direct and practical. No filler.
</pre>
</li>
<li><strong>Output:</strong> send to Telegram (if using OpenClaw), email, or Slack</li>
</ol>

<div class="bg-blue-900/30 p-4 rounded-lg mt-6">
<h4>📋 Upgrade Ideas Once It's Running</h4>
<ul class="mt-2 space-y-1 text-sm">
<li>Add tasks due today from Notion or Todoist</li>
<li>Add your Stripe revenue from yesterday</li>
<li>Add competitor monitoring — what your competitors published</li>
<li>Add a "one thing to move forward today" suggestion based on your goals</li>
</ul>
</div>`
      },
      {
        id: 3,
        title: "AI Email Management",
        description: "Triage, draft, and stay on top of your inbox without it consuming your day",
        duration: "20 min",
        content: `<h2>Inbox Zero Without the Work</h2>
<p>The average professional spends 2+ hours per day on email. With AI triage and drafting, this can become 30–45 minutes of focused review and decisions.</p>

<h3>Four Things AI Handles</h3>

<h4>1. Classification</h4>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
Trigger: New email arrives
Claude: "Classify as URGENT / IMPORTANT / NEWSLETTER / RECEIPT / OTHER.
Subject: [subject] | From: [sender] | Preview: [snippet]"
Route each category to the right label and action
</pre>

<h4>2. Draft Responses</h4>
<p>For common email types (meeting requests, pricing enquiries, support), Claude drafts a response based on your previous replies and preferences. You review, edit if needed, send.</p>

<h4>3. Meeting Scheduling</h4>
<p>When someone emails asking to meet, Claude drafts a reply offering two specific times from your calendar. You approve and send.</p>

<h4>4. Follow-Up Reminders</h4>
<p>Emails you sent that haven't received a reply after 3 days get flagged. Claude drafts a polite follow-up for your approval.</p>

<h3>Setting Up Email Triage in Make</h3>
<ol>
<li>Trigger: New email in Gmail (filter to inbox only)</li>
<li>Claude: classify with the prompt above</li>
<li>Router: branch based on Claude's one-word output</li>
<li>URGENT branch: apply label "Urgent" + send Telegram/Slack notification</li>
<li>NEWSLETTER branch: apply label "Newsletter" + archive</li>
<li>RECEIPT branch: apply label "Receipts" + archive + log to Sheets</li>
</ol>`
      },
      {
        id: 4,
        title: "Personal Research and Knowledge Management",
        description: "Build a searchable record of everything you learn — and actually find it again",
        duration: "20 min",
        content: `<h2>Stop Losing What You Learn</h2>
<p>Most people learn something, save a link, and never look at it again. A personal knowledge system changes this — AI captures, organises, and retrieves what you've learned.</p>

<h3>The Capture → Process → Retrieve Loop</h3>
<ul>
<li><strong>Capture:</strong> anything interesting gets sent to a single inbox (a dedicated email, Telegram channel, or Notion inbox)</li>
<li><strong>Process:</strong> AI automatically summarises, tags, and categorises it</li>
<li><strong>Retrieve:</strong> when you need it, ask your agent — it searches semantically, not just by keyword</li>
</ul>

<h3>The Capture Flow (OpenClaw + Telegram)</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
You send a URL or text to your agent via Telegram

Claude processes it:
- If URL: fetch the page, summarise key points (5 bullet points)
- Extract: main idea, why it matters, relevance to your work
- Add tags: [topic], [type: article/tool/research], [priority]
- Save to Notion database with all metadata

When you ask "what do I know about [topic]?"
→ QMD searches semantically across all saved items
→ Returns the most relevant results
→ Claude synthesises them into a useful answer
</pre>

<h3>Pre-Call Research (for client and sales meetings)</h3>
<p>Send this to your OpenClaw agent 1 hour before any important call:</p>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
I have a call in 1 hour with [name] at [company].
Research and give me:
- What the company does (2 sentences)
- Recent news or announcements
- The person's role and background (from LinkedIn)
- 3 good conversation openers
- Any potential pain points my service could address
</pre>`
      },
      {
        id: 5,
        title: "Automating Recurring Admin",
        description: "Weekly reports, invoice processing, meeting notes — set up once, run forever",
        duration: "20 min",
        content: `<h2>Admin on Autopilot</h2>
<p>Admin tasks don't require your intelligence — they require consistency. AI is perfect for this.</p>

<h3>Weekly Revenue Report</h3>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
Trigger: Every Friday at 5pm
↓
Stripe API: this week's revenue, new customers, MRR change
↓
Compare to last week and last month
↓
Claude: "Write a concise weekly business summary:
revenue, trends, one thing that worked, one focus for next week.
Data: [Stripe data]. Under 200 words."
↓
Email to yourself: "Weekly Business Review — [Date]"
</pre>

<h3>Meeting Notes and Action Items</h3>
<ol>
<li>Record meetings with Otter.ai or Fireflies (auto-transcribes)</li>
<li>Make webhook receives transcript automatically</li>
<li>Claude: "Extract from this transcript: key decisions, action items with owner and deadline, any follow-ups needed"</li>
<li>Results emailed to all attendees and logged to Notion</li>
</ol>

<h3>Social Media Scheduling</h3>
<p>Every Sunday, spend 20 minutes writing bullet points for the week's content. Paste into Claude:</p>
<pre class="bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
Expand these into 5 LinkedIn posts — one per weekday.
Professional but conversational tone.
End each with a question to encourage comments.
Keep each under 200 words.
Bullet points: [your notes]
</pre>
<p>Claude expands → Make loads into Buffer → posts automatically all week.</p>

<h3>The Compound Effect</h3>
<p>Each of these takes 2–3 hours to set up and saves 2–5 hours per week indefinitely. After 6 months of building these systems, you're working substantially fewer hours for the same or better output. That's the real value of AI for personal productivity.</p>`
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
