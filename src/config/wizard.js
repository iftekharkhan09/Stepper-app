import CrewForm from "../Movies/CrewForm";

const wizardConfig = [
  {
    id: 0,
    title: 'Development',
    text: 'The start of a project varies, but generally will begin with development of a script, be that an existing script, a book, a brief story outline. Development may also start with a Director and/or Writer pitching an idea to a Producer.',
    component: CrewForm,
  },
  {
    id: 1,
    title: 'Pre-Production',
    text: 'This is the phase where you would narrow down the options of the production. It is where all the planning takes place before the camera rolls and sets the overall vision of the project. Pre-production also includes working out the shoot location and casting. The Producer will now hire a Line Manager or Production Manager to create the schedule and budget for the film.',
    component: null,

  },
  {
    id: 2,
    title: 'Production',
    text: 'During this phase it is key to keep planning ahead of the daily shoot. The primary aim is to stick to the budget and schedule, this requires constant vigilance. Communication is key between location, set, office, production company, distributors – in short, all parties involved',
    component: null,

  },
  {
    id: 3,
    title: 'Principal Photography',
    text: 'This is when the camera rolls. It is nearly always the most expensive phase of film production, due to actor, director, and set crew salaries, as well as the costs of certain shots, props, and on-set special effects. Everything that has happened up to this point is to make principal photography go as smoothly and efficiently as possible. Communication between all parties is crucial during the shoot and the production must maintain a full set of records and strive to remain on time and on budget.',
    component: null,

  },
  {
    id: 4,
    title: 'Wrap',
    text: 'The period immediately after shooting ends. It is when we strike (dismantle) the set and clear the location. Everything must be returned in good order to suppliers and there must be a full set of records of the shoot.',
    component: null,

  },
  {
    id: 5,
    title: 'Post-Production',
    text: 'This stage starts when principal photography ends, but they may overlap. The bulk of post-production consists of reviewing the footage and assembling the movie – editing. There will be contributions as required from Visual Effects (VFX), Music and Sound Design. The picture will now be locked and delivery elements will be created. Further information on Post Production can be found later on in Week 1 of the course.',
    component: null,

  },
  {
    id: 6,
    title: 'Distribution',
    text: 'Once the film is completed, it must be distributed. This is how producers make their money back and a considerable amount of time and energy will be invested to secure the right distribution deals for their projects. The film will go into the cinema and/or be distributed via various platforms such as Amazon Prime, Netflix, and HBO etc.',
    component: null,

  },
]
export default wizardConfig;