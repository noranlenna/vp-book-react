import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

function Info() {
  const [state, dispatch] = useReducer(reducer, { name: "", nickname: "" });
  const { name, nickname } = state;
  const handleOnChage = (e) => {
    dispatch(e.target);
  };
  return (
    <div>
      <div className="">
        <input type="text" name="name" value={name} onChange={handleOnChage} />
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={handleOnChage}
        />
      </div>
      <div className="">
        <div className="">
          <b>이름 : </b> {name}
        </div>
				<div className="">
					<b>닉네임 : </b>
					{nickname}
				</div>
      </div>
    </div>
  );
}

export default Info;
