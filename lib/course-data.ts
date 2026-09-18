// lib/course-data.ts
// AI Income Lab – 9 modules from the AI Income Lab Course Build Brief
// Last updated: September 2026

export interface Lesson {
  id: string
  title: string
  description: string
  duration: string // estimated video runtime
  practiceTime?: string // estimated practice/exercise time
  isPreview?: boolean // true = accessible without purchase
  resourcesIncluded?: string[]
}

export interface Module {
  id: string
  title: string
  description: string
  outcome: string
  icon: string
  lessons: Lesson[]
  projectDeliverable: string
  track?: 'all' | 'creative' | 'services' | 'products' // which learning track this suits best
}

export const modules: Module[] = [
  {
    id: '1',
    title: 'Introduction to AI, Your New Business Toolkit',
    description:
      'Build a solid foundation: understand what AI actually does, set up a productive workspace and identify a customer problem worth solving.',
    outcome:
      'Understand how modern AI works, use it competently and choose a customer problem worth solving.',
    icon: '🧠',
    track: 'all',
    projectDeliverable:
      'An AI workspace, three reusable task briefs, a sourced market snapshot and one testable offer.',
    lessons: [
      {
        id: '1-1',
        title: 'What AI Can Actually Do',
        description:
          'Understand language models, image generation, audio, video, reasoning and multimodal inputs. Learn the difference between generating plausible text and establishing a fact, and why context windows matter.',
        duration: '12 min',
        practiceTime: '20 min',
        isPreview: true,
        resourcesIncluded: ['Plain-English AI glossary'],
      },
      {
        id: '1-2',
        title: 'Build Your AI Workspace',
        description:
          'Set up a general assistant with reusable project instructions, organised source files and a simple output library. Learn to separate public information, private business material and credentials safely.',
        duration: '14 min',
        practiceTime: '30 min',
        resourcesIncluded: ['Workspace setup checklist', 'Folder structure template'],
      },
      {
        id: '1-3',
        title: 'Prompts That Produce Usable Work',
        description:
          'Master the seven elements of a strong prompt: objective, context, inputs, constraints, examples, output format and acceptance criteria. Compare vague vs. properly specified briefs with live examples.',
        duration: '13 min',
        practiceTime: '25 min',
        resourcesIncluded: ['Prompt worksheet', 'Before/after prompt examples'],
      },
      {
        id: '1-4',
        title: 'Research Without Inventing the Evidence',
        description:
          'Teach source discovery, primary-source checks, dates, citations, uncertainty and contradictory evidence. Build a market brief with a claim-to-source table and an explicit unknowns section.',
        duration: '15 min',
        practiceTime: '40 min',
        resourcesIncluded: ['Fact-checking checklist', 'Market brief template'],
      },
      {
        id: '1-5',
        title: 'Assistants, Workflows and Agents',
        description:
          'Understand fixed automations, AI steps, tool-using agents, retrieval, APIs, webhooks and MCP. Use one customer enquiry to show when each approach is right – and why a fixed rule can outperform an agent for predictable tasks.',
        duration: '14 min',
        practiceTime: '20 min',
        resourcesIncluded: ['AI approach decision guide'],
      },
      {
        id: '1-6',
        title: 'Where the Money Comes From',
        description:
          'Compare services, retainers, downloadable products, software subscriptions, licensing and audience monetisation. Connect each to a customer, a problem, a deliverable and a distribution channel. Distinguish revenue, profit and cash received.',
        duration: '12 min',
        practiceTime: '15 min',
        resourcesIncluded: ['Revenue model comparison worksheet'],
      },
      {
        id: '1-7',
        title: 'Choose Your First Opportunity',
        description:
          'Score three niches against access to buyers, urgency, ability to pay, skill fit, delivery complexity and repeat demand. Conduct three exploratory customer conversations using questions that uncover existing spending and costly bottlenecks.',
        duration: '15 min',
        practiceTime: '60 min',
        resourcesIncluded: ['Opportunity scorecard', 'Customer interview script'],
      },
      {
        id: '1-8',
        title: 'Your First Commercial Experiment',
        description:
          'Write a one-page offer, build a small sample and define a seven-day validation experiment. Set up the sales and delivery tracker used throughout the rest of the course.',
        duration: '13 min',
        practiceTime: '45 min',
        resourcesIncluded: ['One-page offer template', 'Expense tracker', 'Sales and delivery tracker'],
      },
    ],
  },
  {
    id: '2',
    title: 'The One-Person AI Creative Studio',
    description:
      'Produce and package professional images, video and advertising assets for a specific business niche – and turn them into a repeatable service offer.',
    outcome:
      'Produce and package professional content and advertising assets for a specific business niche.',
    icon: '🎨',
    track: 'creative',
    projectDeliverable:
      'A campaign pack for a fictional or consenting business: six finished images, three short videos, accompanying copy and a presentation explaining the creative choices.',
    lessons: [
      {
        id: '2-1',
        title: 'Pick a Creative Service People Already Buy',
        description:
          'Compare product visuals, short-form editing, video repurposing, ad creative, presentation design and content packages. Define a single starter offer with a measurable scope and revision limit.',
        duration: '11 min',
        practiceTime: '20 min',
        isPreview: true,
        resourcesIncluded: ['Creative service menu'],
      },
      {
        id: '2-2',
        title: 'Extract a Usable Brand System',
        description:
          'Create a voice guide, visual references, colour rules and claim restrictions from approved materials. Demonstrate how to preserve a client\'s actual product details and brand identity.',
        duration: '12 min',
        practiceTime: '30 min',
        resourcesIncluded: ['Brand extraction template', 'Voice guide worksheet'],
      },
      {
        id: '2-3',
        title: 'Image Creation and Controlled Editing',
        description:
          'Reference images, composition, lighting, variations, inpainting and resizing with real tool capabilities. Learn to compare generated imagery against source products and reject misleading changes.',
        duration: '15 min',
        practiceTime: '45 min',
        resourcesIncluded: ['Image prompt library', 'QA checklist for visuals'],
      },
      {
        id: '2-4',
        title: 'Video Generation and Production',
        description:
          'Build a storyboard, shot list and prompt sequence; generate usable clips; edit pacing, sound and transitions. Understand consistency problems and why generated clips still need editorial judgment.',
        duration: '14 min',
        practiceTime: '60 min',
        resourcesIncluded: ['Storyboard template', 'Shot list worksheet'],
      },
      {
        id: '2-5',
        title: 'Voice, Presenters and Localisation',
        description:
          'Use licensed synthetic voice or a consenting speaker\'s authorised voice. Cover pronunciation, timing, subtitle correction and translation review. Learn how to label fictional presenters and avoid fake endorsements.',
        duration: '12 min',
        practiceTime: '30 min',
        resourcesIncluded: ['Voice brief template', 'Subtitle review checklist'],
      },
      {
        id: '2-6',
        title: 'Turn One Source Into a Content Package',
        description:
          'Convert an authorised long video into short clips, captions, a newsletter draft and an article outline. Preserve the speaker\'s meaning and build a human review process into the workflow.',
        duration: '13 min',
        practiceTime: '45 min',
        resourcesIncluded: ['Repurposing workflow', 'Content package template'],
      },
      {
        id: '2-7',
        title: 'Create and Evaluate Campaign Variations',
        description:
          'Build three hooks and two visual treatments around one offer. Understand how click-through rate, conversion rate, acquisition cost and creative fatigue inform decisions – not just visual impressiveness.',
        duration: '12 min',
        practiceTime: '40 min',
        resourcesIncluded: ['Campaign variation framework', 'Creative evaluation rubric'],
      },
      {
        id: '2-8',
        title: 'Package, Price and Deliver',
        description:
          'Produce a creative brief, scope, approval process, delivery folder and monthly service offer. Understand how licensing, generation retries and revisions change profitability.',
        duration: '11 min',
        practiceTime: '30 min',
        resourcesIncluded: ['Service scope template', 'Pricing worksheet', 'Rights register'],
      },
    ],
  },
  {
    id: '3',
    title: 'Digital Products That Solve a Specific Problem',
    description:
      'Design, validate and launch an original digital product with a defined audience and a real distribution plan – not just another generic template.',
    outcome:
      'Design, validate and launch an original digital product with a defined audience and distribution plan.',
    icon: '📦',
    track: 'products',
    projectDeliverable:
      'One complete product, sample version, sales page, onboarding guide and launch experiment.',
    lessons: [
      {
        id: '3-1',
        title: 'Find a Problem With Purchase Intent',
        description:
          'Research questions, complaints, existing products and customer interviews. Separate apparent popularity from evidence of willingness to pay. Understand why search volume alone is not validation.',
        duration: '13 min',
        practiceTime: '40 min',
        isPreview: true,
        resourcesIncluded: ['Validation question bank', 'Market research template'],
      },
      {
        id: '3-2',
        title: 'Choose the Right Product Format',
        description:
          'Compare spreadsheets, business templates, specialist workbooks, design assets, calculators, short training products and curated research. Understand why generic prompt collections and undifferentiated ebooks are hard to defend.',
        duration: '11 min',
        practiceTime: '20 min',
        resourcesIncluded: ['Product format decision guide'],
      },
      {
        id: '3-3',
        title: 'Design the Transformation',
        description:
          'Define starting situation, desired result, required inputs and measurable completion. Build a minimum useful product before expanding the bundle.',
        duration: '12 min',
        practiceTime: '30 min',
        resourcesIncluded: ['Product specification template', 'Transformation worksheet'],
      },
      {
        id: '3-4',
        title: 'Create With AI and Expert Judgment',
        description:
          'Use AI for structure, examples, editing and formatting. Apply independent checks for factual claims and subject expertise for specialist material. Understand what AI-generated legal, medical or financial content requires from you before publishing.',
        duration: '13 min',
        practiceTime: '60 min',
        resourcesIncluded: ['Content accuracy checklist', 'Expert review guide'],
      },
      {
        id: '3-5',
        title: 'Build an Interactive Component',
        description:
          'Create a working calculator or guided worksheet. Cover input validation, assumptions, formulas, edge cases and sample outputs. Learn to verify the arithmetic rather than trusting a generated implementation.',
        duration: '15 min',
        practiceTime: '60 min',
        resourcesIncluded: ['Calculator template', 'Formula verification checklist'],
      },
      {
        id: '3-6',
        title: 'Set Up the Purchase and Delivery Journey',
        description:
          'Demonstrate a suitable storefront, product page, checkout, delivery email, refund process and customer support workflow. Verify current platform fees and rules before publishing.',
        duration: '14 min',
        practiceTime: '45 min',
        resourcesIncluded: ['Launch checklist', 'Platform fee comparison'],
      },
      {
        id: '3-7',
        title: 'Launch With a Distribution Mechanism',
        description:
          'Compare useful public content, an existing community with permission, partnerships, affiliate referrals and a small demand test. Build an owned-audience route without implying that followers appear automatically.',
        duration: '12 min',
        practiceTime: '30 min',
        resourcesIncluded: ['Launch checklist', 'Distribution channel comparison'],
      },
      {
        id: '3-8',
        title: 'Improve the Product After Launch',
        description:
          'Collect feedback, measure product-page conversion, refunds, support effort and repeat demand. Plan updates, bundles and licences. Understand affiliate disclosures and product permissions.',
        duration: '11 min',
        practiceTime: '30 min',
        resourcesIncluded: ['Feedback collection template', 'Margin calculator'],
      },
    ],
  },
  {
    id: '4',
    title: 'Build Websites and Business Tools With AI',
    description:
      'Build, test and deliver a functioning website or small business application from a written brief – with a real handover pack a client can actually use.',
    outcome:
      'Build, test and deliver a functioning website or small business application from a written brief.',
    icon: '💻',
    track: 'services',
    projectDeliverable:
      'A deployed demonstration site with one functioning business tool, a recorded walkthrough and a handover pack.',
    lessons: [
      {
        id: '4-1',
        title: 'Sell the Business Outcome',
        description:
          'Define the buyer, visitor action, essential pages and operational requirements. Compare a brochure site, lead-generation site, client portal and internal tool. Scope a small first project that delivers real value.',
        duration: '11 min',
        practiceTime: '20 min',
        isPreview: true,
        resourcesIncluded: ['Project scoping worksheet'],
      },
      {
        id: '4-2',
        title: 'Write a Build Specification',
        description:
          'Produce user stories, content requirements, data fields, integrations and acceptance tests. Use an AI coding assistant or builder to plan before making any changes.',
        duration: '13 min',
        practiceTime: '40 min',
        resourcesIncluded: ['Build specification template', 'User story worksheet'],
      },
      {
        id: '4-3',
        title: 'Build the Interface',
        description:
          'Create responsive pages, consistent components and clear navigation. Cover typography, spacing, mobile layouts, accessible forms and meaningful error states.',
        duration: '15 min',
        practiceTime: '90 min',
        resourcesIncluded: ['Component library guide', 'Accessibility checklist'],
      },
      {
        id: '4-4',
        title: 'Add Useful Business Functionality',
        description:
          'Build an enquiry form, calculator or booking integration. Connect to a database where needed. Understand authentication and permissions before adding private customer areas.',
        duration: '15 min',
        practiceTime: '90 min',
        resourcesIncluded: ['Database setup guide', 'Form integration checklist'],
      },
      {
        id: '4-5',
        title: 'Write Conversion-Focused Content',
        description:
          'Develop a clear offer, supporting evidence, service explanation, objections and call to action. Verify all claims and avoid fabricated reviews, case studies or scarcity.',
        duration: '12 min',
        practiceTime: '45 min',
        resourcesIncluded: ['Page copy framework', 'Claims verification checklist'],
      },
      {
        id: '4-6',
        title: 'Make Content Discoverable',
        description:
          'Cover crawlability, page titles, internal links, structured content, relevant schema and accurate business information. Understand AI search visibility as a measurement and content-quality problem.',
        duration: '12 min',
        practiceTime: '30 min',
        resourcesIncluded: ['SEO checklist', 'Schema markup guide'],
      },
      {
        id: '4-7',
        title: 'Test and Publish Properly',
        description:
          'Check mobile behaviour, forms, calculations, access controls, secret handling, performance and analytics. Cover hosting, domains, backups, error monitoring and rollback.',
        duration: '14 min',
        practiceTime: '60 min',
        resourcesIncluded: ['Launch QA checklist', 'Hosting setup guide'],
      },
      {
        id: '4-8',
        title: 'Hand Over and Retain the Client',
        description:
          'Create an ownership map, documentation, maintenance scope and change-request process. Understand setup fees, recurring support, third-party expenses and the difference between a demonstration and a supported application.',
        duration: '12 min',
        practiceTime: '30 min',
        resourcesIncluded: ['Handover pack template', 'Maintenance scope template'],
      },
    ],
  },
  {
    id: '5',
    title: 'Build a Lead Delivery Business',
    description:
      'Research suitable prospects and build a measurable, compliant system that delivers an agreed type of lead to a business – with commercial terms that make it worth running.',
    outcome:
      'Research suitable prospects and build a measurable system that delivers an agreed type of lead to a business.',
    icon: '🎯',
    track: 'services',
    projectDeliverable:
      'A 30-company prospect dataset with evidence fields and verification status, a draft outreach sequence, an inbound landing page and a lead-delivery dashboard.',
    lessons: [
      {
        id: '5-1',
        title: 'Define What the Client Is Actually Buying',
        description:
          'Distinguish a business record, verified contact, interested reply, qualified enquiry, booked meeting, attended meeting and paying customer. Agree the exact billable event, exclusions, duplicate window and replacement rules.',
        duration: '12 min',
        practiceTime: '20 min',
        isPreview: true,
        resourcesIncluded: ['Lead acceptance agreement template'],
      },
      {
        id: '5-2',
        title: 'Choose a Niche and Qualification Model',
        description:
          'Identify service area, buyer role, company type, project fit and disqualifying conditions. Compare the economics of local service enquiries and B2B appointments. Interview a prospective client before building a large list.',
        duration: '13 min',
        practiceTime: '40 min',
        resourcesIncluded: ['Ideal customer worksheet', 'Niche economics comparison'],
      },
      {
        id: '5-3',
        title: 'Find and Research Prospects Responsibly',
        description:
          'Use licensed datasets, permitted public sources and client-owned records. Record source, collection date and business relevance. Understand what public data is – and is not – permissible to reuse.',
        duration: '14 min',
        practiceTime: '60 min',
        resourcesIncluded: ['Data dictionary', 'Source documentation template'],
      },
      {
        id: '5-4',
        title: 'Enrich, Verify and Deduplicate',
        description:
          'Company-domain matching, role checks, email verification status, catch-all uncertainty and suppression. Use waterfall enrichment to control costs and avoid paying repeatedly for the same result.',
        duration: '14 min',
        practiceTime: '60 min',
        resourcesIncluded: ['Enrichment workflow guide', 'Verification checklist'],
      },
      {
        id: '5-5',
        title: 'Create Evidence-Based Personalisation',
        description:
          'Use AI to draft concise messages from verifiable business facts. Link each personalised claim to evidence. Build three-message sequences with reply classification and human review before external sends.',
        duration: '13 min',
        practiceTime: '45 min',
        resourcesIncluded: ['Outreach sequence templates', 'Personalisation evidence log'],
      },
      {
        id: '5-6',
        title: 'Build an Inbound Route as Well',
        description:
          'Create an offer-specific landing page, enquiry form, qualification questions and clear handover consent. Demonstrate a small advertising or partnership test with an explicit spend cap.',
        duration: '13 min',
        practiceTime: '60 min',
        resourcesIncluded: ['Landing page template', 'Ad spend tracking sheet'],
      },
      {
        id: '5-7',
        title: 'Protect Delivery Quality',
        description:
          'Current email authentication, suppression, unsubscribe handling and reputation monitoring. Understand the applicable outreach and privacy rules for your teaching jurisdiction, recipient type and channel.',
        duration: '12 min',
        practiceTime: '30 min',
        resourcesIncluded: ['Email deliverability checklist', 'Compliance review guide'],
      },
      {
        id: '5-8',
        title: 'Deliver and Report Commercial Outcomes',
        description:
          'Route accepted leads to the CRM, alert the business, track response time and reconcile accepted, rejected and duplicate records. Report cost per accepted lead, appointment attendance and attributable gross profit.',
        duration: '12 min',
        practiceTime: '30 min',
        resourcesIncluded: ['Lead delivery dashboard', 'Handover SOP', 'Rejection log'],
      },
    ],
  },
  {
    id: '6',
    title: 'AI Receptionists, Chat Assistants and Voice Agents',
    description:
      'Build a conversational assistant that answers approved questions, captures enquiries and hands off reliably – and package it as a managed service for a business.',
    outcome:
      'Build a conversational assistant that answers approved questions, captures enquiries and hands off reliably.',
    icon: '🤖',
    track: 'services',
    projectDeliverable:
      'A working inbound assistant with an approved knowledge base, one booking or CRM integration, a human escalation path and a test report.',
    lessons: [
      {
        id: '6-1',
        title: 'Choose an Appropriate Use Case',
        description:
          'Compare after-hours enquiries, booking assistance, product support and internal helpdesks. Start with a narrow inbound use case and a buyer who has a measurable missed-enquiry or support problem.',
        duration: '11 min',
        practiceTime: '20 min',
        isPreview: true,
        resourcesIncluded: ['Use case evaluation worksheet'],
      },
      {
        id: '6-2',
        title: 'Build a Trustworthy Knowledge Base',
        description:
          'Organise approved FAQs, service descriptions, policies and escalation instructions. Understand retrieval-augmented generation in plain English, including the risks of stale information and conflicting sources.',
        duration: '13 min',
        practiceTime: '45 min',
        resourcesIncluded: ['Knowledge base template', 'FAQ organisation guide'],
      },
      {
        id: '6-3',
        title: 'Design the Conversation',
        description:
          'Create openings, qualification questions, clarifications, refusal boundaries, recovery messages and human handoffs. Teach the assistant to recognise uncertainty rather than invent an answer.',
        duration: '14 min',
        practiceTime: '45 min',
        resourcesIncluded: ['Conversation map template', 'Dialogue design guide'],
      },
      {
        id: '6-4',
        title: 'Build the Chat Experience',
        description:
          'Connect the knowledge source, embed the assistant and capture only necessary information. Separate answering a question from taking an action. Make action permissions explicit before deployment.',
        duration: '15 min',
        practiceTime: '60 min',
        resourcesIncluded: ['Chat setup checklist', 'Permission boundary worksheet'],
      },
      {
        id: '6-5',
        title: 'Build the Voice Experience',
        description:
          'Configure speech, interruption handling, pronunciation and silence recovery. Test different accents and background noise. Understand telephony integrations and their verification requirements before teaching them.',
        duration: '15 min',
        practiceTime: '60 min',
        resourcesIncluded: ['Voice agent setup guide', 'Test script library'],
      },
      {
        id: '6-6',
        title: 'Connect Bookings and Business Systems',
        description:
          'Implement calendar availability, confirmed bookings, CRM records and notifications. Handle time zones and duplicate submissions. Prevent double-booking through the booking system\'s actual controls.',
        duration: '14 min',
        practiceTime: '60 min',
        resourcesIncluded: ['Integration setup guide', 'Timezone handling checklist'],
      },
      {
        id: '6-7',
        title: 'Test Failure and Build Trust',
        description:
          'Test prompt injection, unsupported claims, unavailable calendars, abusive input, tool outages and requests outside scope. Understand AI disclosure, recording consent, retention and local rules.',
        duration: '13 min',
        practiceTime: '45 min',
        resourcesIncluded: ['25-scenario test checklist', 'Disclosure template'],
      },
      {
        id: '6-8',
        title: 'Package a Managed Service',
        description:
          'Build onboarding, usage limits, monitoring, monthly review and client handover. Price setup, maintenance and actual conversation or telephone usage separately. Estimate the cost of long calls and repeated failed actions.',
        duration: '12 min',
        practiceTime: '30 min',
        resourcesIncluded: ['Managed service pricing guide', 'Operating cost calculator', 'Client handover pack'],
      },
    ],
  },
  {
    id: '7',
    title: 'Build Complex AI Agents and Connected Business Systems',
    description:
      'Design, build and evaluate a multi-step agent system with tools, state, specialist roles and controlled external actions – then sell it as an operational service.',
    outcome:
      'Design, build and evaluate a multi-step agent system with tools, state, specialist roles and controlled external actions.',
    icon: '⚙️',
    track: 'services',
    projectDeliverable:
      'An AI operations desk that receives a synthetic enquiry, validates fields, researches authorised sources, retrieves approved services, scores fit, drafts a proposal and queues it for review.',
    lessons: [
      {
        id: '7-1',
        title: 'Turn a Business Process Into an Architecture',
        description:
          'Map inputs, decisions, tools, data stores, approvals and outputs. Compare a deterministic workflow, a single agent and several specialist agents. Require a reason for every additional agent you add.',
        duration: '13 min',
        practiceTime: '40 min',
        isPreview: true,
        resourcesIncluded: ['Architecture diagram templates', 'Agent planning canvas'],
      },
      {
        id: '7-2',
        title: 'Build the Technical Foundations',
        description:
          'Learn JSON, webhooks, API credentials, environment variables, structured outputs and tool schemas through working examples. Build with beginner scaffolding plus an optional code implementation.',
        duration: '15 min',
        practiceTime: '60 min',
        resourcesIncluded: ['Environment template', 'API credential management guide'],
      },
      {
        id: '7-3',
        title: 'Give Agents Useful Tools',
        description:
          'Add permitted research, document retrieval, CRM lookup and file generation. Understand MCP as a connection protocol – not an automatic guarantee of trust or permission. Keep tool permissions narrow and data access separated by client.',
        duration: '14 min',
        practiceTime: '60 min',
        resourcesIncluded: ['Tool permission worksheet', 'MCP checklist'],
      },
      {
        id: '7-4',
        title: 'Add Retrieval, Memory and State',
        description:
          'Distinguish source knowledge, conversation history, task state and longer-term memory. Cover embeddings and vector search only where they improve the project. Define retention, update and recovery processes.',
        duration: '14 min',
        practiceTime: '45 min',
        resourcesIncluded: ['Memory architecture guide', 'State management worksheet'],
      },
      {
        id: '7-5',
        title: 'Coordinate Specialist Agents',
        description:
          'Build researcher, qualification analyst, proposal drafter and reviewer roles. Define handoff schemas and bounded retries. Compare the multi-agent result against a simpler baseline to justify the added expense and complexity.',
        duration: '15 min',
        practiceTime: '90 min',
        resourcesIncluded: ['Multi-agent workflow export', 'Baseline comparison worksheet'],
      },
      {
        id: '7-6',
        title: 'Control Consequential Actions',
        description:
          'Put sending, spending, deleting and contractual commitments behind explicit permissions or human approval. Treat retrieved text as untrusted data. Cover prompt-injection resistance, secret protection and tool-call validation.',
        duration: '13 min',
        practiceTime: '45 min',
        resourcesIncluded: ['Threat model template', 'Permission boundary checklist'],
      },
      {
        id: '7-7',
        title: 'Engineer for Failure',
        description:
          'Add timeouts, retry limits, idempotency, duplicate detection, fallback models, alerts and a manual recovery queue. Cover tracing, versioning, cost budgets and stopping conditions.',
        duration: '14 min',
        practiceTime: '60 min',
        resourcesIncluded: ['Failure mode checklist', 'Operations runbook template'],
      },
      {
        id: '7-8',
        title: 'Evaluate, Deploy and Sell',
        description:
          'Create a labelled test set covering normal and adversarial cases. Measure completion, factual grounding, unsupported actions, latency and cost per successful task. Produce an installation, training and maintenance offer tied to a business bottleneck.',
        duration: '13 min',
        practiceTime: '60 min',
        resourcesIncluded: ['30-test evaluation dataset', 'Service offer template'],
      },
    ],
  },
  {
    id: '8',
    title: 'Launch a Focused AI Micro-SaaS',
    description:
      'Convert one repeated customer task into a small subscription product with real operating economics, a tested billing path and users who actually come back.',
    outcome:
      'Convert one repeated customer task into a small subscription product with real operating economics.',
    icon: '🚀',
    track: 'products',
    projectDeliverable:
      'A working beta application with one valuable AI feature, test billing, usage limits, monitoring and feedback from prospective users.',
    lessons: [
      {
        id: '8-1',
        title: 'Find a Narrow Recurring Problem',
        description:
          'Compare a proposal assistant, quote helper, client reporting tool and content approval portal. Interview likely users and identify the workaround they already use. Avoid starting with a generic chatbot for everyone.',
        duration: '12 min',
        practiceTime: '30 min',
        isPreview: true,
        resourcesIncluded: ['Problem interview script', 'Workaround analysis worksheet'],
      },
      {
        id: '8-2',
        title: 'Validate Before Building the Full Product',
        description:
          'Create a clickable demonstration or concierge service and a clearly described pilot. Seek evidence of willingness to pay. Understand disclosure requirements if taking pre-orders.',
        duration: '12 min',
        practiceTime: '45 min',
        resourcesIncluded: ['Pilot offer template', 'Pre-order disclosure guide'],
      },
      {
        id: '8-3',
        title: 'Specify the Smallest Useful Application',
        description:
          'Define one core job, target user, input, output, data model and acceptance criteria. Separate must-have functionality from an optional future roadmap.',
        duration: '12 min',
        practiceTime: '30 min',
        resourcesIncluded: ['Product specification template', 'MVP scope worksheet'],
      },
      {
        id: '8-4',
        title: 'Build the Core Workflow',
        description:
          'Use the chosen AI development environment to implement the interface, model connection and structured result. Apply development discipline from Module 4 and agent components from Module 7 where appropriate.',
        duration: '15 min',
        practiceTime: '120 min',
        resourcesIncluded: ['Build specification template', 'Development checklist'],
      },
      {
        id: '8-5',
        title: 'Add Accounts and Customer Isolation',
        description:
          'Implement authentication, authorisation, tenant separation and secure file handling. Test that one customer cannot access another customer\'s content. Use maintained authentication and payment services rather than inventing them.',
        duration: '14 min',
        practiceTime: '90 min',
        resourcesIncluded: ['Security checklist', 'Tenant isolation test plan'],
      },
      {
        id: '8-6',
        title: 'Add Payments and Usage Controls',
        description:
          'Demonstrate checkout in test mode, verified payment events, subscriptions, cancellations, allowances and overage rules. Keep secret keys server-side. Confirm access from trusted server-side payment events.',
        duration: '14 min',
        practiceTime: '60 min',
        resourcesIncluded: ['Stripe integration guide', 'Payment testing checklist'],
      },
      {
        id: '8-7',
        title: 'Understand the Economics',
        description:
          'Calculate model costs, storage, hosting, payment fees, support, refunds, acquisition cost and churn. Understand how heavy users can consume an unlimited plan\'s margin. Model cautious, base and optimistic scenarios with explicit assumptions.',
        duration: '13 min',
        practiceTime: '45 min',
        resourcesIncluded: ['Unit economics model', 'Scenario planning worksheet'],
      },
      {
        id: '8-8',
        title: 'Launch a Supported Beta',
        description:
          'Recruit a small user cohort, observe onboarding, fix failures and track activation and repeat use. Write a support policy, incident process, backup procedure and data export or deletion flow. Scale only after the core job works reliably.',
        duration: '12 min',
        practiceTime: '45 min',
        resourcesIncluded: ['Beta feedback script', 'Onboarding checklist', 'Support policy template'],
      },
    ],
  },
  {
    id: '9',
    title: 'Win Customers and Build a Profitable Operation',
    description:
      'Launch one chosen offer with a repeatable sales process, clear delivery scope and financial controls. Leave with a portfolio, a defined offer and a practical system for selling and delivering it.',
    outcome:
      'Launch one chosen offer with a repeatable sales process, clear delivery scope and financial controls.',
    icon: '💰',
    track: 'all',
    projectDeliverable:
      'One chosen commercial offer, working demonstration, customer profile, pricing model, outreach assets, proposal, delivery SOP and results dashboard.',
    lessons: [
      {
        id: '9-1',
        title: 'Choose the Business You Will Actually Launch',
        description:
          'Review your portfolio, buyer access, demonstrated skill and delivery burden. Select one primary offer and define what is excluded. Tie the offer to a result you can credibly influence.',
        duration: '11 min',
        practiceTime: '30 min',
        isPreview: true,
        resourcesIncluded: ['Portfolio review worksheet', 'Offer selection guide'],
      },
      {
        id: '9-2',
        title: 'Build Proof Before Making Big Claims',
        description:
          'Create a demonstration, a recorded walkthrough and a transparent pilot case study. Label synthetic examples and unpaid samples. Understand the requirements for using client names, results and testimonials.',
        duration: '12 min',
        practiceTime: '60 min',
        resourcesIncluded: ['Demo recording guide', 'Consent and permission template'],
      },
      {
        id: '9-3',
        title: 'Price for Margin and Responsibility',
        description:
          'Compare fixed projects, retainers, licences and subscriptions. Calculate founder delivery time, revisions, direct costs, support, acquisition and risk. Understand why revenue is not take-home pay and why retainers require continuing value.',
        duration: '13 min',
        practiceTime: '45 min',
        resourcesIncluded: ['Pricing calculator', 'Margin model worksheet'],
      },
      {
        id: '9-4',
        title: 'Find the First Customers',
        description:
          'Build a focused prospect list and choose suitable channels: relevant personal introductions, targeted outreach, marketplaces, useful public demonstrations or agency partnerships. Channel-specific scripts and realistic activity plans included.',
        duration: '13 min',
        practiceTime: '60 min',
        resourcesIncluded: ['Channel comparison guide', 'Outreach scripts', 'Activity tracker'],
      },
      {
        id: '9-5',
        title: 'Run Discovery and Demonstrate Value',
        description:
          'Ask about the current process, failure cost, decision-maker, budget and success criteria. Present a short live demonstration. Handle objections about reliability, privacy, implementation effort and ongoing cost honestly.',
        duration: '14 min',
        practiceTime: '45 min',
        resourcesIncluded: ['Discovery script', 'Demonstration outline', 'Objection handling guide'],
      },
      {
        id: '9-6',
        title: 'Close and Onboard Professionally',
        description:
          'Build a proposal, statement of work, payment schedule, acceptance criteria and client access checklist. Understand ownership, third-party charges, change requests and cancellation. Legal templates require local adaptation.',
        duration: '13 min',
        practiceTime: '45 min',
        resourcesIncluded: ['Proposal template', 'Statement of work template', 'Onboarding pack'],
      },
      {
        id: '9-7',
        title: 'Deliver, Retain and Expand',
        description:
          'Create milestones, progress updates, QA, training and monthly reporting. Track actual outcomes. Identify justified improvements and recurring support opportunities rather than manufacturing busywork.',
        duration: '12 min',
        practiceTime: '30 min',
        resourcesIncluded: ['Delivery SOP template', 'Monthly report template', 'CRM tracker'],
      },
      {
        id: '9-8',
        title: 'Run the 30-Day Launch Sprint',
        description:
          'Week 1: refine offer and proof. Week 2: start targeted customer conversations. Week 3: scope and propose suitable pilots. Week 4: deliver or continue validation, analyse objections and revise. Includes a clear decision process for weak demand, poor margins or delivery overload.',
        duration: '14 min',
        practiceTime: '30 min',
        resourcesIncluded: ['30-day launch planner', 'Weekly review template', 'Launch scorecard'],
      },
    ],
  },
]

// Helper function used by course pages
export function getModule(moduleId: string): Module | undefined {
  return modules.find((m) => m.id === moduleId)
}

export function getLesson(moduleId: string, lessonId: string): Lesson | undefined {
  const module = getModule(moduleId)
  return module?.lessons.find((l) => l.id === lessonId)
}

export function getTotalLessonCount(): number {
  return modules.reduce((acc, m) => acc + m.lessons.length, 0)
}

export function getModuleCount(): number {
  return modules.length
}

// ─── Backward-compatibility aliases ───────────────────────────────────────────
// The course/dashboard/certificate pages import these names.
// Keep them in sync with the exports above.
export const courseModules = modules
export const getTotalLessons = getTotalLessonCount
