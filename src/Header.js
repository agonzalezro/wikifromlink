import React, { Component } from 'react'

class Header extends Component {
    render() {
        return <nav className="navbar navbar-expand-md navbar-light bg-white fixed-top">
            <div className="navbar-brand">wikifromlink.com <acronym title="This is still beta, use it under your own risk"><i className="fas fa-flask"></i></acronym></div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                <a className="nav-link" target="_blank" href="#eyJpdGVtcyI6W3siaGlzdG9yeSI6W3siZGF0ZSI6MTU2NDUwNDMwMDAxNSwiYm9keSI6IiMgVXNhZ2VcblxuVGhpcyBpcyBhIHNpbXBsZSBcIndpa2lcIiB3aGVyZSB5b3UgY2FuIHNoYXJlIHlvdXIgdGhvdWdodHMgd2l0aG91dCBzdG9yaW5nIGl0IGFueXdoZXJlIGVsc2UgdGhhbiBpbiB0aGUgVVJMLlxuXG5UaGlzIG1lYW5zIHRoYXQgaWYgeW91IHdhbnQgdGhlIGxhc3Qgc3RhdGUgb2YgeW91ciB3aWtpIHlvdSBuZWVkIHRvIHNoYXJlIHRoZSBsYXN0IGxpbmsgZ2VuZXJhdGVkIChhIG5ldyBsaW5rIHdpbGwgYmUgZ2VuZXJhdGVkIGVhY2ggdGltZSB5b3UgY2hhbmdlIHNvbWV0aGluZykuXG5cbllvdSBtaWdodCB0aGluZyB3aGVuIHRoaXMgY291bGQgY29tZSBoYW5keS4uLiBkaWQgeW91IGV2ZXIgd29yayBpbiBhIGJpZyBjb21wYW55IHdoZXJlIGFza2luZyBmb3IgYSBzaW1wbGUgd2lraSB3YXMgYSBuaWdodG1hcmU/IFByZXR0eSBzdXJlIHRoZXJlIGFyZSBtb3JlIHVzZSBjYXNlcyBvdXQgdGhlcmUuIExldCBtZSBrbm93IVxuXG4jIyBXcml0aW5nIGNvbnRlbnRcblxuVGhlIGNvbnRlbnQgY2FuIGJlIHdyaXR0ZW4gaW4gbWFya2Rvd24sIHNvIHlvdSBjYW4gdXNlIHRoaW5ncyBsaWtlOlxuXG4tIGxpc3RzXG4tIG9mXG4tIGl0ZW1zXG5cbk9yOlxuXG4xLiBOdW1lcmljXG4yLiBsaXN0c1xuMy4gYXMgd2VsbFxuXG5PciBldmVuIGltYWdlczpcblxuIVtkdWRlLCBzdWNraW5nIGF0IHNvbWV0aGluZyBpcyB0aGUgZmlyc3Qgc3RlcCB0b3dhcmRzIGJlaW5nIHNvcnQgb2YgZ29vZCBhdCBzb21ldGhpbmddKGh0dHBzOi8vbWVkaWExLnRlbm9yLmNvbS9pbWFnZXMvNzg5MTgzMzFmZDFmZTU1MWJmNjI1YTRlNmJmNmVjNDEvdGVub3IuZ2lmKVxuXG4jIyBLbm93biBidWdzXG5cbkhvd2V2ZXIsIHRoZXJlIGlzIG9uZSB0aGluZyB0aGF0IHlvdSBjYW4ndCBkbzogKip5b3UgY2FuIG5vdCB1c2UgZW1vamlzIHlldCEqKlxuXG4jIyBDb250YWN0XG5cblRoYXQncyBpdCEgSWYgeW91IG5lZWQgc29tZXRoaW5nIHlvdSBjYW4gcGluZyBtZSBvbiBbQGFnb256YWxlenJvXShodHRwczovL3R3aXR0ZXIuY29tL2Fnb256YWxlenJvKSBvciB5b3UgY2FuIGhlbHAgbWUgb3BlbmluZyBhIFBSIG9uIHRoZSBwcm9qZWN0OiBodHRwczovL2dpdGh1Yi5jb20vYWdvbnphbGV6cm8vd2lraWZyb21saW5rIn1dLCJpZCI6MX1dfQ==">Usage</a>
                </li>
            </ul>
            </div>
        </nav>
    }
}

export default Header