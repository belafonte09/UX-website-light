export const projects = {
  element: [
    {
      name: "How we used AI to simplify Rule Creation",
      date: "2025",
      modernLayout: true,
      problem: "As our business model shifts to a Managing General Agent, our task is to validate Partner data against a set of rules and address any violations efficiently. Creating and managing business rules was complex and time-consuming for non-technical users, requiring extensive documentation and IT support.",
      challenges: [
        "Rules are stored in two separate systems, with no automatic cross-check or synchronization for updates.",
        "The Underwriting team depends heavily on developers to update rules.",
        "There's no automated way to detect violations; checks are performed manually, which is time-consuming."
      ],
      marketResearch: "We explored various available tools, but none suited our specific needs. Most tools were either too expensive or overly complex. Our team was confident we could build a tailored automation solution that fit our unique business model.",
      designSprint: {
        title: "Ideation & Design Sprint",
        description: "I led a design sprint with key stakeholders, product managers, and engineers.",
        outcomes: [
          "We defined the core problem.",
          "We established a clear vision for what we wanted to solve.",
          "We generated enough sketches for the UX team to develop wireframes and conduct initial testing.",
          "Engineers began groundwork for creating a proof of concept."
        ]
      },
      testingResults: {
        title: "Testing and Results",
        description: "Our sketches created the base for the engineering team to rapidly prototype a proof of concept. I tested it with the Underwriting and Claims team.",
        usabilityIssues: [
          { topic: "Case sensitivity", insight: "Needs to recognize lowercase letters", action: "Engineer to implement" },
          { topic: "Field confusion", insight: "Users started in \"Validation rules\" but should use \"ValGTP\"", action: "UI will clarify this" },
          { topic: "Adding rules", insight: "Multiple clicks due to unclear \"type\" field location", action: "Will add visible feedback" },
          { topic: "Default rules", insight: "Generic rules should be pre-loaded—currently not", action: "Next iteration" },
          { topic: "Violation highlights", insight: "Violated fields need clear highlighting for easier identification", action: "Create clear UI with red to indicate violation, green for success" }
        ],
        outOfScope: "A visual way for users to see which rules are generic, which have a validation rule attached to them, and which rules are mandatory."
      },
      prototypeVideoUrl: "/videos/rule-creation-prototype.mov",
      impact: [
        { metric: "Setup time for partner rules", before: "Up to 2 weeks", after: "3 days", description: "Significantly faster onboarding and configuration" },
        { metric: "Manual rule updates", before: "Excel + JSON", after: "Single integrated system", description: "Reduced manual effort and error risk" },
        { metric: "Accuracy of rule testing", before: "Manual checks, prone to errors", after: "Automated testing with data", description: "Increased confidence and fewer violations" }
      ],
      visuals: [
        { type: "design-sprint", title: "Design Sprint Stickies", url: "/images/visuals/valgtp-designsprint-stickies.png" },
        { type: "wireframes", title: "ValGTP First Wireframe", url: "/images/visuals/Val GTP First wireframe.jpg" },
        { type: "wireframes", title: "Design Sprint Wireframe", url: "/images/visuals/design-sprint-wireframe-engineer.png" }
      ],
      relatedProjects: [
        { name: "How We Fixed our Design-Dev Communication Gap", company: "element" },
        { name: "Boosting Payment Success", company: "element" }
      ]
    },
    {
      name: "How We Fixed our Design-Dev Communication Gap",
      date: "2024",
      comingSoon: true,
      problem: "Our Company strategy shifted → my role changed to sole UX/UI designer in one team. Through observation and a Spotify health check our team identified that the Design-to-Developer process was unclear. Result: confusion, lack of communication, and misaligned outputs.",
      workshop: {
        title: "Workshop",
        description: "In true UX Research style I called a mini-workshop with the Product Owner & Engineering Lead.",
        goals: [
          "Identify pain points",
          "Brainstorm solutions",
          "Agree on a clear plan"
        ]
      },
      challenges: [
        "Developers were unclear which design version was final in Figma",
        "Jira tickets were missing design links or had outdated links",
        "No documented naming conventions of business terms (design vs dev mismatch)",
        "1 designer (75% capacity) vs 8 full-time developers → Designer could not keep up with the team output capacity",
        "Poor communication on design compromises → when shipping, designer noticed discrepancies vs the original design",
        "No designer QA process",
        "Unclear where to document components"
      ],
      solutions: {
        title: "Solutions & Improvements",
        figmaImprovements: {
          title: "Figma file confusion",
          points: [
            "Introduced a dedicated \"Developer File\" → only final sketches",
            "Teal background → quick recognition"
          ]
        },
        handoverPractices: {
          title: "Figma handover best practices",
          rules: [
            "@Developers → Question unclear designs immediately (via the Jira Story)",
            "@Designer/PO → Always add correct Figma link in Jira",
            "@Designer/PO → Align naming conventions before handover. Use the \"4 eye principle\" before handing over"
          ]
        },
        additionalAgreements: [
          "Devs handle less complex features independently → Designer only does QA before shipping",
          "Any gaps/issues → logged in Feature Request board for prioritization by PO"
        ]
      },
      outOfScope: [
        "Storyboard as documentation tool → rejected (too much overhead)",
        "Well-documented style guidelines in Figma → sufficient for now"
      ],
      impact: [
        { metric: "Design Location Clarity", before: "Unclear", after: "Always known", description: "Developers always knew where the final design was" },
        { metric: "Implementation Mistakes", before: "Frequent", after: "Reduced", description: "Fewer mistakes in implementation" },
        { metric: "Design Compromise Handling", before: "Ad-hoc", after: "Structured", description: "Designer had structured way to handle design compromises" },
        { metric: "Team Communication", before: "Friction", after: "Improved", description: "Communication improved → less friction" }
      ],
      learnings: [
        "Only by asking and talking, problems can be identified.",
        "Addressing problems early on can save a lot of time in the long run.",
        "As a designer, I wasn't just designing interfaces—I was designing processes."
      ]
    },
    {
      name: "Boosting Payment Success",
      date: "2024",
      modernLayout: true,
      overview: {
        title: "Boosting Payment Success During Dunning",
        subtitle: "",
        description: "Our customers were struggling to track their dunning information by referring to the dunning letters they receive via email. Consequently, they frequently turn to our Partners or reach out to our OPS Team to seek clarification and answers to their inquiries which eventually create manual work of around 6 hours a week.",
        keyPoints: [
          "Poor visibility of key information like due date, amount due and bank details",
          "Lack of transparency about payment status",
          "Unclear next steps: Emails lack a clear call-to-action"
        ],
        challenges: [
          "Reduce customer confusion about payment requirements",
          "Increase first-time payment completion rates",
          "Decrease operational overhead from customer inquiries",
          "Improve overall customer satisfaction with payment process"
        ]
      },
      challenge: {
        title: "The Challenge",
        description: "Design a dunning communication experience that helps customers understand their payment status and take action quickly.",
        successMetrics: [
          "Increase on-time payments",
          "Reduction in support tickets related to billing confusion",
          "Higher click-through rate on \"Pay Now\" buttons"
        ],
        quote: "We keep getting emails from customers saying they don't understand what they owe or how to pay. These reminders are confusing, and we end up handling a lot of avoidable support tickets."
      },
      research: {
        title: "Research",
        description: "Looking at multiple dunning letters from big companies, I collected recurring design patterns.",
        emailResearch: {
          findings: [
            "Clear subject",
            "Prominent, easy, friendly tone",
            "Payment methods visible",
            "Amount due, clear, big",
            "Due date visible",
            "Big CTA with clear action"
          ],
          images: [
            "/images/Featured Projects/boosting payment success/Email Research 1.png",
            "/images/Featured Projects/boosting payment success/Email Research 2.png"
          ]
        },
        uxuiAudit: {
          title: "UX/UI Audit of Current Email",
          findings: [
            "Low contrast",
            "Generic corporate",
            "No visuals regarding the product",
            "No clear due date",
            "Users struggle to know who to pay again",
            "IBAN, Payment details not clearly distinct",
            "Missing clear CTA to Action"
          ],
          image: "/images/Featured Projects/boosting payment success/Email Audit 3.png"
        },
        qualitativeInterviews: {
          title: "Qualitative Interviews",
          insights: [
            {
              quote: "I did not know you could scan the invoice.",
              author: "Marcus Chen"
            },
            {
              quote: "With insurance it is very important to be informed about non-payment because my coverage is at stake.",
              author: "Sarah Rodriguez"
            },
            {
              quote: "I forgot about it, until I received the dunning letter.",
              author: "David Thompson"
            }
          ]
        },
        keyInsightCards: [
          {
            insight: "Users value <strong>convenience and accessibility</strong> when receiving notifications. They prefer channels like email or in-app messages that allow them to read and respond directly from their phones.",
            update: ""
          },
          {
            insight: "Users expect payment details, such as the amount due and due date, to be immediately <strong>visible and easy to find</strong>. When this information isn't clear, they revert to email or the customer portal, and if that fails, they contact customer support, increasing manual workload and frustration.",
            update: ""
          }
        ],
        userJourney: {
          title: "User Journey Map",
          description: "Comprehensive mapping of the customer payment journey from notification to completion"
        },
        impactVsEffort: {
          title: "Impact vs Effort",
          description: "Based on insights from user interviews, the journey map, and feedback from our Customer Service team, we identified the key pain points and opportunities with the highest potential impact."
        }
      },
      emailUpdates: {
        title: "Email updates",
        description: "Leveraging insights from both users and internal stakeholders, I created an email design that streamlines the payment journey and makes next steps clear and effortless.",
        image: "/images/Featured Projects/boosting payment success/Email recommendations 1.png",
        keyUpdates: {
          insight: [
            "Clear Call to Action",
            "Product overview",
            "Deadline highlighted in red"
          ],
          update: ""
        }
      },
      impactSummary: {
        title: "Impact",
        description: "By implementing the design changes to the emails being sent out to customers, we made it significantly easier for the customer to find the information that they needed to complete the payment.",
        highlightCards: [
          { percentage: "70%", description: "REDUCTION IN PROCESS TIME" },
          { percentage: "80%", description: "MORE ACCURACY" }
        ],
        kpiTable: [
          { kpi: "Manual overhead/tickets", before: "6 h/week", after: "2 h/week" },
          { kpi: "Number of tickets", before: "average 30", after: "average 10" }
        ],
        testimonial: {
          quote: "The redesigned dunning emails have significantly reduced customer confusion and support volume. Payment-related inquiries are now much easier to manage, and customers are completing payments more efficiently.",
          author: "Operations Team Lead"
        }
      },
      impact: [
        { metric: "Payment completion rate (first dunning email)", before: "18%", after: "56%", description: "Significantly reducing manual follow-ups and operational overhead" },
        { metric: "Customer queries related to payments", before: "1,200/mo", after: "840/mo", description: "Significantly reduced email queries to the operation team" }
      ],
      videoUrl: "/videos/dunning-before.mov",
      hasInteractivePrototype: true,
      hasAfterPrototype: true,
      problems: [
        "Payment instructions, Amount, IBAN, reference are buried in the text and not visually distinct.",
        "No due date",
        "No clear consequences",
        "No information about the related instalment term/product",
        "No hyperlink to pay or to view account"
      ],
      solutions: [
        "Hyperlink to pay",
        "Higher contrast between text",
        "Clear heading acting as a call to action",
        "Product information is visible and clear",
        "Clear amount to be paid and due date is clear and in red",
        "Banking details are clear and easy to read",
        "Tip for customer to use photo scanning of bank details"
      ]
    },
    {
      name: "Simplifying Compliance Through Better Data Visibility",
      date: "2024",
      overview: {
        title: "Case Study: Simplifying Compliance Through Better Data Visibility",
        subtitle: "Transforming complex insurance compliance data into an intuitive, user-friendly experience",
        description: "In the world of insurance, compliance is everything. Our company works with many distribution partners — each selling policies to customers on our behalf. To ensure every policy sold follows strict rules and regulations, our underwriting team must review a document called a BDX file (Bordereaux file).",
        keyPoints: [
          "Think of it as a giant spreadsheet sent by each partner every month. It lists every policy they sold — who bought it, when, for how much, and under what terms.",
          "The challenge? Every partner structures their data differently. That means before we can even check if the policies follow the rules, our team spends hours cleaning, comparing, and interpreting messy spreadsheets."
        ],
        challenges: [
          "Calculate accurate financial positions",
          "Close the books at the end of each month",
          "Ensure compliance across partners",
          "Provide reliable information to the business"
        ]
      },
      problem: "The existing process was highly manual. Each BDX file had to be checked line by line to confirm that the data followed contract terms, policies were compliant with internal and legal standards, and calculations and totals were accurate. Even small errors could lead to compliance risks or financial inaccuracies.",
      challenge: {
        title: "The Challenge",
        description: "We quickly realized this wasn't just a data problem — it was a usability problem. Our underwriters needed a clear, intuitive way to review, validate, and act on data without relying on IT teams to process or interpret it.",
        painPoints: [
          {
            title: "Manual Process",
            description: "Each BDX file had to be checked line by line"
          },
          {
            title: "Data Validation",
            description: "Confirming data followed contract terms and compliance standards"
          },
          {
            title: "Accuracy Concerns",
            description: "Even small errors could lead to compliance risks or financial inaccuracies"
          }
        ]
      },
      marketResearch: {
        title: "Market Research",
        description: "Our first step was to see if existing software could solve this for us. We explored several compliance and data-validation tools available in the insurance industry.",
        findings: [
          {
            issue: "Structure Mismatch",
            description: "They didn't match the unique structure of our partner data"
          },
          {
            issue: "Technical Complexity",
            description: "They required heavy technical setup and maintenance"
          },
          {
            issue: "Poor UX",
            description: "The user experience was not built for underwriters — it was built for IT people"
          }
        ],
        conclusion: "We decided to build our own internal solution — one that fit our exact workflow and made data validation as straightforward as possible."
      },
      goals: {
        title: "Our Goals",
        description: "We defined clear goals for our product team:",
        objectives: [
          {
            title: "Ingest partner data",
            description: "Seamlessly upload BDX files from multiple partners"
          },
          {
            title: "Cleanse and enrich",
            description: "Automatically detect and correct inconsistencies"
          },
          {
            title: "Empower users",
            description: "Provide an intuitive interface so business users (not IT) could handle data review"
          },
          {
            title: "Ensure compliance",
            description: "Quickly highlight rule violations or contract breaches"
          }
        ],
        success: [
          "Less reliance on IT",
          "Faster month-end processes",
          "Accurate, actionable data"
        ]
      },
      myRole: {
        title: "My Role",
        description: "As the UX Designer, my mission was to:",
        responsibilities: [
          "Map out user journeys and simplify complex workflows",
          "Create intuitive wireframes and prototypes",
          "Conduct usability testing with underwriters and compliance officers",
          "Deliver the final UI using our design system and collaborate closely with developers"
        ],
        focus: "This wasn't just about aesthetics — it was about building trust in data through clear, human-centered design."
      },
      wireframes: {
        title: "Wireframes",
        description: "We started with low-fidelity wireframes to explore:",
        explorations: [
          "How users could upload and preview a BDX file",
          "What an error or compliance violation should look like",
          "How to navigate between partners, months, and datasets",
          "How to visualize results (e.g., violations, summaries, trends)"
        ],
        insights: "The early sketches helped us discuss real user needs and uncover hidden pain points — such as the desire to filter data by severity or export only flagged entries for review.",
        imagePlaceholder: "/images/wireframes/data-viz-wireframes.png"
      },
      testing: {
        title: "Testing & Iteration",
        description: "We ran usability tests with the underwriting team at several stages. Some key insights included:",
        insights: [
          {
            finding: "Clear Language",
            description: "Users needed clear validation messages in plain language (not technical jargon)."
          },
          {
            finding: "Dashboard First",
            description: "They wanted to see summary dashboards before diving into data tables."
          },
          {
            finding: "Transparency",
            description: "They valued transparency — seeing where data was corrected or enriched automatically."
          }
        ],
        improvements: "Each round of feedback led to refinements in navigation, filters, and table layouts. We also introduced visual cues like color-coded statuses (green = compliant, red = violation) to make complex data instantly readable."
      },
      finalUI: {
        title: "Updates & Final UI",
        description: "Using our internal design system, I refined the UI for production:",
        features: [
          "Consistent, clean layout with accessible data tables",
          "Sticky action bars for easy comparison and export",
          "Simple upload workflows with real-time validation feedback",
          "Summary dashboard with clear KPIs and partner insights"
        ],
        handoff: "This version was handed off to developers, ensuring full consistency through design specs and interaction guidelines.",
        imagePlaceholder: "/images/final-ui/data-viz-final.png"
      },
      impact: [
        { metric: "Manual Work Reduction", before: "Hours daily", after: "Minutes daily", description: "No more endless Excel sheets" },
        { metric: "Month-end Close Time", before: "Days", after: "Minutes", description: "Reports generated in minutes instead of days" },
        { metric: "Data Accuracy", before: "Manual validation", after: "Automated detection", description: "Errors and violations surfaced automatically" },
        { metric: "User Empowerment", before: "IT dependent", after: "Self-sufficient", description: "Underwriters can now validate and act on data without needing IT" }
      ],
      keyTakeaway: {
        title: "Key Takeaway",
        message: "This project was about more than just compliance — it was about clarity. When data becomes understandable, people make better decisions.",
        conclusion: "Our BDX validation tool proved that even the most technical workflows can be human-friendly when designed with empathy and purpose."
      },
      modernLayout: true,
      abstractGraphics: true
    }
  ],
  mello: [
    {
      name: "Mobile App Redesign",
      date: "2020",
      problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      solution: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      impact: [
        { metric: "App Store Rating", before: "2.8/5", after: "4.5/5" },
        { metric: "User Retention", before: "34%", after: "72%" },
        { metric: "Daily Active Users", before: "1.2K", after: "3.8K" }
      ],
      pdfUrl: "/pdfs/mello-mobile-app-redesign.pdf"
    }
  ],
  freelance: [
    {
      name: "UX/UI for a smarter bulk merge app",
      date: "2020",
      problem: "Sales teams struggled with inefficient Salesforce data management, requiring manual processes that consumed valuable time and led to errors.",
      solution: "Designed an intuitive UX/UI for a bulk merge tool that streamlined Salesforce operations and reduced manual workload.",
      impact: [
        { metric: "Processing Time", before: "2.5 hrs", after: "30 min" },
        { metric: "Data Accuracy", before: "85%", after: "98%" },
        { metric: "User Satisfaction", before: "2.8/5", after: "4.6/5" }
      ],
      pdfUrl: "/pdfs/freelance/bulk-merge-case-study.pdf"
    },
    {
      name: "Designing a foodsharing experience",
      date: "2020",
      problem: "Food waste and social isolation increased during the pandemic, while people sought meaningful ways to connect with their communities.",
      solution: "Created a food-sharing platform that connects neighbors to share meals, reduce waste, and build community bonds.",
      impact: [
        { metric: "Food Waste Reduction", before: "0%", after: "35%" },
        { metric: "Community Connections", before: "0", after: "150+" },
        { metric: "User Engagement", before: "0%", after: "78%" }
      ],
      pdfUrl: "/pdfs/freelance/appetit-case-study.pdf"
    }
  ]
} as const;