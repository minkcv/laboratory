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
    uint8_t ring = 0x3F;
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

volatile uint128_t UNCBM q_get_sposition(uint128_t previous, CLTR cltr, struct Position pos)
{
    uint8_t ring = 0x3C;
    uncouple(pos, &ring);
    free_q(pos);
    while (previous)
    {
        CLSSR clssr = cltr_clssr(cltr);
        ring |= cltr_super(clssr);
        previous = cltr_prev(cltr);
    }
    return ring;
}

volatile void* UNCBM q_init(uint128_t id, CLTR cltr, void* buffer)
{
    uint8_t init_flags = q_malloc(sizeof(struct Energy) + sizeof(struct Position), buffer);
    uint8_t ring = cltr_register(init_flags, buffer);
    cltr_assert(id, ring);
    return buffer;
}

`,
`// MDVR.sys
// Copyright Objective Research Laboratories 1993
#include <particle.h>
#include <quantum.h>

extern union Q
{
    struct Position* pos;
    struct Energy* en;
};

volatile void q_transit(union Q* entry, union Q* exit)
{
    #BEGIN_PARALLEL
    Q_FLOAT angle = q_angle(entry, exit);
    Q_FLOAT distance = q_distance(entry, exit);
    #END_PARALLEL
    _transform_(ange, distance);
}
`,
`// LNDR.sys
// Copyright Objective Research Laboratories 1993
#include <stdio.h>
#include <quantum.h>

volatile uint128_t safe_disengage()
{
    uint128_t stability = compute_stability();
    while (stability > Q_MAX_STABILITY)
    {
        decelerate();
        stability = compute_stability();
    }
    if (g_speed == Q_FLOAT_ZERO)
    {
        printf("Safe Disengage Complete\\n");
    }
    return stability;
}

volatile uint128_t safe_engage()
{
    uint128_t base_stability = compute_stability();
    uint128_t stability;
    while (stability < Q_MAX_STABILITY + Q_FLOAT_ONE)
    {
        accelerate();
        stability = compute_stability(base_stability);
    }
    if (g_speed == Q_FLOAT_INF)
    {
        printf("Safe Engage Complete\\n");
    }
    return stability;
}
`,
`// HWND.sys
// Copyright Objective Research Laboratories 1993
#include <particle.h>
#include <quantum.h>

volatile void* q_alloc_junction(Q_FLOAT distance, Q_FLOAT angle)
{
    void* junction = pool_alloc(sizeof(struct Junction));
    init_junction(junction, distance, angle);
    return junction;
}

volatile void q_free_junction(void* junction)
{
    clean_junction(junction);
    pool_free(junction);
}

`,
];

for (var i = 0; i < codeFiles.length; i++) {
    codeFiles[i] = codeFiles[i].replace(/</g, '&lt;');
    codeFiles[i] = codeFiles[i].replace(/>/g, '&gt;');
}

layout.registerComponent( 'codeComponent', function(container, componentState){
    container.getElement().html('<pre class="log" id="code-file"></pre>');
});
