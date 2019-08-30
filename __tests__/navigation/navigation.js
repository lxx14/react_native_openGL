 export const mockNavigationProps = {
    navigation: {
        state: { params: {
            title: 'title',
            currencyFrom: 'currencyFrom',
            currencyTo: 'currencyTo',
            language: 'EN'
        } },
        dispatch: jest.fn(),
        goBack: jest.fn(),
        dismiss: jest.fn(),
        navigate: ()=>{},
        openDrawer: jest.fn(),
        closeDrawer: jest.fn(),
        toggleDrawer: jest.fn(),
        getParam: jest.fn(),
        setParams: jest.fn(),
        addListener: jest.fn(),
        push: jest.fn(),
        replace: jest.fn(),
        pop: jest.fn(),
        popToTop: jest.fn(),
        isFocused: jest.fn(),
        dangerouslyGetParent: ()=>{ return { dangerouslyGetParent: () => { return { dangerouslyGetParent: () => { return { addListener: jest.fn(), } } } }} },
    }
};