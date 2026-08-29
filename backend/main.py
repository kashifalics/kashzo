from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title='Kashzo AI Backend', version='0.1.0')


class ChatRequest(BaseModel):
    message: str


@app.get('/health')
def health() -> dict[str, str]:
    return {'status': 'ok'}


@app.post('/chat')
def chat(request: ChatRequest) -> dict[str, object]:
    prompt = (request.message or '').strip()
    if not prompt:
        return {'answer': 'Please provide a project brief.'}

    lowered = prompt.lower()
    if 'ai' in lowered or 'machine learning' in lowered:
        return {
            'answer': 'AI works well when the goal is a measurable business improvement or operational gain. We recommend narrowing the specific workflow, identifying the data source, and testing a realistic use case before full deployment.',
            'sources': ['AI strategy', 'Solution design', 'Discovery workshop'],
        }

    if 'website' in lowered or 'saas' in lowered or 'web' in lowered:
        return {
            'answer': 'Web product work usually starts with user journeys, system data needs, and technical integrations. We map the product, architecture, and deployment approach before building the first production version.',
            'sources': ['Web architecture', 'Product planning', 'Delivery roadmap'],
        }

    if 'mobile' in lowered or 'app' in lowered:
        return {
            'answer': 'Mobile products need a clear product scope, device requirements, and backend strategy. We can help choose the right technology approach and user experience for launch and scale.',
            'sources': ['Mobile strategy', 'App architecture', 'MVP design'],
        }

    return {
        'answer': 'That sounds like a solid product opportunity. The next step is usually a short discovery process to clarify goals, constraints, and the ideal delivery timeline.',
        'sources': ['Discovery', 'Product scoping', 'Project planning'],
    }
