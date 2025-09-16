type GreetingProps = {name: string};

export default function Greeting({ name }: GreetingProps){
    return <p>こんにちは、{name} さん！</p>;
}
