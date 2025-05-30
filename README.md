# Course Detail Page with AI Summarizer – Next.js + TypeScript (TSX) + Tailwind CSS

This project demonstrates a **Course Detail Page** with dynamic routing in **Next.js**, simulating AI-powered content summarization for learning content. It is fully implemented with **TypeScript (TSX)** and leverages **Tailwind CSS** for styling.

### Assumptions Made

> Dummy Course Data is hardcoded in the project (e.g., course-1, course-2).
> The AI Summarizer is simulated with a local /api/summarize route returning a hardcoded summary based on the course title.
> Styling is implemented with Tailwind CSS, providing utility-first classes for layout, spacing, and design.
> Routing uses Next.js file-based dynamic routing

### Design Decisions & Trade-offs

> Dynamic Routing: Implemented using [courseId].tsx for dynamic course detail pages.
> TypeScript (TSX): Strong typing is used throughout the project, including:
> Props and state definitions
> API response types (e.g., summary response)
> Component types for Next.js pages and functional components
> Simulated API: The /api/summarize endpoint is mocked with a hardcoded summary string for demonstration purposes.
> Tailwind CSS: Used for responsive and consistent design.
> No Backend: All data and APIs are mocked within Next.js.

### AI Integration Simulation

> The button "Ask AI to Summarize This Content" triggers a POST request to /api/summarize.
> This API returns a simple, hardcoded summary like:
> "This content discusses the key principles of [Course Title]."
> This demonstrates how a real LLM integration (e.g., OpenAI's GPT) would work in production.

### AI Prompting & Efficiency

I used ChatGPT (GPT-4) to assist in:

- Improving Tailwind CSS layout and responsiveness.
- Implementing **TypeScript types** for props, API responses, and course data

### Example Prompts Used:

1️⃣ "Provide TypeScript types for course details and the summary response structure."  
2️⃣ "Suggest Tailwind CSS classes for a clean course details layout with a summary section."

Run App: npm run dev
