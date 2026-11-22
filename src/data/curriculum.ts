export type Level='A1'|'A2'|'B1'|'B2'|'C1'|'C2';
export type Goal='work'|'travel'|'leisure'|'fluency';
export type Question={id:string;type:'choice'|'write'|'listen';prompt:string;answer:string;options?:string[];speech?:string;explanation:string};
export type Lesson={id:string;level:Level;unit:number;title:string;description:string;goals:Goal[];questions:Question[]};
export const levels:Level[]=['A1','A2','B1','B2','C1','C2'];
export const goalNames:Record<Goal,string>={work:'Trabalho',travel:'Viagens',leisure:'Lazer',fluency:'Fluência completa'};
export const levelNames:Record<Level,string>={A1:'Iniciante',A2:'Básico',B1:'Intermediário',B2:'Intermediário superior',C1:'Avançado',C2:'Proficiência'};
export const lessons:Lesson[]=[
{id:'a1-hello',level:'A1',unit:1,title:'Primeiros encontros',description:'Cumprimente e apresente-se.',goals:['work','travel','leisure','fluency'],questions:[
{id:'h1',type:'choice',prompt:'Como dizer “Olá, meu nome é Ana”?',answer:'Hello, my name is Ana.',options:['Hello, my name is Ana.','Goodbye, I am Ana.','Where is Ana?'],explanation:'“My name is” é usado para apresentar seu nome.'},
{id:'h2',type:'listen',prompt:'Ouça e escolha a frase correta.',speech:'Nice to meet you.',answer:'Nice to meet you.',options:['Nice to meet you.','I need a ticket.','See you tomorrow.'],explanation:'“Nice to meet you” significa “Prazer em conhecer você”.'},
{id:'h3',type:'write',prompt:'Escreva em inglês: “Bom dia”',answer:'Good morning',explanation:'“Good morning” é usado pela manhã.'}]},
{id:'a1-daily',level:'A1',unit:2,title:'Meu dia a dia',description:'Fale sobre hábitos e horários.',goals:['leisure','fluency','work','travel'],questions:[
{id:'d1',type:'choice',prompt:'Qual frase significa “Eu trabalho todos os dias”?',answer:'I work every day.',options:['I work every day.','I worked yesterday.','I am working tomorrow.'],explanation:'O presente simples descreve hábitos.'},
{id:'d2',type:'write',prompt:'Escreva em inglês: “Eu gosto de café”',answer:'I like coffee',explanation:'“I like” expressa preferência.'},
{id:'d3',type:'listen',prompt:'Ouça e escolha a frase correta.',speech:'I wake up at seven.',answer:'I wake up at seven.',options:['I wake up at seven.','I go home at eleven.','I sleep at nine.'],explanation:'“Wake up” significa acordar.'}]},
{id:'a1-travel',level:'A1',unit:3,title:'No aeroporto',description:'Peça ajuda e encontre seu portão.',goals:['travel','fluency'],questions:[
{id:'t1',type:'choice',prompt:'Como perguntar “Onde fica o portão cinco”?',answer:'Where is gate five?',options:['Where is gate five?','What is my name?','When is breakfast?'],explanation:'“Where is” pergunta onde algo está.'},
{id:'t2',type:'write',prompt:'Escreva em inglês: “Eu preciso de ajuda”',answer:'I need help',explanation:'“I need” significa “Eu preciso”.'},
{id:'t3',type:'listen',prompt:'Ouça e escolha a frase correta.',speech:'May I see your passport?',answer:'May I see your passport?',options:['May I see your passport?','Can you open the window?','Is the hotel nearby?'],explanation:'Pedido educado para apresentar o passaporte.'}]},
{id:'a1-work',level:'A1',unit:4,title:'No trabalho',description:'Use frases profissionais essenciais.',goals:['work','fluency'],questions:[
{id:'w1',type:'choice',prompt:'Como dizer “Eu tenho uma reunião”?',answer:'I have a meeting.',options:['I have a meeting.','I am a meeting.','I make a meeting yesterday.'],explanation:'“Have a meeting” é a expressão habitual.'},
{id:'w2',type:'write',prompt:'Escreva em inglês: “Eu trabalho aqui”',answer:'I work here',explanation:'“Here” significa “aqui”.'},
{id:'w3',type:'listen',prompt:'Ouça e escolha a frase correta.',speech:'Please send me an email.',answer:'Please send me an email.',options:['Please send me an email.','Please open the door.','Please take a seat.'],explanation:'“Send me an email” significa “Envie-me um e-mail”.'}]},
{id:'a2-plans',level:'A2',unit:1,title:'Planos e experiências',description:'Fale sobre passado e futuro.',goals:['work','travel','leisure','fluency'],questions:[
{id:'p1',type:'choice',prompt:'Qual frase está no passado?',answer:'I visited London last year.',options:['I visited London last year.','I visit London every year.','I will visit London.'],explanation:'“Visited” é o passado regular de “visit”.'},
{id:'p2',type:'write',prompt:'Escreva em inglês: “Eu vou estudar amanhã”',answer:'I will study tomorrow',explanation:'“Will” pode indicar uma decisão ou previsão futura.'}]},
{id:'b1-opinion',level:'B1',unit:1,title:'Expresse sua opinião',description:'Justifique preferências e decisões.',goals:['work','travel','leisure','fluency'],questions:[
{id:'o1',type:'choice',prompt:'Qual frase apresenta uma opinião com justificativa?',answer:'I prefer trains because they are comfortable.',options:['I prefer trains because they are comfortable.','The train leaves at six.','Where is the train?'],explanation:'“Because” introduz uma justificativa.'},
{id:'o2',type:'write',prompt:'Escreva em inglês: “Eu acho que é importante”',answer:'I think it is important',explanation:'“I think” introduz uma opinião.'}]},
{id:'b2-debate',level:'B2',unit:1,title:'Argumentos e contrapontos',description:'Organize argumentos mais complexos.',goals:['work','travel','leisure','fluency'],questions:[
{id:'b21',type:'choice',prompt:'Qual conector introduz contraste?',answer:'Nevertheless',options:['Nevertheless','Furthermore','Therefore'],explanation:'“Nevertheless” indica contraste ou ressalva.'}]},
{id:'c1-nuance',level:'C1',unit:1,title:'Nuances e precisão',description:'Use construções avançadas.',goals:['work','travel','leisure','fluency'],questions:[
{id:'c11',type:'choice',prompt:'Qual expressão indica uma ressalva formal?',answer:'Notwithstanding these concerns',options:['Notwithstanding these concerns','As soon as possible','By the way'],explanation:'“Notwithstanding” significa “apesar de”.'}]},
{id:'c2-style',level:'C2',unit:1,title:'Registro e sutileza',description:'Interprete escolhas estilísticas sofisticadas.',goals:['work','travel','leisure','fluency'],questions:[
{id:'c21',type:'choice',prompt:'Qual opção comunica discordância diplomática?',answer:'I would respectfully challenge that assumption.',options:['I would respectfully challenge that assumption.','That is nonsense.','You are completely wrong.'],explanation:'A formulação questiona uma premissa sem atacar o interlocutor.'}]}
];
export const dictionary=[{en:'hello',pt:'olá',example:'Hello, how are you?'},{en:'meeting',pt:'reunião',example:'I have a meeting today.'},{en:'airport',pt:'aeroporto',example:'The airport is nearby.'},{en:'because',pt:'porque',example:'I study because I want to travel.'},{en:'comfortable',pt:'confortável',example:'This chair is comfortable.'},{en:'nevertheless',pt:'no entanto',example:'It was difficult; nevertheless, we succeeded.'},{en:'passport',pt:'passaporte',example:'Where is my passport?'},{en:'improve',pt:'melhorar',example:'I want to improve my English.'}];
