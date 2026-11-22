import type {Goal,Level,Lesson,Question} from '../data/curriculum';
export type Profile={name:string;goal:Goal;startingLevel:Level;minutes:number};
export type Result={score:number;total:number;completedAt:string;mistakes:string[]};
export type State={profile:Profile|null;results:Record<string,Result>;examResults:Record<string,Result>;xp:number;reviewIds:string[]};
const KEY='english-go-v1';
export const emptyState=():State=>({profile:null,results:{},examResults:{},xp:0,reviewIds:[]});
export function load():State{try{const raw=localStorage.getItem(KEY);if(!raw)return emptyState();const value=JSON.parse(raw);if(!value||typeof value!=='object')return emptyState();return {...emptyState(),...value};}catch{return emptyState();}}
export function save(s:State){localStorage.setItem(KEY,JSON.stringify(s));}
export function normalize(s:string){return s.toLocaleLowerCase('en-US').replace(/[.!?,']/g,'').replace(/\s+/g,' ').trim();}
export function check(q:Question,answer:string){return normalize(q.answer)===normalize(answer);}
export function passed(result?:Result){return !!result&&result.total>0&&result.score/result.total>=0.8;}
export function unlocked(lesson:Lesson,ordered:Lesson[],results:State['results']){const index=ordered.findIndex(l=>l.id===lesson.id);return index===0||ordered.slice(0,index).every(l=>passed(results[l.id]));}
export function finish(state:State,lesson:Lesson,answers:Record<string,string>):State{const score=lesson.questions.filter(q=>check(q,answers[q.id]||'')).length;const mistakes=lesson.questions.filter(q=>!check(q,answers[q.id]||'')).map(q=>q.id);const old=state.results[lesson.id];return {...state,xp:state.xp+(old?5:score*10),results:{...state.results,[lesson.id]:{score,total:lesson.questions.length,completedAt:new Date().toISOString(),mistakes}},reviewIds:[...new Set([...state.reviewIds.filter(id=>!lesson.questions.some(q=>q.id===id)),...mistakes])]};}

export function examPassed(result?:Result){return !!result&&result.total>0&&result.score/result.total>=.8;}
export function gradeExam(questions:Question[],answers:Record<string,string>):Result{return {score:questions.filter(q=>check(q,answers[q.id]||'')).length,total:questions.length,completedAt:new Date().toISOString(),mistakes:questions.filter(q=>!check(q,answers[q.id]||'')).map(q=>q.id)};}
export function levelAccessible(level:Level,starting:Level,examResults:State['examResults']){const order:Level[]=['A1','A2','B1','B2','C1','C2'];const index=order.indexOf(level),base=order.indexOf(starting);return index<=base||order.slice(base,index).every(l=>examPassed(examResults['exam-'+l]));}
