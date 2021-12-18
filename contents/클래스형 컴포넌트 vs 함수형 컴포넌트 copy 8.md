---
date: "2021-08-02"
title: "클래스형 컴포넌트 vs 함수형 컴포넌트"
categories: ["React"]
summary: ""
thumbnail: "./R1280x0.jpeg"
---

리액트에서 컴포넌트를 선언하는 방식에는 클래스형 컴포넌트와 함수형 컴포넌트 두 가지가 있다.

과거에는 클래스형 컴포넌트를 주로 사용했지만, 2019년 v16.8부터 함수형 컴포넌트에 리액트 훅(Hook)을 지원하며 현재 리액트 공식 문서에서는 함수형 컴포넌트 사용을 권장하고 있다.

하지만, 아직 사용하고 있는 곳들이 있어 유지보수를 위해 두 가지 방식 모두 알고는 있어야 한다.

## 클래스형 컴포넌트

기본적으로 함수형 컴포넌트와 동작은 같지만, 클래스형 컴포넌트는 보다 더 많은 기능을 제공해 주는 것이 함수형 컴포넌트와의 차이점이다. state를 이용해 상태를 나타내거나 component lifecyle에 정의된 메서드(componentWillMount(), componentDidMount() 등)을 이용해 원하는 순서에 특정한 동작을 하도록 할 수 있다.

메모리 자원을 함수형 컴포넌트보다 더 사용한다.

```
import React, {Component} from 'react';

class App extends Component {
	state = {

    };
	render() {

    	const name = 'react';
    	return (
        	<div>
               	 {name}
                </div>
                )
    }

 export default App;
```

## 함수형 컴포넌트

리액트 v16.8 이전에는 state나 lifecycle에 정의된 메서드를 사용할 수 없어서 비교적 간단한 동작을 하는데에 사용했다.

이후 Hook을 이용해 함수형 컴포넌트에서도 클래스형 컴포넌트처럼 여러가지 동작을 할 수 있게 됐다.

state는 useState를, lifecyle 메서드인 componentWillMount(), componentDidMount() 등은 useEffect()로

메모리 자원을 클래스형 컴포넌트보다 덜 사용하며, 컴포넌트 선언이 편하다.

```
import React from 'react';
import './App.css';

function App() {
	let [state, setState] = useState();
	const name = 'react';

    useEffect(function(){
    /.../
    },[]);

	return <div>{name}</div>
 }

 export default App;
```
