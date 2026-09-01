"use client";

import { useEffect, useState } from "react";
import type { PortfolioContent } from "@/lib/content";

const editableSections = ["hero", "footer", "navItems", "gridItems", "projects", "testimonials", "companies", "workExperience", "socialMedia"] as const;
type Section = typeof editableSections[number];

export default function AdminPage() {
    const [content, setContent] = useState<PortfolioContent | null>(null);
    const [section, setSection] = useState<Section>("hero");
    const [password, setPassword] = useState("");
    const [jsonValue, setJsonValue] = useState("");
    const [message, setMessage] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    async function loadContent() {
        const response = await fetch("/api/admin/content");
        if (!response.ok) return setLoggedIn(false);
        const data = await response.json() as PortfolioContent;
        setContent(data);
        setJsonValue(JSON.stringify(data[section], null, 2));
        setLoggedIn(true);
    }

    useEffect(() => { loadContent(); }, []);

    useEffect(() => {
        if (content) setJsonValue(JSON.stringify(content[section], null, 2));
    }, [section, content]);

    async function login(event: React.FormEvent) {
        event.preventDefault();
        const response = await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) });
        if (response.ok) { setPassword(""); await loadContent(); } else setMessage("Invalid password");
    }

    function updateField(field: string, value: string) {
        if (!content) return;
        setContent({ ...content, [section]: { ...(content[section] as object), [field]: value } });
    }

    async function save() {
        if (!content) return;
        let next = content;
        if (section !== "hero" && section !== "footer") {
            try { next = { ...content, [section]: JSON.parse(jsonValue) }; } catch { setMessage("The section must contain valid JSON"); return; }
        }
        const response = await fetch("/api/admin/content", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(next) });
        setMessage(response.ok ? "Saved to MongoDB" : (await response.json()).error || "Save failed");
        if (response.ok) setContent(next);
    }

    if (!loggedIn) return <main className="min-h-screen bg-black-100 text-white flex items-center justify-center px-6"><form onSubmit={login} className="w-full max-w-sm space-y-5"><p className="text-purple uppercase tracking-[0.3em] text-xs">Portfolio CMS</p><h1 className="text-4xl font-bold">Admin access</h1><input autoFocus type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Admin password" className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 outline-none" /><button className="w-full rounded-lg bg-purple px-4 py-3 font-semibold">Sign in</button>{message && <p className="text-red-300">{message}</p>}</form></main>;

    const simpleFields = section === "hero" ? ["eyebrow", "title", "subtitle", "resumeUrl"] : ["heading", "description", "email"];
    return <main className="min-h-screen bg-black-100 text-white px-6 py-10 md:px-12"><div className="mx-auto max-w-6xl"><div className="flex flex-wrap items-end justify-between gap-5 border-b border-white/10 pb-8"><div><p className="text-purple uppercase tracking-[0.3em] text-xs">Portfolio CMS</p><h1 className="mt-3 text-4xl font-bold">Content dashboard</h1><p className="mt-2 text-white/60">Edit one field at a time, then publish it to MongoDB.</p></div><button onClick={() => fetch("/api/auth/logout", { method: "POST" }).then(() => setLoggedIn(false))} className="rounded-lg border border-white/20 px-4 py-2 text-sm">Sign out</button></div><div className="mt-8 grid gap-8 lg:grid-cols-[220px_1fr]"><nav className="space-y-2">{editableSections.map((item) => <button key={item} onClick={() => setSection(item)} className={`block w-full rounded-lg px-4 py-3 text-left capitalize ${section === item ? "bg-purple text-white" : "bg-white/5 text-white/70"}`}>{item.replace(/([A-Z])/g, " $1")}</button>)}</nav><section className="rounded-xl border border-white/10 bg-white/[0.03] p-5 md:p-8"><div className="mb-6 flex items-center justify-between"><h2 className="text-2xl font-semibold capitalize">{section.replace(/([A-Z])/g, " $1")}</h2><button onClick={save} className="rounded-lg bg-purple px-5 py-2 font-semibold">Save changes</button></div>{section === "hero" || section === "footer" ? <div className="space-y-5">{simpleFields.map((field) => <label key={field} className="block"><span className="mb-2 block text-sm capitalize text-white/60">{field}</span><textarea rows={field === "title" || field === "description" ? 3 : 1} value={(content?.[section] as Record<string, string>)?.[field] || ""} onChange={(event) => updateField(field, event.target.value)} className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-purple" /></label>)}</div> : <textarea value={jsonValue} onChange={(event) => setJsonValue(event.target.value)} spellCheck={false} className="min-h-[520px] w-full rounded-lg border border-white/10 bg-black/30 p-4 font-mono text-sm leading-6 text-white/90 outline-none focus:border-purple" />}{message && <p className="mt-5 text-emerald-300">{message}</p>}</section></div></div></main>;
}