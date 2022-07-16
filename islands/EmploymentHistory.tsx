/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export interface Employment {
    company: string;
    jobTitle: string;
    startTime: string;
    endTime: string | undefined;
    location: string;
    details: string[];
}

function DetailItem(props: { detail: string }){
    return <li>{ props.detail }</li>;
}

function EmploymentItem(props: { job: Employment }){
    let job = props.job;
    return (<div  class={tw`mb-10`}>
        <h2 class={tw`text-2xl`}>{ job.company }</h2>
        <h3 class={tw`text-lg italic`}>{ job.jobTitle }</h3>
        <h3 class={tw`text-lg italic mb-2`}>{ job.location }; {job.startTime} - {job.endTime ? job.endTime : 'Present' } </h3>
        <ul class={tw`list-disc ml-8`}>
            { (job.details || []).map(detail => <DetailItem detail={detail} />)}
        </ul>
    </div>)
}

export default function EmploymentHistory(props: { history: Employment[] }){
    return(
        <div>
            <h1 class={tw`text-3xl text-center mb-4`}>Employment History</h1> 
            { (props.history || []).map(job => <EmploymentItem job={job} /> )}
        </div>
    );
}