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
    description: 'Learn how to turn an idea, evidence, and feedback into the next better version.',
    mission: 'Take a small project idea and make a claim about what it should accomplish. Work with an agent to build it, test it, share it, and decide what to change next.',
    why: 'An agent can make a change quickly. Your job is to figure out whether the change actually works.',
    steps: ['State the question you want to answer.', 'Make a plan and predict what will work.', 'Build a first version with the agent.', 'Test it against a clear success criterion.', 'Share it with another person and collect feedback.', 'Interpret the evidence before choosing the next change.', 'Improve the next version and test again.'],
    success: ['You can state what you wanted the project to do.', 'You can show how you tested it.', 'You can identify a failure or useful feedback.', 'You can explain why your next change is a good experiment.'],
    issue: '“Agent, fix it” is not a diagnosis. Describe what happened, show your evidence, and choose one change to test.',
    reflection: 'What did you believe would work at the start? What evidence changed your mind?'
  },
  {
    number: '02',
    slug: 'choose-your-project',
    title: 'Choose a project that matters to you',
    description: 'Turn an interest, responsibility, or community need into a project brief.',
    mission: 'Choose something you care about and define a useful portfolio project for it. It could be art, construction, music, a community story, a small business, science, or software.',
    why: 'The best agent projects begin with context that the student owns. Your experience is an advantage the agent does not have.',
    steps: ['Name the person or group your project could help.', 'Describe the problem or opportunity in your own words.', 'Choose the smallest useful first version.', 'List what the project must include and what it must not reveal.', 'Write three observable success criteria.', 'Review the brief with a partner before building.'],
    success: ['The project has a real audience or purpose.', 'The first version is small enough to finish.', 'The success criteria can be checked by another person.', 'Private information is identified before it enters the project.'],
    issue: 'A project brief that says “make it cool” cannot be tested. Replace vague goals with something a person can observe or use.',
    reflection: 'What do you know about this project that an agent could not know without you?'
  },
  {
    number: '03',
    slug: 'raspberry-pi',
    title: 'Build the agent environment on a Raspberry Pi',
    description: 'Prepare a small computer where your agent can work, inspect files, and run services.',
    mission: 'Set up a Raspberry Pi as your project machine. Give it a name, connect it to the network, and learn how to tell whether it is ready for work.',
    why: 'The computer is not magic. Understanding where the agent works helps you make safer decisions about files, permissions, and services.',
    steps: ['Connect the Pi and confirm its power and network status.', 'Give the device a memorable name.', 'Create a student workspace with a clear folder structure.', 'Check storage, time, and operating-system updates.', 'Record how to reach the machine and how to shut it down safely.', 'Ask the agent to inspect the environment without changing anything.'],
    success: ['You can identify the Pi and its workspace.', 'You can reach the workspace more than once.', 'You know what the agent is allowed to read or change.', 'You can describe one safe recovery step if setup fails.'],
    issue: 'The agent reports that a directory exists, but you cannot find it. Compare the agent’s working directory with the path you are actually viewing.',
    reflection: 'What would be dangerous for an agent to change on this computer?'
  },
  {
    number: '04',
    slug: 'secure-access',
    title: 'Reach your environment securely with Tailscale',
    description: 'Connect to the Pi from another device without exposing its services to everyone on the internet.',
    mission: 'Set up private access to your Pi and prove which devices can reach it. Treat access as a design decision, not a default setting.',
    why: 'Useful systems need access, but careless access can expose private work. Secure networking is part of making something real.',
    steps: ['Join the supervised camp network.', 'Connect the Pi and your approved device.', 'Test access from the approved device.', 'Test that an unapproved device cannot reach the same service.', 'Write down the difference between private and public access.', 'Ask the agent to explain the network path it is using.'],
    success: ['The approved device can reach the Pi.', 'You can identify which devices are trusted.', 'You can explain why the service is not public yet.', 'You did not paste a private key or invite link into a public project.'],
    issue: 'Tailscale says the device is connected, but the website is unreachable. Separate the network question from the web-server question and test each layer.',
    reflection: 'Who should be able to reach this project, and who should not?'
  },
  {
    number: '05',
    slug: 'install-openclaw',
    title: 'Give your agent a workspace',
    description: 'Install OpenClaw and learn the difference between an agent, a model, a tool, and a workspace.',
    mission: 'Configure an agent that can work inside your project folder. Observe what it can see, what tools it can use, and what it asks you to approve.',
    why: 'An agent is more than a chat box. It can inspect files and operate tools, so its boundaries need to be intentional.',
    steps: ['Open the supervised agent environment.', 'Point it at the student workspace.', 'Ask it to describe its available tools and limits.', 'Give it a read-only inspection task first.', 'Approve one small, reversible file change.', 'Check the change yourself instead of trusting the report.'],
    success: ['You can name the agent’s workspace.', 'You can distinguish a model response from a tool action.', 'You reviewed a change before accepting it.', 'You know how to stop or undo an unwanted action.'],
    issue: 'The agent claims it updated a file, but the file did not change. Check the tool result, path, and permissions before asking it to retry.',
    reflection: 'Which actions should always require your approval?'
  },
  {
    number: '06',
    slug: 'configure-model',
    title: 'Configure a model and evaluate its limits',
    description: 'Connect a model, then learn what it knows, what it guesses, and what it needs from you.',
    mission: 'Run the same small task with your configured model and inspect the result for accuracy, missing context, and invented details.',
    why: 'Model access is powerful, but fluent output is not the same as true output. Evaluation is part of using AI responsibly.',
    steps: ['Confirm which model the agent is using.', 'Give it a task with information you can verify.', 'Look for unsupported claims or missing constraints.', 'Supply better context and compare the second result.', 'Record which parts still require human judgment.', 'Choose a task the agent should not handle alone.'],
    success: ['You can identify the model and its role.', 'You found at least one limitation or uncertainty.', 'You verified a claim instead of accepting it because it sounded confident.', 'You can describe when to ask a person or use another source.'],
    issue: 'The agent invents a link or project detail. Mark the claim as unverified, find the source, and update the work with evidence.',
    reflection: 'What kind of mistake would matter most in your project?'
  },
  {
    number: '07',
    slug: 'communication-channel',
    title: 'Connect a communication channel',
    description: 'Give your agent a way to receive requests and report work without losing control.',
    mission: 'Send a small, reversible request through the camp communication channel and receive a clear status update from the agent.',
    why: 'Real systems have users and operators. Communication is how an idea becomes a request, a test result, or a handoff.',
    steps: ['Use the supervised camp channel.', 'Send a request with a clear goal and boundary.', 'Ask the agent to report what it plans to do before acting.', 'Review the result in the workspace.', 'Send feedback that names the observed problem.', 'Record what should require approval next time.'],
    success: ['The request reaches the correct agent.', 'The agent reports status in understandable language.', 'You can connect a message to a real file or change.', 'You avoided sharing secrets or unnecessary personal information.'],
    issue: 'The message reaches the agent but the wrong workspace changes. Stop the task, identify the workspace mapping, and fix the boundary before continuing.',
    reflection: 'What information does a helpful status update need to include?'
  },
  {
    number: '08',
    slug: 'build-portfolio',
    title: 'Have the agent build your digital headquarters',
    description: 'Turn your project brief into a first portfolio version with the agent as implementation partner.',
    mission: 'Give the agent your project brief and have it build a portfolio that communicates what you care about and what you are making.',
    why: 'The outcome is yours even when the implementation is agent-assisted. You need enough understanding to direct, inspect, and test the result.',
    steps: ['Share the audience, purpose, constraints, and success criteria.', 'Ask the agent to propose a small information structure.', 'Review the structure before implementation.', 'Have the agent build the first version.', 'Open the result in a browser and compare it to the brief.', 'Create the first issue for anything unclear, broken, or incomplete.'],
    success: ['The portfolio communicates the student’s real interest.', 'The main action or message is easy to find.', 'The agent’s changes are visible in the workspace.', 'At least one issue is backed by observable evidence.'],
    issue: 'The site looks polished but does not tell a visitor what to do next. Test it with someone who has not seen the brief.',
    reflection: 'What did the agent implement well, and where did your context matter most?'
  },
  {
    number: '09',
    slug: 'test-and-issues',
    title: 'Test the work and create issues',
    description: 'Turn failures and feedback into clear work that an agent can help investigate.',
    mission: 'Run a structured test of your portfolio, share it with another person, and create an issue that captures one important improvement.',
    why: 'Issues are not punishments. They are a way to preserve evidence, coordinate work, and make improvement concrete.',
    steps: ['Test the required content and links.', 'Test on a phone-sized screen.', 'Ask another person to complete one task without coaching.', 'Record what they expected and what actually happened.', 'Write an issue with steps, evidence, and a desired outcome.', 'Ask the agent for possible causes before choosing a fix.'],
    success: ['The issue can be reproduced or supported by feedback.', 'The issue separates symptoms from guesses about causes.', 'The proposed fix can be tested.', 'You retest after the change and record the result.'],
    issue: 'A report says “navigation is bad.” Ask the reviewer to show where they got stuck and turn that observation into a testable issue.',
    reflection: 'What did another person notice that you stopped seeing because you built the project?'
  },
  {
    number: '10',
    slug: 'github-history',
    title: 'Use GitHub as a project memory',
    description: 'Save decisions, review agent changes, and recover from a version that made things worse.',
    mission: 'Create a readable project history with commits and issues that show what changed, why it changed, and what was verified.',
    why: 'A project history lets you collaborate, learn from mistakes, and undo changes. It makes the agent’s work inspectable instead of temporary.',
    steps: ['Create or open the supervised GitHub repository.', 'Ask the agent to explain the files it plans to commit.', 'Make a focused commit with a useful message.', 'Open an issue for a known problem.', 'Make a change that addresses the issue and review the diff.', 'Practice returning to the last known-good version.'],
    success: ['You can find the current version and its history.', 'You reviewed a diff before accepting it.', 'A commit message explains the change.', 'You know how to recover from a bad change.'],
    issue: 'A large commit changes everything at once. Break the work into smaller changes so you can identify which experiment caused the result.',
    reflection: 'What would your project history teach a new collaborator?'
  },
  {
    number: '11',
    slug: 'deploy-and-maintain',
    title: 'Deploy and maintain the project',
    description: 'Share the right version, monitor it, and make a plan for what happens after the camp ends.',
    mission: 'Deploy the finished portfolio to an appropriate audience, verify it from a fresh device, and write a maintenance plan.',
    why: 'A project is not finished when it works once. It is finished when people can use it safely and you know how to respond when conditions change.',
    steps: ['Choose private or public access based on the project’s information.', 'Deploy the reviewed version.', 'Open it from a fresh browser or device.', 'Verify links, layout, and the project’s privacy boundaries.', 'Write down how to update, back up, and take it offline.', 'Present the result and collect one final piece of feedback.'],
    success: ['The deployed version matches the reviewed version.', 'The audience can use the main feature without coaching.', 'Private information is not exposed.', 'The student has a practical maintenance and rollback plan.'],
    issue: 'The local version works but the deployed version is stale. Compare the deployed commit, build output, and cache before changing the source again.',
    reflection: 'What will you improve next, and how will you know the improvement worked?'
  }
];

export const getLesson = (slug: string) => lessons.find((lesson) => lesson.slug === slug);
