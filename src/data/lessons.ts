export type Lesson = {
  number: string;
  slug: string;
  title: string;
  description: string;
  mission: string;
  why: string;
  steps: string[];
  success: string[];
  issue: string;
  reflection: string;
};

export const lessons: Lesson[] = [
  {
    number: '01',
    slug: 'scientific-method',
    title: 'The scientific method for agentic engineering',
    description: 'Use a question, evidence, and feedback to improve a project.',
    mission: 'Choose a small project and make a clear claim about what it should do. Work with an agent to build it, test it, share it, and choose the next change.',
    why: 'An agent can change a project quickly. You decide whether the change works.',
    steps: ['State the question you want to answer.', 'Make a plan and predict what will work.', 'Build a first version with the agent.', 'Choose a result you can check to decide if it works.', 'Test the project against that result.', 'Share it with another person and collect feedback.', 'Use the evidence to choose one change.', 'Make the change and test again.'],
    success: ['You can state what you wanted the project to do.', 'You can show how you tested it.', 'You can identify a failure or useful feedback.', 'You can explain why your next change is a good experiment.'],
    issue: '“Agent, fix it” does not tell you what went wrong. Describe what happened, show your evidence, and choose one change to test.',
    reflection: 'What did you expect at the start? What evidence changed your mind?'
  },
  {
    number: '02',
    slug: 'choose-your-project',
    title: 'Choose a project that matters to you',
    description: 'Turn an interest, responsibility, or community need into a short project plan.',
    mission: 'Choose something you care about and plan a useful portfolio project. Write a project brief, a short plan that says who it helps, what it does, and how you will test it. Your project could be about art, construction, music, a community story, a small business, science, or software.',
    why: 'You know things about your project that the agent does not. Give the agent that context before it starts building.',
    steps: ['Name the person or group your project could help.', 'Describe the problem or opportunity in your own words.', 'Choose the smallest useful first version.', 'List what the project must include and what it must not reveal.', 'Write three observable success criteria.', 'Review the brief with a partner before building.'],
    success: ['The project has a real audience or purpose.', 'The first version is small enough to finish.', 'The success criteria can be checked by another person.', 'Private information is identified before it enters the project.'],
    issue: 'A plan that says “make it cool” cannot be tested. Replace vague goals with something a person can see or use.',
    reflection: 'What do you know about this project that the agent cannot know without you?'
  },
  {
    number: '03',
    slug: 'raspberry-pi',
    title: 'Build the agent environment on a Raspberry Pi',
    description: 'Prepare a small computer where your agent can work, inspect files, and run services.',
    mission: 'Set up a Raspberry Pi as your project computer. Name it, connect it to the network, and learn how to check that it is ready for work.',
    why: 'The agent works on a real computer. Knowing where it works helps you make safer choices about files, permissions, and services.',
    steps: ['Connect the Pi and confirm its power and network status.', 'Give the device a memorable name.', 'Create a student workspace with a clear folder structure.', 'Check storage, time, and operating-system updates.', 'Record how to reach the machine and how to shut it down safely.', 'Ask the agent to inspect the environment without changing anything.'],
    success: ['You can identify the Pi and its workspace.', 'You can reach the workspace more than once.', 'You know what the agent is allowed to read or change.', 'You can describe one safe recovery step if setup fails.'],
    issue: 'The agent says a folder exists, but you cannot find it. Compare the folder where the agent is working with the folder you are viewing.',
    reflection: 'What would be dangerous for an agent to change on this computer?'
  },
  {
    number: '04',
    slug: 'secure-access',
    title: 'Reach your environment securely with Tailscale',
    description: 'Connect to the Pi from another device without exposing its services to everyone on the internet.',
    mission: 'Set up private access to your Pi and check which devices can reach it. Decide who should have access before you open a service.',
    why: 'People need access to useful systems. The wrong settings can expose private work. Secure networking is part of building a real system.',
    steps: ['Join the supervised camp network.', 'Connect the Pi and your approved device.', 'Test access from the approved device.', 'Test that an unapproved device cannot reach the same service.', 'Write down the difference between private and public access.', 'Ask the agent to explain the network path it is using.'],
    success: ['The approved device can reach the Pi.', 'You can identify which devices are trusted.', 'You can explain why the service is not public yet.', 'You did not paste a private key or invite link into a public project.'],
    issue: 'Tailscale says the device is connected, but you cannot open the website. Test the network and the web server as two separate questions.',
    reflection: 'Who should be able to reach this project, and who should not?'
  },
  {
    number: '05',
    slug: 'install-openclaw',
    title: 'Give your agent a workspace',
    description: 'Install OpenClaw and learn the difference between an agent, a model, a tool, and a workspace.',
    mission: 'Configure an agent that can work inside your project folder. Check what it can see, which tools it can use, and which actions need your approval.',
    why: 'An agent can inspect files and use tools. Set clear limits before you let it work.',
    steps: ['Open the supervised agent environment.', 'Point it at the student workspace.', 'Ask it to describe its available tools and limits.', 'Give it a read-only inspection task first.', 'Approve one small, reversible file change.', 'Check the change yourself instead of trusting the report.'],
    success: ['You can name the agent’s workspace.', 'You can distinguish a model response from a tool action.', 'You reviewed a change before accepting it.', 'You know how to stop or undo an unwanted action.'],
    issue: 'The agent says it updated a file, but the file did not change. Check the tool result, file path, and permissions before you ask it to try again.',
    reflection: 'Which actions should always require your approval?'
  },
  {
    number: '06',
    slug: 'configure-model',
    title: 'Configure a model and evaluate its limits',
    description: 'Connect a model, then learn what it knows, what it guesses, and what it needs from you.',
    mission: 'Run the same small task with your model. Check the result for correct facts, missing context, and made-up details.',
    why: 'A model can sound sure and still be wrong. Check its work before you use it.',
    steps: ['Confirm which model the agent is using.', 'Give it a task with information you can verify.', 'Look for unsupported claims or missing constraints.', 'Supply better context and compare the second result.', 'Record which parts still require human judgment.', 'Choose a task the agent should not handle alone.'],
    success: ['You can identify the model and its role.', 'You found at least one limitation or uncertainty.', 'You verified a claim instead of accepting it because it sounded confident.', 'You can describe when to ask a person or use another source.'],
    issue: 'The agent invents a link or project detail. Mark it as unverified, find the real source, and update the work with evidence.',
    reflection: 'What kind of mistake would matter most in your project?'
  },
  {
    number: '07',
    slug: 'communication-channel',
    title: 'Connect a communication channel',
    description: 'Give your agent a way to receive requests and report work without losing control.',
    mission: 'Send a small request through the camp communication channel. Make sure the request can be undone, then ask the agent for a clear status update.',
    why: 'Real systems have users and operators. Clear messages turn an idea into work that someone can check.',
    steps: ['Use the supervised camp channel.', 'Send a request with a clear goal and boundary.', 'Ask the agent to report what it plans to do before acting.', 'Review the result in the workspace.', 'Send feedback that names the observed problem.', 'Record what should require approval next time.'],
    success: ['The request reaches the correct agent.', 'The agent reports status in understandable language.', 'You can connect a message to a real file or change.', 'You avoided sharing secrets or unnecessary personal information.'],
    issue: 'The message reaches the agent, but it changes the wrong workspace. Stop the task. Find the workspace mapping and fix it before you continue.',
    reflection: 'What information does a helpful status update need to include?'
  },
  {
    number: '08',
    slug: 'build-portfolio',
    title: 'Have the agent build your digital headquarters',
    description: 'Turn your project brief into a first portfolio version with the agent as implementation partner.',
    mission: 'Give the agent your project brief. Have it build a portfolio that shows what you care about and what you are making.',
    why: 'The portfolio is yours, even when the agent writes the code. You must still direct, inspect, and test the result.',
    steps: ['Share the audience, purpose, constraints, and success criteria.', 'Ask the agent to propose a small information structure.', 'Review the structure before implementation.', 'Have the agent build the first version.', 'Open the result in a browser and compare it to the brief.', 'Create the first issue for anything unclear, broken, or incomplete.'],
    success: ['The portfolio communicates the student’s real interest.', 'The main action or message is easy to find.', 'The agent’s changes are visible in the workspace.', 'At least one issue is backed by observable evidence.'],
    issue: 'The site looks polished, but visitors do not know what to do next. Test it with someone who has not seen the brief.',
    reflection: 'What did the agent implement well, and where did your context matter most?'
  },
  {
    number: '09',
    slug: 'test-and-issues',
    title: 'Test the work and create issues',
    description: 'Turn failures and feedback into clear work that an agent can help investigate.',
    mission: 'Test your portfolio, share it with another person, and write an issue for one important improvement.',
    why: 'An issue records what happened. It helps you keep evidence, plan a fix, and check the result later.',
    steps: ['Test the required content and links.', 'Test on a phone-sized screen.', 'Ask another person to complete one task without coaching.', 'Record what they expected and what actually happened.', 'Write an issue with steps, evidence, and a desired outcome.', 'Ask the agent for possible causes before choosing a fix.'],
    success: ['The issue can be reproduced or supported by feedback.', 'The issue separates symptoms from guesses about causes.', 'The proposed fix can be tested.', 'You retest after the change and record the result.'],
    issue: 'A report says “navigation is bad.” Ask the reviewer where they got stuck. Turn that observation into a testable issue.',
    reflection: 'What did another person notice that you stopped seeing because you built the project?'
  },
  {
    number: '10',
    slug: 'github-history',
    title: 'Use GitHub as a project memory',
    description: 'Save decisions, review agent changes, and recover from a version that made things worse.',
    mission: 'Create a project history with commits and issues. Use it to show what changed, why it changed, and what you checked.',
    why: 'Project history helps you work with others, learn from mistakes, and undo a bad change. It also lets you inspect the agent’s work.',
    steps: ['Create or open the supervised GitHub repository.', 'Ask the agent to explain the files it plans to commit.', 'Make a focused commit with a useful message.', 'Open an issue for a known problem.', 'Make a change that addresses the issue and review the diff.', 'Practice returning to the last known-good version.'],
    success: ['You can find the current version and its history.', 'You reviewed a diff before accepting it.', 'A commit message explains the change.', 'You know how to recover from a bad change.'],
    issue: 'A large commit changes everything at once. Make smaller commits so you can tell which change caused the result.',
    reflection: 'What would your project history teach a new collaborator?'
  },
  {
    number: '11',
    slug: 'deploy-and-maintain',
    title: 'Deploy and maintain the project',
    description: 'Share the right version, monitor it, and make a plan for what happens after the camp ends.',
    mission: 'Deploy the finished portfolio for the right audience. Check it from a fresh device, then write a plan for keeping it working.',
    why: 'A project is not finished because it worked once. People must be able to use it safely, and you need a plan for changes and failures.',
    steps: ['Choose private or public access based on the project’s information.', 'Deploy the reviewed version.', 'Open it from a fresh browser or device.', 'Verify links, layout, and the project’s privacy boundaries.', 'Write down how to update, back up, and take it offline.', 'Present the result and collect one final piece of feedback.'],
    success: ['The deployed version matches the reviewed version.', 'The audience can use the main feature without coaching.', 'Private information is not exposed.', 'The student has a practical maintenance and rollback plan.'],
    issue: 'The local version works, but the deployed version is old. Compare the deployed commit, build output, and cache before you change the source again.',
    reflection: 'What will you improve next, and how will you know the improvement worked?'
  }
];

export const getLesson = (slug: string) => lessons.find((lesson) => lesson.slug === slug);
