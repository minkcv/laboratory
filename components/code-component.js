var codeFiles = [
`// CMDR.sys
// Copyright Objective Research Laboratories 1993
#include <particle.h>
#include <quantum.h>
#include <boson.h>
#include <quark.h>
#include <hadron.h>
#include <lepton.h>

volatile uint128_t UNCBM q_get_spin(uint128_t previous, CLTR cltr, struct Energy en)
{
    uint8_t ring = 0x3f;
    uncouple(en, &ring);
    free_q(en);
    while (previous)
    {
        CLSSR clssr = cltr_clssr(cltr);
        ring |= cltr_super(clssr);
        previous = cltr_prev(cltr);
    }
    return ring;
}

`,
`// MDVR.sys
// Copyright Objective Research Laboratories 1993
`,
`// LNDR.sys
// Copyright Objective Research Laboratories 1993
`,
`// HWND.sys
// Copyright Objective Research Laboratories 1993
`,
];

for (var i = 0; i < codeFiles.length; i++) {
    codeFiles[i] = codeFiles[i].replace(/</g, '&lt;');
    codeFiles[i] = codeFiles[i].replace(/>/g, '&gt;');
}

layout.registerComponent( 'codeComponent', function(container, componentState){
    container.getElement().html('<div class="log"><pre id="code-file"></pre></div>');
});