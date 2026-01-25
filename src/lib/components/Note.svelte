<script lang="ts">
 let { type = "tip", title, children } = $props();

 const types = {
     output:  { label: 'STDOUT',  color: '#F3E991', bg: '#1A1A1A', border: 'solid' },
     success: { label: 'PASSED',  color: '#27C93F', bg: '#ffffff', border: 'double' },
     warning: { label: 'HAZARD',  color: '#FF5C4D', bg: '#ffffff', border: 'dashed' },
     tip:     { label: 'ADVICE',  color: '#1A1A1A', bg: '#F3E991', border: 'solid' }
 };

 const current = $derived(types[type] || types.tip);
</script>

<style>
 .note-box {
     margin: 2.5rem 0;
     background: var(--bg);
     border: 3px var(--border-style) var(--accent);
     position: relative;
     box-shadow: 6px 6px 0px #1A1A1A;
 }

 /* Specific look for Output (Terminal) */
 .output {
     color: var(--accent);
     box-shadow: 8px 8px 0px #333;
 }

 .header {
     display: flex;
     align-items: center;
     gap: 4px;
     padding: 8px 15px 0 15px;
     font-family: 'JetBrains Mono', monospace;
     font-weight: 900;
     font-size: 0.7rem;
     letter-spacing: 1px;
 }

 .label { color: var(--accent); }
 .bracket { color: #1A1A1A; opacity: 0.5; }
 .output .bracket { color: var(--accent); opacity: 1; }

 .line {
     flex-grow: 1;
     height: 1px;
     background: #1A1A1A;
     opacity: 0.1;
     margin-left: 10px;
 }

 .content {
     padding: 1.25rem 1.5rem;
     font-size: 1rem;
     line-height: 1.6;
 }

 /* Success Variant - Triple Border effect */
 .success {
     border: 6px double #1A1A1A;
 }

 /* Tip Variant - Inverted */
 .tip .content {
     font-weight: 500;
 }
</style>

<div class="note-box {type}" style="--accent: {current.color}; --bg: {current.bg}; --border-style: {current.border}">
    <div class="header">
        <span class="bracket">[</span>
        <span class="label">{title || current.label}</span>
        <span class="bracket">]</span>
        <div class="line"></div>
    </div>
    <div class="content">
        {@render children()}
    </div>
</div>
