const s=e=>`
		<${e} v-bind="args" @update:is-selected="onIsSelectedUpdated"/>`,l=(e,t)=>({size:{control:"select",options:Object.values(e)},label:{control:"text"},isSelected:{control:"boolean"},state:{control:"select",options:Object.values(t)}}),a=(e,t)=>({label:"Example label",isSelected:!1,size:e.SMALL,state:t.DEFAULT});export{l as a,a as b,s as t};
