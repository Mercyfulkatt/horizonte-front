export class Endoscopia {
    constructor(
      public _id: string,
      public ESTUDIO: string,
      public INDICACIONES: string,
      public PRECIO_PUBLICO: string,
      public PRECIO_PUBLICO_URGENCIA: string,
      public PRECIO_PUBLICO_HOSPITALIZACION: string,
      public PRECIO_PUBLICO_HOSPITALIZACION_URGENCIA: string,
      public PRECIO_MEMBRESIA: string,
      public PRECIO_MEMBRESIA_URGENCIA: string,
      public PRECIO_MEMBRESIA_HOSPITALIZACION: string,
      public PRECIO_HOSPITALIZACION_URGENCIA_MEMBRESIA: string,
    ){}
}
