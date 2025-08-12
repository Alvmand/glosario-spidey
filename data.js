// === data.js ===
// Lista de palabras para las tarjetas de vocabulario.
// Los distractores respetan el tiempo/forma de la palabra en inglés.

const WORDS = [
  // ===== Corregidas (conjugaciones coherentes) =====
  {
    palabra: "Earned",
    traduccion: "se ganó / mereció",
    tipo: "Verbo",
    tiempo: "Pasado (earn → earned)",
    opciones: ["Se ganó / mereció", "Contribuyó", "Hirió", "Molestó"],
    correcta: "Se ganó / mereció",
    ejemplo: "Peter earned the editor’s respect after the exclusive on Menace."
  },
  {
    palabra: "Blamed",
    traduccion: "culpó / responsabilizó",
    tipo: "Verbo",
    tiempo: "Pasado (blame → blamed)",
    opciones: ["Culpó", "Protegió", "Escondió", "Construyó"],
    correcta: "Culpó",
    ejemplo: "Officer Gonzales blamed Spider-Man for the chaos in Chinatown."
  },
  {
    palabra: "Sworn",
    traduccion: "jurado; bajo juramento",
    tipo: "Participio / Adjetivo (de swear)",
    tiempo: "Past participle (swear → swore → sworn)",
    opciones: ["Jurado", "Asustado", "Molesto", "Callado"],
    correcta: "Jurado",
    ejemplo: "The hospital staff was sworn to secrecy after what happened with Jonah."
  },
  {
    palabra: "Hunting",
    traduccion: "cazando; buscando para capturar",
    tipo: "Gerundio (de hunt)",
    tiempo: "Present participle",
    opciones: ["Cazando", "Construyendo", "Llorando", "Saltando"],
    correcta: "Cazando",
    ejemplo: "The heroes were still hunting Menace through Red Hook."
  },
  {
    palabra: "Sullied",
    traduccion: "manchó; desacreditó (reputación)",
    tipo: "Verbo/Adjetivo",
    tiempo: "Pasado / Participio",
    opciones: ["Manchó", "Limpió", "Enderezó", "Curó"],
    correcta: "Manchó",
    ejemplo: "The Spider-Mugger sullied Spidey's name with his robberies."
  },
  {
    palabra: "Sagging",
    traduccion: "en decadencia; hundiéndose",
    tipo: "Participio usado como adjetivo",
    tiempo: "Present participle",
    opciones: ["En decadencia", "Elevado", "Estable", "Reforzado"],
    correcta: "En decadencia",
    ejemplo: "Dexter promised to save the DB's sagging tabloid."
  },
  {
    palabra: "Headed",
    traduccion: "se dirigió",
    tipo: "Verbo",
    tiempo: "Pasado",
    opciones: ["Se dirigió", "Se escondió", "Se rindió", "Se desvió"],
    correcta: "Se dirigió",
    ejemplo: "JJJ headed to the hospital after the scare."
  },
  {
    palabra: "Fence (criminal)",
    traduccion: "reducidor (intermediario de objetos robados)",
    tipo: "Sustantivo (jerga)",
    tiempo: "-",
    opciones: ["Reducidor", "Muralla", "Reja", "Armero"],
    correcta: "Reducidor",
    ejemplo: "Sean sold the loot to his fence, Dooley."
  },
  {
    palabra: "Dragged",
    traduccion: "arrastró; llevó a la fuerza",
    tipo: "Verbo",
    tiempo: "Pasado",
    opciones: ["Arrastró", "Llevó (amablemente)", "Invitó", "Liberó"],
    correcta: "Arrastró",
    ejemplo: "The Inner Demons dragged Bruno to Chinatown."
  },
  {
    palabra: "Recipe",
    traduccion: "receta; fórmula (fig.)",
    tipo: "Sustantivo",
    tiempo: "-",
    opciones: ["Receta / fórmula", "Recibo", "Recado", "Registro"],
    correcta: "Receta / fórmula",
    ejemplo: "The Tablet held the recipe for a lethal poison."
  },
  {
    palabra: "But not before",
    traduccion: "pero no antes de / no sin antes",
    tipo: "Locución",
    tiempo: "-",
    opciones: ["Pero no antes de", "Sin embargo", "A menos que", "Tan pronto como"],
    correcta: "Pero no antes de",
    ejemplo: "Spidey broke the Tablet, but not before Mister Negative escaped."
  },
  {
    palabra: "Hostage",
    traduccion: "rehén",
    tipo: "Sustantivo",
    tiempo: "-",
    opciones: ["Rehén", "Aliado", "Guardaespaldas", "Cómplice"],
    correcta: "Rehén",
    ejemplo: "Menace held a child from the Maggia as a hostage."
  },
  {
    palabra: "Sped uptown",
    traduccion: "se apresuró hacia el norte de la ciudad",
    tipo: "Verbo frasal",
    tiempo: "Pasado (speed → sped)",
    opciones: ["Se apresuró hacia el norte", "Caminó al sur", "Se detuvo", "Se escondió"],
    correcta: "Se apresuró hacia el norte",
    ejemplo: "Spider-Man sped uptown to Central Park."
  },
  {
    palabra: "Wives",
    traduccion: "esposas (plural)",
    tipo: "Sustantivo",
    tiempo: "-",
    opciones: ["Esposas", "Hijas", "Suegras", "Novias"],
    correcta: "Esposas",
    ejemplo: "The Maggia's wives and children were at the circus."
  },
  {
    palabra: "Sample",
    traduccion: "muestra",
    tipo: "Sustantivo",
    tiempo: "-",
    opciones: ["Muestra", "Ejemplo", "Sello", "Símbolo"],
    correcta: "Muestra",
    ejemplo: "Menace demanded a sample of Spidey's blood."
  },
  {
    palabra: "Got there",
    traduccion: "llegó allí",
    tipo: "Expresión verbal",
    tiempo: "Pasado",
    opciones: ["Llegó allí", "Se fue de allí", "Visitó a alguien", "Se perdió"],
    correcta: "Llegó allí",
    ejemplo: "Mister Negative got there first."
  },
  {
    palabra: "Raced",
    traduccion: "corrió; se apresuró",
    tipo: "Verbo",
    tiempo: "Pasado",
    opciones: ["Corrió", "Caminó", "Esperó", "Dudó"],
    correcta: "Corrió",
    ejemplo: "Spidey raced to the rescue."
  },
  {
    palabra: "Complied",
    traduccion: "accedió; cumplió",
    tipo: "Verbo",
    tiempo: "Pasado",
    opciones: ["Accedió", "Se negó", "Ordenó", "Castigó"],
    correcta: "Accedió",
    ejemplo: "Spidey complied and Mr. Negative escaped again."
  },
  {
    palabra: "Corpse",
    traduccion: "cadáver",
    tipo: "Sustantivo",
    tiempo: "-",
    opciones: ["Cadáver", "Herida", "Uniforme", "Archivo"],
    correcta: "Cadáver",
    ejemplo: "Spidey recovered his web-shooter from the corpse."
  },
  {
    palabra: "Reward",
    traduccion: "recompensa",
    tipo: "Sustantivo",
    tiempo: "-",
    opciones: ["Recompensa", "Castigo", "Horario", "Riesgo"],
    correcta: "Recompensa",
    ejemplo: "They offered a $10,000 reward for Menace's picture."
  },
  {
    palabra: "Mistaken for",
    traduccion: "confundido con",
    tipo: "Locución",
    tiempo: "-",
    opciones: ["Confundido con", "Confundido por", "Confundido hacia", "Acierto"],
    correcta: "Confundido con",
    ejemplo: "His web-shooter was mistaken for a watch."
  },
  {
    palabra: "Getting the rap",
    traduccion: "llevarse la culpa (coloquial)",
    tipo: "Expresión",
    tiempo: "-",
    opciones: ["Llevarse la culpa", "Recibir aplausos", "Repartir golpes", "Contar el chisme"],
    correcta: "Llevarse la culpa",
    ejemplo: "Guess who's getting the rap this time."
  },
  {
    palabra: "Glider",
    traduccion: "planeador",
    tipo: "Sustantivo",
    tiempo: "-",
    opciones: ["Planeador", "Avión", "Cometa", "Detector"],
    correcta: "Planeador",
    ejemplo: "Menace escaped on his modified glider."
  },
  {
    palabra: "Impaled",
    traduccion: "atravesó / empaló",
    tipo: "Verbo",
    tiempo: "Pasado/Participio",
    opciones: ["Atravesó", "Evitó", "Acarició", "Curó"],
    correcta: "Atravesó",
    ejemplo: "Menace's glider accidentally impaled the victim."
  },
  {
    palabra: "Rookie mistake",
    traduccion: "error de novato",
    tipo: "Expresión",
    tiempo: "-",
    opciones: ["Error de novato", "Golpe maestro", "Victoria", "Desacierto calculado"],
    correcta: "Error de novato",
    ejemplo: "Leaving the transmitter on was a rookie mistake."
  },
  {
    palabra: "Guilt-ridden",
    traduccion: "consumido por la culpa",
    tipo: "Adjetivo compuesto",
    tiempo: "-",
    opciones: ["Consumido por la culpa", "Orgulloso", "Indiferente", "Motivado"],
    correcta: "Consumido por la culpa",
    ejemplo: "Jackpot was guilt-ridden after the accident."
  },
  {
    palabra: "Played it coy",
    traduccion: "lo disimuló; se hizo el/la misterioso/a",
    tipo: "Expresión verbal",
    tiempo: "Pasado",
    opciones: ["Lo disimuló", "Se enfadó", "Confesó", "Se fue"],
    correcta: "Lo disimuló",
    ejemplo: "When asked if she was MJ, Jackpot played it coy."
  },
  {
    palabra: "Kidnapping",
    traduccion: "secuestro",
    tipo: "Sustantivo",
    tiempo: "-",
    opciones: ["Secuestro", "Asesinato", "Hurto", "Extorsión"],
    correcta: "Secuestro",
    ejemplo: "The police prevented a kidnapping at the debate."
  },
  {
    palabra: "Seemed to have",
    traduccion: "al parecer había",
    tipo: "Frase verbal",
    tiempo: "Pasado",
    opciones: ["Al parecer había", "Parecía tener", "Parecía estar", "Había parecido"],
    correcta: "Al parecer había",
    ejemplo: "After the explosion, there seemed to have been a fight on the rooftop."
  },

  // ===== Nuevas palabras de hoy =====
  {
    palabra: "Lame",
    traduccion: "aburrido / soso (coloquial)",
    tipo: "Adjetivo",
    tiempo: "-",
    opciones: ["Aburrido / soso", "Genial", "Arriesgado", "Brillante"],
    correcta: "Aburrido / soso",
    ejemplo: "Flash said the villain's plan was lame compared to Octavius'."
  },
  {
    palabra: "Namesake",
    traduccion: "tocayo",
    tipo: "Sustantivo",
    tiempo: "-",
    opciones: ["Tocayo", "Apodo", "Seudónimo", "Homenaje"],
    correcta: "Tocayo",
    ejemplo: "The scientist had a namesake named Peter… but not Parker."
  },
  {
    palabra: "Appointment",
    traduccion: "cita / reunión programada",
    tipo: "Sustantivo",
    tiempo: "-",
    opciones: ["Cita / reunión", "Improviso", "Salida", "Evento casual"],
    correcta: "Cita / reunión",
    ejemplo: "Peter had an appointment with Robbie before going on patrol."
  },
  {
    palabra: "Waste",
    traduccion: "desperdicio",
    tipo: "Sustantivo",
    tiempo: "-",
    opciones: ["Desperdicio", "Acierto", "Hallazgo", "Reserva"],
    correcta: "Desperdicio",
    ejemplo: "Shooting experimental webbing was a waste of Horizon's resources."
  },
  {
    palabra: "Bothered",
    traduccion: "preocupado / molesto",
    tipo: "Adjetivo (participio)",
    tiempo: "-",
    opciones: ["Preocupado", "Entusiasmado", "Orgulloso", "Divertido"],
    correcta: "Preocupado",
    ejemplo: "Peter was bothered by the symbiote's new chemistry."
  },
  {
    palabra: "So blunt",
    traduccion: "tan directo",
    tipo: "Frase adjetiva",
    tiempo: "-",
    opciones: ["Tan directo", "Muy tímido", "Demasiado formal", "Algo confuso"],
    correcta: "Tan directo",
    ejemplo: "JJJ was so blunt when asking for evidence against Spider-Man."
  },
  {
    palabra: "I mean",
    traduccion: "quiero decir (muletilla)",
    tipo: "Frase",
    tiempo: "-",
    opciones: ["Quiero decir", "Dicho sea de paso", "De todos modos", "Sin embargo"],
    correcta: "Quiero decir",
    ejemplo: "I mean, nobody wants to fight Rhino during rush hour."
  },
  {
    palabra: "Disguise",
    traduccion: "disfraz",
    tipo: "Sustantivo",
    tiempo: "-",
    opciones: ["Disfraz", "Máscara social", "Uniforme", "Armadura"],
    correcta: "Disfraz",
    ejemplo: "The Chameleon used a clever disguise to sneak into the Bugle."
  },
  {
    palabra: "Midget",
    traduccion: "término despectivo para ‘persona de talla baja’",
    tipo: "Sustantivo (ofensivo)",
    tiempo: "-",
    opciones: ["Término despectivo", "Héroe diminuto", "Aliado secreto", "Villano menor"],
    correcta: "Término despectivo",
    ejemplo: "The term 'midget' is offensive; in his reports, Peter writes 'person of short stature'."
  },
  {
    palabra: "At least",
    traduccion: "al menos",
    tipo: "Locución adverbial",
    tiempo: "-",
    opciones: ["Al menos", "Apenas", "Casi nunca", "Por completo"],
    correcta: "Al menos",
    ejemplo: "At least, the spider-tracer still worked."
  },
  {
    palabra: "What do you think this is?",
    traduccion: "¿Qué crees que es esto?",
    tipo: "Pregunta / frase fija",
    tiempo: "-",
    opciones: ["¿Qué crees que es esto?", "¿Quién hizo esto?", "¿Dónde estás?", "¿Cuándo termina?"],
    correcta: "¿Qué crees que es esto?",
    ejemplo: "'What do you think this is?' —shouted Jonah, holding the blurry photo of Spidey."
  },
  {
    palabra: "Coddle",
    traduccion: "mimar / sobreproteger",
    tipo: "Verbo",
    tiempo: "Base form",
    opciones: ["Mimar / sobreproteger", "Ignorar", "Castigar", "Enseñar"],
    correcta: "Mimar / sobreproteger",
    ejemplo: "May refuses to coddle Peter when he's late for 'work'."
  },
  {
    palabra: "Smother",
    traduccion: "sofocar; agobiar (con afecto)",
    tipo: "Verbo",
    tiempo: "Base form",
    opciones: ["Sofocar / agobiar", "Refrescar", "Exaltar", "Inspirar"],
    correcta: "Sofocar / agobiar",
    ejemplo: "The symbiote tries to smother Peter, physically and emotionally."
  },
  {
    palabra: "Both",
    traduccion: "ambos",
    tipo: "Determinante / Pronombre",
    tiempo: "-",
    opciones: ["Ambos", "Ninguno", "Cualquiera", "Uno"],
    correcta: "Ambos",
    ejemplo: "Both Spidey and Daredevil patrolled Hell’s Kitchen that night."
  },
  {
    palabra: "Wonder",
    traduccion: "preguntarse / maravillarse",
    tipo: "Verbo",
    tiempo: "Base form",
    opciones: ["Preguntarse", "Confirmar", "Asegurar", "Mandar"],
    correcta: "Preguntarse",
    ejemplo: "Sometimes Peter can't help but wonder if he could live without the mask."
  }
];

