const createAction = (type: string, payload?: any) => {
    return {
      type,
      payload, // be undefined if not pass
    };
  };
  
  export default createAction;
  