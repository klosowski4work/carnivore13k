import { get, append, addAsset } from '../app/utils';

const assets = get('div');
assets.className = 'assets';
append(document.body, assets).id = 'assets';

export function addAssets() {
    return new Promise((resolve) => {
        addAsset('base', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAACABAMAAABaeDKtAAAAIVBMVEUAAABAQEC/v7+ZmZllZWXf399JSUn6+vrX19d9fX1BQUG33NESAAAAAXRSTlMAQObYZgAAAvlJREFUWMPtll1u1DAUhcfSLMB/XYCvm4J4czIIHsed2UCDglQeK7EB2AGsoRtAYp8kTZtzb24rqEAIlebp+nzn2olnbJ3Nk3mMc/anIDR9kboGph2GbIWugWmGobdS14CGgWSDBoGanorQNYgtUa5C18BMtRW6BuZAtLNKB5jbu64qHQAbKHUNTCAq9r4d90TuruyIunQ7cERpmSiPwN6Wk6m9HYz1WKJ7V2Z9Ny13mEk4sFnDBOpc1qmOc0ec6nJnQrcvniiFhFmFKd6YYp1Msd6YKjOZHEbg5tpOJmPnjxvr0tq7l83t8qle1tNrzB2xeIASUKdQ3bL9FUCYyvh2jzKZGgoA6lCifaTJRYD9FnUVB9UsH+Esrzf/4/Nrl9gwFKlrYF7T8M5KHYCd/2EvdQ3In33cS12D1L78vmrQoJ6/uNYNAMuJtEoHmMmxKytdg41zSldgE2i/0jUwxe+FDtDC5GGCvgbBiwaYYmGmc9SdF8tZmNICtmK5Fkc7sFlD4iaK7NR63OOFYAp9AWiJLd1YmPIOoAWIHTP5HGE6MFNpmeki4jfCNwiTOS/ChEnr4QJ7Zk29z3S0vMMahzXYieIDcRydk4Mn9fzt/ESk8pMCND6yQYNwdnV2VYSuQXz77dXXKnQNzJvry89W6wDzv7ffWa0DzKclV60DYAOh/05+avoH8lPTIz81PfJT048lupGfmh75ic0aRoD81PTIT2NdmAn5qemRn1Ym5KemR37ipvpgfsLFFWtulzN/IutYca96gBJQp1Dtn89P7uFo5J7zk37+2fw00Co/abAdiLIVugbb91eJVg0afPiS/apBg8tPp1E2aGCISpW6BpvQHZUOgL1RugJbKkpXYJuC5TpAZiAlq3QFUpENGHQAp8wUquXLITN5mIxYLvvCutlBzcxEAfd4CuxwEkymZ0tQRkNoCjN1FXVGw6FlphyYaQdTbZM04W03eKcTmE52Ee3CFE6Zbo73maI1nUXHxvEBu4awgo5MMlr9ALYh0E4fpvVoAAAAAElFTkSuQmCC');
        addAsset('pants', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAACABAMAAABaeDKtAAAAFVBMVEUAAAAvLy9WVlYUFBRwcHAcHBw2NjYwbVZvAAAAAXRSTlMAQObYZgAAAR9JREFUWMPtlkGKhDAURI2ZAyQhs/cHDxAI9noULzCIfYFm7n+FcWOqhJahGVw0/MJF1f8v4Kr4jUqlukJmN37T7t0BoUVISQ7jZ4soYeQ5IFrEo38RMucQ/t0ueBGE/ZABleGx259s7/vmtpTcQKVUPm8fpiqV6n8Kp+XEUPfhnr/uO/jUA2rJh9nXYNIMHxiaAkEjClAIiiPqhqEgFLisDBrQfvswUkDdGJSpXTNB68OiiIZ7tSVzKIeqysegUqmult+E9Or91MrZ/RS6C+4nfw55vZ9UqjeT/EmYr5Yhh8XUkU+A2kloIa76OcH7mSFqj0iQ9ELzgEBQlMj3k//M6EBHNcSQXTPa1KGGtsc1LLY0CKitfFsrhB5C4Ib6BbyVM6s+u6MNAAAAAElFTkSuQmCC');
        addAsset('shirt', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAACABAMAAABaeDKtAAAAD1BMVEUAAACrq6twcHCCgoKVlZXdkPLBAAAAAXRSTlMAQObYZgAAARFJREFUWMPtlkuOxCAMRE06B+CTA4CYAzR0DkAm97/TEImxjZoovWkpC79VxVWGrFCBIHyRKW5L9iPnMJpMpuLYHLcPo23PmzFLeZ9DqIZ74lF40KPqxf7P64fFq43BK0JdcNy40B+GJvw/hOaCINyEqK+NKYfC58xIBXUIpPOGujdSYjqwUNQeNSgyFA/tQBqADEgstALHkwxMv+CEH3mfBOEmTBFg3J8Oo8nVlNnsbI7b1XBtWx39Sbd5KnPXn5ZRf9p4f1qN+cUnote7g8Z8HqL36dEM7EwUegLSDIQWQBCEu6DytaFs9MMF5ciYrPXdnAxHIef4Ag9p0hoopDILua4/8Tp0GoJx6LQ/vUD4nD/QriHqbTirogAAAABJRU5ErkJggg==');
        addAsset('vest', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAACAAgMAAADVOMcNAAAADFBMVEUAAABgYGA3NzdSUlI3hTwnAAAAAXRSTlMAQObYZgAAAPBJREFUSMftlC0OwkAUhB/lP2lCFRhCiiT8VUCCRCJr6gggOQJB9QgIroGjCbJHqOAQyBoSJOzsNm+TIgiKko6YnW/Gbh7l+kqGb/hMvvGygufNkbF7ntjva851AAUrwrARzxQQSF+SAt35Oe21arjDk+Rc/6ZaGka+yoBQeO+gMoNtCe8iU5+4IlkNZEVQBB9L0KuGBAcew1kYcmVZb+5X0S2HfL/cqtivLZGjMu4XgI5NwoD7NekIP0tv0+dVCWA6qCxiIJnz/5V12SkwLtpQBFS2KgMW+Bk1NeAhrugGr+oncZZUrId2v0yCYgU/qCdIPDZcX7tWzwAAAABJRU5ErkJggg==');
        addAsset('bib', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAACABAMAAABaeDKtAAAAHlBMVEUAAACKioqmpqY4ODhTU1Nvb296enplZWVPT0/CwsI7IqY1AAAAAXRSTlMAQObYZgAAAXNJREFUWMPtlL1PwzAUxF0SaMemNDs1CMRmEBVrCkGsrVqLFTG4a8WXYGNjZ+HfxXzUd+ERqVtF65Mine9+T4pi5amoqDVTYr4fqc9i7tMiLUQeChxEjkJK5ubnnX75pUGmFvJPVNTK6WWRoilzWTScyGXR6FZziIrNczkg/1aCeMAwz1BJPmEmHRNEPi0IO9uFv7CGDjkOA4LSTh20TVBGUNMaDIwV9ECQesIFXN5R/mhUVNRqqYV9IwtaNjORo6j18rCl1DVy7yEcNrTewQCLikaWtWkAjG/ysLasHc796ItHU86t9QrbyfNQlk+C9QqrY5QRo3sWXofGduBVRx/m8LoX3unNe4Le/4KeGbrROnynW60PwnfSej9AzjlsLeemlSIq6h+ptUgxE7ksXFvkshi0RS6LkyHlsFx4T7mpQCVDrAS2X5IvGDLA7QTx8R4haQGoVxDURT6i4SQj6KgOulJQH0ViZwRNCTq9x6W8qqXoA3WjOmFOISczAAAAAElFTkSuQmCC');
        addAsset('eyes', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAACABAMAAABaeDKtAAAAElBMVEUAAAAwMDD6+vrX19c/Pz8TExPVZTWmAAAAAXRSTlMAQObYZgAAAFtJREFUWMPt1rsNwCAMRVHMp/cIjMAIjMD+06REzhNKpDQp7inf7S0nAABOzF+EsmTXkKfsGlLcAeDE3PwxlNXGbdeQZ+2y77CFHQA+fU9tyK6h9rBLEFwn/NsF2lYGYaXjXh8AAAAASUVORK5CYII=');
        addAsset('hair01', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAACAAgMAAADVOMcNAAAADFBMVEUAAABCQkJRUVFdXV2yGluKAAAAAXRSTlMAQObYZgAAALpJREFUSMft1CEOwkAUhOFpgSV1GAT1SO7QIxCCQFYQBAmWINdQvanA1dVwix6BI9GEmbyEcgAgO+r/8vzDly8F/Bsyn5ZsYbpbPtiCOzWBLeB2UAvISrYB6ri410arAdIz25AEtiGpnWcLSFq1ABzZBszVBnXcz+zT/+pGJVtwQGALY2CmFuwgJNWmYPe41j2wX4AHAXnLNkzWbAPUcX+3SzdA49kGV7CFNFSFWsitCdzBNmzVBnWc7QnlqzyXT5hm2wAAAABJRU5ErkJggg==');
        addAsset('hair10', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAACABAMAAABaeDKtAAAAElBMVEUAAABfX19OTk5zc3NnZ2d/f38hkxwfAAAAAXRSTlMAQObYZgAAAKRJREFUWMPtljEKwkAQRX8mOUDW9QCjYJ9iDxAJ9uL9D2O6MLwigiCi86r57/XL6r8YpW4vWGnt6MEzeKu3asEzaCh1jp5hHaPot0BWnyTJz3F+IViBZzgtEzzCpSzwCD7DM7joGXhzRJ8kyUfopHE3VOkaPYPdpd6DZ/BpvQ1+CxvBJ0mSvPeFUnF4hL4d4BFaecAjaDB4BMngEXBjgHwzk+/lCa77EuKvhU8sAAAAAElFTkSuQmCC');
        addAsset('hair02', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAACABAMAAABaeDKtAAAAElBMVEUAAABRUVFnZ2c4ODiAgICOjo7xpgV8AAAAAXRSTlMAQObYZgAAALRJREFUWMPtljsOwjAUBF9i6ONg+jif3sSixzlC7n8YFIpIqy1CARJIO8WTPXOBtS9y7t4IbSTP4RrBQzh64+c+kOcwD+Q5VA15Di6R52DohRC/wjgehz60E3oOdWl96MBzKIPZbQJPoRobM/cAT8H57aKn4PJ2wXOwTJ6DoRdC/Nt+0jQSQnyWZTkOayw9eg518TF04DmsF7M5gOdwSmbV0oCHsOMTeAg7OZHnkMFrRAnx4gmz6R67Eo5f8gAAAABJRU5ErkJggg==');

        setTimeout(() => resolve());
    });
}